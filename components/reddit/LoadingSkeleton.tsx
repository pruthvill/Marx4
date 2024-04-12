import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="post-card border border-gray-400 rounded-[4px] p-6 mb-6 flex flex-col min-w-96  animate-pulse">
      <div className="post-info flex items-center">
        <div className="bg-gray-300 h-8 w-32 rounded-full mr-4"></div>
        <div className="bg-gray-300 h-8 w-32 rounded-full"></div>
        <div className="bg-gray-300 h-8 w-32 rounded-full ml-auto"></div>
      </div>
      <div className="post-title text-xl font-semibold mt-4">
        <div className="bg-gray-300 h-10 w-full rounded"></div>
      </div>
      <div className="mt-6">
        <div className="rounded-[4px]  mb-2 bg-gray-300 h-96 w-[360px]"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
