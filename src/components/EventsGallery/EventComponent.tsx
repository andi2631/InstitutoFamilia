import React from 'react';

interface EventComponentProps {
  src: string;
  alt: string;
  eventName: string;
  onClick?: () => void;
}

const EventComponent: React.FC<EventComponentProps> = ({ src, alt, eventName, onClick }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg m-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg" onClick={onClick}>      <div className="bg-pantone-classic-blue font-bold text-white text-center font-lexend p-2">
      {eventName}
    </div>

      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default EventComponent;
