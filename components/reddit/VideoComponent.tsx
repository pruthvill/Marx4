import React, { useRef } from 'react';

interface VideoComponentProps {
  fileName: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ fileName }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      style={{ maxWidth: '400px', overflow: 'hidden' }}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
    >
      <video
        ref={videoRef}
        src={fileName}
        className="post-media rounded-[4px] object-cover mt-2"
        style={{ width: '100%', height: 'auto' }}
        controls
        preload="metadata"
      />
    </div>
  );
};

export default VideoComponent;