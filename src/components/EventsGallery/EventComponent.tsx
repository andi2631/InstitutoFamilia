import React from 'react';

interface EventComponentProps {
  src: string;
  alt: string;
  eventName: string;
  onClick?: () => void;
}

const EventComponent: React.FC<EventComponentProps> = ({ src, alt, eventName, onClick }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg m-2 cursor-pointer" onClick={onClick}>
      {/* Título */}
      <div className="bg-gray-700 text-white text-center font-bold p-3">
        {eventName}
      </div>
      
      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
};

export default EventComponent;
