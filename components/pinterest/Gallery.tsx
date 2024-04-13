import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoadingSkeleton from './LoadingSkeleton';

const Gallery: React.FC = () => {
  const [totalPins, setTotalPins] = useState<number>(0);
  const [pinData, setPinData] = useState<{ image_url: string; pin_url: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/pins.json');
        const data = await response.json();
        setPinData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handlePinClick = (pinUrl: string) => {
    window.open(`https://www.pinterest.com.au${pinUrl}`, '_blank');
  };

  return (
    <div className="">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-3 gap-4 min-w-xl max-w-xl">
          {pinData.map((pin, index) => (
            <div
              key={index}
              className="rounded-[4px] overflow-hidden border border-gray-400"
              style={{
                minWidth: '130px',
                minHeight: '200px',
                position: 'relative',
                margin: '0',
                scrollbarWidth: 'none',
              }}
            >
              <div onClick={() => handlePinClick(pin.pin_url)} className="cursor-pointer rounded-[4px]">
                <Image
                  src={pin.image_url}
                  alt={`Image ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="post-media rounded-[4px]"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;