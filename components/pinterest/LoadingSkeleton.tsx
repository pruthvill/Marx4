import React from 'react';

const LoadingSkeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-3 gap-4 min-w-xl max-w-xl">
        {skeletonItems.map((item) => (
          <div
            key={item}
            className="rounded-[4px] overflow-hidden border border-gray-400 bg-gray-300"
            style={{
              minWidth: '130px',
              minHeight: '200px',
              position: 'relative',
              margin: '0',
              scrollbarWidth: 'none',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;