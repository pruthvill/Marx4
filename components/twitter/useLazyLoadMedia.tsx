import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const useLazyLoadMedia = (mediaDetail: { type: string; url: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentMediaRef = mediaRef.current;
    if (currentMediaRef) {
      observer.observe(currentMediaRef);
    }

    return () => {
      if (currentMediaRef) {
        observer.unobserve(currentMediaRef);
      }
    };
  }, []);

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

export default useLazyLoadMedia;
