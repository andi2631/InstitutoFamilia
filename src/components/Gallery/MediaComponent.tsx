import React from "react";
import { Play } from "lucide-react";

interface MediaComponentProps {
  src: string;
  alt: string;
  type: "image" | "video";
  /** true para el slide visible y sus vecinos: se cargan de inmediato */
  priority?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onOpen?: () => void;
}

/**
 * Contenido de un slide: la foto (o el video) centrada sobre un fondo
 * desenfocado de la misma imagen, para que las fotos verticales y
 * horizontales convivan sin franjas blancas.
 */
const MediaComponent: React.FC<MediaComponentProps> = ({
  src,
  alt,
  type,
  priority = false,
  onPlay,
  onPause,
  onOpen,
}) => {
  if (type === "video") {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-slate-900">
        <video
          controls
          preload="metadata"
          className="max-h-full max-w-full"
          onPlay={onPlay}
          onPause={onPause}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-900">
      {/* fondo desenfocado */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-lg"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ampliar: ${alt}`}
        className="group relative flex h-full w-full cursor-zoom-in items-center justify-center focus:outline-none"
      >
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      </button>
    </div>
  );
};

export const MediaThumb: React.FC<{ media: MediaComponentProps }> = ({ media }) =>
  media.type === "video" ? (
    <span className="flex h-full w-full items-center justify-center bg-slate-800">
      <Play className="h-4 w-4 text-white" fill="currentColor" />
    </span>
  ) : (
    <img
      src={media.src}
      alt=""
      className="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  );

export default MediaComponent;
