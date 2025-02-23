import React from "react";

interface MediaComponentProps {
  src: string;
  alt: string;
  type: "image" | "video"; // Agregar el tipo de media
}

const MediaComponent: React.FC<MediaComponentProps> = ({ src, alt, type }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      {type === "image" ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto aspect-[16/9] object-contain object-center transition duration-300 ease-in-out transform hover:scale-105"
        />
      ) : (
        <video
          controls
          className="w-full h-auto aspect-[16/9] object-contain"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      )}
    </div>
  );
};

export default MediaComponent;
