import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Heart, Repeat, MessageSquare } from 'lucide-react';

interface Tweet {
  address: string;
  otherPropertiesMap: {
    owner_display_name: string;
    owner_screen_name: string;
    tweet_text: string;
    has_media: string;
    media_details: {
      type: string;
      url: string;
    }[];
    created_at: string;
    favorite_count: number;
    retweet_count: number;
    reply_count: number;
  };
}

const DisplayTwitterPosts: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const mediaObserver = useRef<IntersectionObserver | null>(null);
  const [mediaVisibility, setMediaVisibility] = useState<{ [key: string]: boolean }>({});

  const fetchTweets = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/Btantricwizard.json?page=${page}&limit=20`);
      if (!response.ok) {
        throw new Error('Failed to fetch tweets');
      }
      const data: Tweet[] = await response.json();
      setTweets((prevTweets) => [...prevTweets, ...data]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(data.length === 2); // Set hasMore to true if we got 20 tweets, false otherwise
    } catch (error) {
      console.error('Error fetching tweets:', error);
      // Handle error state here, e.g., display an error message
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  useEffect(() => {
    if (!hasMore || loadMoreRef.current === null) return;

    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          fetchTweets();
        }
      });
    }, options);

    if (loadMoreRef.current && observer.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fetchTweets, hasMore, loading]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    mediaObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMediaVisibility((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
          mediaObserver.current?.unobserve(entry.target);
        }
      });
    }, options);

    return () => {
      if (mediaObserver.current) {
        mediaObserver.current.disconnect();
      }
    };
  }, []);

  const handleMediaRender = (mediaDetail: { type: string; url: string }, index: number, tweetId: string) => {
    const MediaComponent = () => {
      const isVisible = mediaVisibility[`${tweetId}-${index}`] || false;
      const mediaRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        const currentMediaRef = mediaRef.current;
        if (currentMediaRef) {
          currentMediaRef.id = `${tweetId}-${index}`;
          if (!isVisible) {
            mediaObserver.current?.observe(currentMediaRef);
          }
        }
      }, [isVisible, tweetId, index]);

      if (!isVisible) {
        return <div ref={mediaRef} style={{ height: '200px', backgroundColor: '#f0f0f0' }} />;
      }

      if (mediaDetail.type === 'video/mp4') {
        return (
          <div ref={mediaRef} className="w-full h-auto rounded-[4px] shadow-md mb-4">
            <video controls className="w-full h-auto rounded-[4px] shadow-md" style={{ maxWidth: '100%' }}>
              <source src={mediaDetail.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else {
        return (
          <div ref={mediaRef} className="w-full h-auto rounded-[4px] shadow-md mb-4 overflow-hidden">
            <Image src={mediaDetail.url} alt="" width={300} height={200} objectFit="contain" />
          </div>
        );
      }
    };

    return <MediaComponent />;
  };

  const createTweetElement = (tweet: Tweet) => {
    const mediaDiv =
      tweet.otherPropertiesMap.has_media === 'true' &&
      tweet.otherPropertiesMap.media_details &&
      tweet.otherPropertiesMap.media_details.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {tweet.otherPropertiesMap.media_details.map((mediaDetail, index) => (
            handleMediaRender(mediaDetail, index, tweet.address)
          ))}
        </div>
      );

    return (
      <div key={tweet.address} className="p-4 mb-4 border border-gray-400 rounded-[4px] overflow-hidden shadow-md cursor-pointer max-w-xl min-w-xl " style={{  scrollbarWidth: "none" }}>
        <div className="flex items-start">
          <div>
            <div className="font-bold text-blue-600 text-lg">{tweet.otherPropertiesMap.owner_display_name}</div>
            <div className="text-gray-600">@{tweet.otherPropertiesMap.owner_screen_name}</div>
          </div>
        </div>
        <div className="text-lg font-medium mt-2">{tweet.otherPropertiesMap.tweet_text}</div>
        {mediaDiv}
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <div className="flex gap-4">
            <div className="flex items-center">
              <Heart size={16} className="mr-1" />
              <span>{tweet.otherPropertiesMap.favorite_count}</span>
            </div>
            <div className="flex items-center">
              <Repeat size={16} className="mr-1" />
              <span>{tweet.otherPropertiesMap.retweet_count}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              <span>{tweet.otherPropertiesMap.reply_count}</span>
            </div>
            <div>{tweet.otherPropertiesMap.created_at}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-xl min-w-xl "  style={{  scrollbarWidth: "none" }}>
      {tweets.map((tweet, index) => (
        <div key={tweet.address}>
          {createTweetElement(tweet)}
          {index === tweets.length - 1 && (
            <div ref={loadMoreRef} style={{ height: '10px' }}>
              {loading && <div>Loading more...</div>}
              {!loading && !hasMore && <div>No more tweets to load</div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayTwitterPosts;
