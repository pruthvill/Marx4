import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import VideoSkeleton from './VideoSkeleton';

interface VideoData {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
  };
  statistics: {
    viewCount: number;
  };
}

const getRelativeTime = (publishedAt: string) => {
  const timeUploaded = new Date(publishedAt).getTime();
  const now = new Date().getTime();
  const diff = now - timeUploaded;

  if (diff < 60000) {
    return 'Just now';
  } else if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diff < 2592000000) {
    const days = Math.floor(diff / 86400000);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diff < 31536000000) {
    const months = Math.floor(diff / 2592000000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diff / 31536000000);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

const formatViewCount = (viewCount: number) => {
  if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)} million views`;
  } else if (viewCount >= 1000) {
    return `${Math.floor(viewCount / 1000)}k views`;
  } else {
    return `${viewCount} views`;
  }
};

function DisplayYoutubePosts() {
  const [playlistData, setPlaylistData] = useState<any>(null);
  const [videoDetails, setVideoDetails] = useState<Record<string, VideoData>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = async (nextPageToken?: string) => {
    try {
      const playlistId = 'PL4A-P6Ov1Tu36Iq3c3aT6ocPuQ8I3JyPh';
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Use environment variable for API key
      const maxResults = 50;

      let api_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`;
      if (nextPageToken) {
        api_url += `&pageToken=${nextPageToken}`;
      }

      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setPlaylistData((prevData: any) => ({
        ...data,
        items: [...(prevData?.items || []), ...data.items],
      }));

      const videoIds = data.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
      const videos_api_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${apiKey}`;
      const videosResponse = await fetch(videos_api_url);
      if (!videosResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const videoData = await videosResponse.json();
      const newVideoDetails: Record<string, VideoData> = {};
      videoData.items.forEach((video: VideoData) => {
        newVideoDetails[video.id] = video;
      });
      setVideoDetails((prevDetails) => ({
        ...prevDetails,
        ...newVideoDetails,
      }));

      if (data.nextPageToken) {
        fetchVideos(data.nextPageToken);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch videos.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="youtube max-w-[450px] m-0 p-0">
        {/* Render a fixed number of skeletons (e.g., 5) */}
        {[...Array(12)].map((_, index) => (
          <VideoSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const videosToDisplay = Object.values(videoDetails);

  return (
    <div className="youtube max-w-[450px] m-0 p-0 ">
      {videosToDisplay.map((video: VideoData) => {
        const channelTitle = video.snippet.channelTitle;
        const viewCount = video.statistics.viewCount;
        const publishedAt = video.snippet.publishedAt;
        const timeUploaded = getRelativeTime(publishedAt);
        const viewCountFormatted = formatViewCount(viewCount);

        return (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="video-item border border-gray-400  rounded-[4px] p-2 mb-4 flex items-center  cursor-pointer hover:shadow-md min-w-xl max-w-xl">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={140}
                height={100}
                className="video-thumbnail rounded-[4px] object-cover min-w-[140px]"
              />
              <div className="video-details flex-grow ml-4">
                <h3 className="video-title font-semibold text-lg text-black mb-1  w-full">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={video.snippet.title}
                    className=" "
                  >
                    {video.snippet.title.length > 70
                      ? `${video.snippet.title.substring(0, 50)}...`
                      : video.snippet.title}
                  </a>
                </h3>
                <div className="video-info text-sm text-gray-600">
                  <div className="video-channel font-medium mb-1">{channelTitle}</div>
                  <div className="video-stats flex items-center">
                    <span className="video-views mr-2">{viewCountFormatted}</span>
                    <span className="video-upload-time">{timeUploaded}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default DisplayYoutubePosts;
