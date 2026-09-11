import React from "react";
import { ArrowRight } from "lucide-react";

interface EventComponentProps {
  src: string;
  alt: string;
  eventName: string;
  onClick?: () => void;
}

const EventComponent: React.FC<EventComponentProps> = ({
  src,
  alt,
  eventName,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40"
    >
      <div className="aspect-[9/16] w-full overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center justify-between border-t-2 border-[#003DA5] pt-3">
        <span className="font-grotesk text-lg font-medium text-[#10182B]">
          {eventName}
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-[#003DA5] transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </button>
  );
};

export default EventComponent;
