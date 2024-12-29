import React from 'react';

//const bucketUrl = 'https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Screenshot+2024-10-21+083746.png'

interface EventComponentProps {
  src: string;
  alt: string;
}

const EventComponent: React.FC<EventComponentProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover object-center transition duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
  );
};


export default EventComponent;