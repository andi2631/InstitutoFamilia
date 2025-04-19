import React from 'react';

interface EventComponentProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const EventComponent: React.FC<EventComponentProps> = ({ src, alt, onClick }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-s shadow-lg m-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl" onClick={onClick}>

      {/* Flyer evento */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default EventComponent;
