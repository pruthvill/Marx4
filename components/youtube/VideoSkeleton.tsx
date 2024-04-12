import React from 'react';

const VideoSkeleton = () => {
  return (
    <div className="video-item border border-gray-400 rounded-[4px] p-2 mb-4 flex items-center cursor-pointer hover:shadow-md min-w-xl animate-pulse">
      <div className="video-thumbnail rounded-[4px] bg-gray-300 w-48 h-[78px]"></div>
      <div className="video-details flex-grow ml-6">
      <div className="video-title rounded-[4px] h-4 mb-2 bg-gray-300 w-[256px]"></div>        <div className="video-title  rounded-[4px] mb-4 h-4 bg-gray-300 w-24"></div>
        <div className="video-info text-base text-gray-400 mt-2">
          <div className="video-channel font-medium mb-1 h-4 bg-gray-300 w-36   "></div>
          <div className="video-stats flex items-center mt-1">
            <div className="video-views mr-4 h-4 bg-gray-300 w-16"></div>
            <div className="video-upload-time h-4 bg-gray-300 w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;
