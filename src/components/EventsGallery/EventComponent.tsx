import React from 'react';

//const bucketUrl = 'https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Screenshot+2024-10-21+083746.png'

interface EventComponentProps {
  src: string;
  alt: string;
  eventName: string;
  onClick?: () => void;
}

const EventComponent: React.FC<EventComponentProps> = ({ src, alt, eventName, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg m-2" onClick={onClick}>
      <h3 className="text-2xl font-bold cursor-pointer text-white bg-gray-900 bg-opacity-75 p-2 object-cover object-center transition duration-300 ease-in-out transform hover:scale-105 text-center">{eventName}</h3>
      <img
        src={src}
        alt={alt}
        className="w-full h-64 "
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};


export default EventComponent;