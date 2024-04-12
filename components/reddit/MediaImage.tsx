import Image from 'next/image';

interface MediaImageProps {
  imageUrl: string;
}

const MediaImage: React.FC<MediaImageProps> = ({ imageUrl }) => {
  return (
    <div style={{ maxWidth: "400px", overflow: "hidden" }}>
      <Image
        src={imageUrl}
        alt="Reddit Image"
        width={386}
        height={445}
        className="post-media rounded-[4px] object-cover mt-2"
        loading="lazy"
      />
    </div>
  );
};

export default MediaImage;
