import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="border border-gray-400 rounded-[4px] overflow-hidden cursor-pointer w-[432px] p-4 mb-4 animate-pulse">
      <div className="flex justify-between items-center">
        <div>
          <div className="h-6 bg-gray-300 rounded- mb-2 w-80"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-96"></div>
          <div className="flex items-center ">
            <div className="h-3 bg-gray-300 rounded-full mr-2 w-6"></div>
            <div className="h-4 bg-gray-300 rounded mr-4 w-32"></div>
            <div className="h-4 bg-gray-300 rounded mr-2 w-40"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;