import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PinData {
  url: string;
}

const Pin: React.FC<PinData> = ({ url }) => {
  return (
    <div className="mb-4 border border-gray-300  rounded-[4px]">
      <div className="relative flex-shrink-0">
        <Image
          src={url}
          alt="Pin"
          width={225} // Adjust width as needed
          height={150} // Adjust height as needed
          objectFit="fill"
          objectPosition="center"
          className="rounded-[4px]"


        />
      </div>
    </div>

  );
};

const DisplayPinterestBoards: React.FC = () => {
  const [pins, setPins] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('pinterest_combined_data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPins(data['Board Pins Data']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5
">
        {Object.keys(pins).map((category, index) => (
          <div key={index} className="board">
            <h2 className="board-title text-xl font-semibold text-gray-900 mb-4 
">
              {category}
            </h2>
            <div className="grid grid-cols-1  
">
              {pins[category].map((pin, pinIndex) => (
                <Pin key={pinIndex} url={pin} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPinterestBoards;
