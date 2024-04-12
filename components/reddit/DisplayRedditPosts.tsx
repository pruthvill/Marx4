import React, { useEffect, useState, useMemo, Suspense } from 'react';
import MediaImage from './MediaImage';
import VideoComponent from './VideoComponent';
import LoadingSkeleton from './LoadingSkeleton';


interface RedditPost {
  data: {
    title: string;
    url: string;
    subreddit: string;
    author: string;
    created_utc: number;
    permalink: string;
    post_hint?: string;
    media?: {
      reddit_video?: {
        fallback_url: string;
      };
      oembed?: {
        thumbnail_url?: string;
      };
    };
    thumbnail?: string;
  };
}

const DisplayRedditPosts = () => {
  const [savedPosts, setSavedPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clientId = 'HE7NI7wWTIQz4vlrqri66g';
    const clientSecret = '4-D0r-UyLqmGrv5jyN2gq7LRSCZGng';
    const username = 'pruthvil';
    const password = 'bikac.56';
    const userAgent = `web:my_reddit_app:v1.0 (by /u/${username})`;

    fetchAccessToken();

    async function fetchAccessToken() {
      try {
        const response = await fetch('https://www.reddit.com/api/v1/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            'User-Agent': userAgent,
          },
          body: new URLSearchParams({
            grant_type: 'password',
            username: username,
            password: password,
            scope: 'history',
          }).toString(),
        });

        const data = await response.json();
        const accessToken = data.access_token;

        fetchSavedPosts(accessToken);
      } catch (error) {
        console.error('Error fetching access token:', error);
        setLoading(false);
      }
    }

    async function fetchSavedPosts(accessToken: string) {
      try {
        const allSavedPosts: RedditPost[] = [];
        let after: string | null = null;
        const limit = 25; // Number of posts per page

        do {
          const savedData = await fetchSavedPostsPage(accessToken, after, limit);
          if (savedData.data.children) {
            allSavedPosts.push(...savedData.data.children);
          }
          after = savedData.data.after || null;
        } while (after !== null);

        setSavedPosts(allSavedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching saved posts:', error);
        setLoading(false);
      }
    }

    async function fetchSavedPostsPage(accessToken: string, after: string | null, limit: number) {
      let url = `https://oauth.reddit.com/user/${username}/saved?limit=${limit}&sort=new`;
      if (after) {
        url += `&after=${after}`;
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': userAgent,
        },
      });
      const savedPostsData = await response.json();
      return savedPostsData;
    }
  }, []);

  const getRelativeTime = useMemo(() => {
    return (created_utc: number): string => {
      const postDate = new Date(created_utc * 1000);
      const now = new Date();

      const timeDifference = Math.abs(now.getTime() - postDate.getTime()) / 1000;

      const years = Math.floor(timeDifference / (365 * 24 * 3600));
      const months = Math.floor((timeDifference % (365 * 24 * 3600)) / (30 * 24 * 3600));
      const days = Math.floor((timeDifference % (30 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((timeDifference % (24 * 3600)) / 3600);
      const minutes = Math.floor((timeDifference % 3600) / 60);

      if (years > 0) {
        return years === 1 ? '1 year ago' : `${years} years ago`;
      } else if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
      } else if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
      } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
      } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
      } else {
        return 'Just now';
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="reddit-posts">
        {Array.from({ length: 5 }, (_, i) => <LoadingSkeleton key={i} />)}
      </div>
    );
  }
  if (!savedPosts.length) {
    return <div>No saved posts found.</div>;
  }

  const DisplayRedditPost: React.FC<{ post: RedditPost }> = ({ post }) => {
    const isVideoPost =
      post.data.post_hint === 'hosted:video' ||
      post.data.post_hint === 'rich:video' ||
      (post.data.url && post.data.url.endsWith('.gifv')) ||
      (post.data.media && post.data.media.reddit_video);

    const isImagePost =
      post.data.post_hint === 'image' ||
      (post.data.url && (post.data.url.endsWith('.jpg') || post.data.url.endsWith('.png')));

    const displayMedia = isVideoPost ? (
      <Suspense
        fallback={
          <div className="video-skeleton rounded-[4px]" style={{ minWidth: '374px', maxWidth: '374px', minHeight: '445px', maxHeight: '445px' }} />
        }
      >
        <VideoComponent fileName={post.data.media?.reddit_video?.fallback_url || post.data.url} />
      </Suspense>
    ) : isImagePost ? (
      <MediaImage
        imageUrl={
          post.data.url || (post.data.media && post.data.media.oembed && post.data.media.oembed.thumbnail_url) || ''
        }
      />
    ) : post.data.thumbnail && post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default' ? (
      <MediaImage imageUrl={post.data.thumbnail} />
    ) : null;

    return (
      <a
        key={post.data.permalink}
        href={`https://www.reddit.com${post.data.permalink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="post-link"
      >
<div className="post-card border border-gray-400 hover:shadow-md rounded-[4px] p-4 cursor-pointer mb-4 flex flex-col min-w-xl max-w-xl" style={{ maxWidth: '400px' }}>
 
          <div className="post-info flex items-center">
            <a
              href={`https://www.reddit.com/r/${post.data.subreddit}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-subreddit text-black font-semibold mr-2 hover:underline"
            >
              r/{post.data.subreddit}
            </a>
            <a
              href={`https://www.reddit.com/u/${post.data.author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              u/{post.data.author}
            </a>
            <span className="text-gray-500 ml-2">{getRelativeTime(post.data.created_utc)}</span>
          </div>
          <div className="post-title text-lg font-semibold mt-2">
            <a
              href={`https://www.reddit.com${post.data.permalink}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {post.data.title}
            </a>
          </div>
          {displayMedia}
        </div>
      </a>
    );
  };

  return (
    <div className="reddit-posts">
      <Suspense fallback={<div>Loading...</div>}>
        {savedPosts.map((post) => <DisplayRedditPost key={post.data.permalink} post={post} />)}
      </Suspense>
    </div>
  );
}

export default DisplayRedditPosts;