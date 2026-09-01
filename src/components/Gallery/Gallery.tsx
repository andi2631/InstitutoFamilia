import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryProps, listMediaFromFolder, MediaFile } from "./utils/getPhotos";
import MediaComponent, { MediaThumb } from "./MediaComponent";

const AUTOPLAY_MS = 5000;

const Gallery: React.FC<GalleryProps> = ({ eventName }) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [lightbox, setLightbox] = useState<boolean>(false);

  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = mediaFiles.length;

  useEffect(() => {
    try {
      setMediaFiles(listMediaFromFolder(eventName));
    } catch (error) {
      console.error("Error al cargar archivos multimedia:", error);
    } finally {
      setLoading(false);
    }
  }, [eventName]);

  const goTo = useCallback(
    (next: number) => {
      if (!total) return;
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // autoplay: se detiene al pasar el mouse, con un video andando o en pantalla completa
  useEffect(() => {
    if (total < 2 || hovered || videoPlaying || lightbox) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [total, hovered, videoPlaying, lightbox]);

  // teclado: flechas para navegar, Esc para cerrar la pantalla completa
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    if (!lightbox) return;
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  // mantiene visible la miniatura activa
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index]);

  if (loading) {
    return (
      <div className="mx-auto my-8 h-72 w-full max-w-4xl animate-pulse rounded-2xl bg-gray-200" />
    );
  }

  if (!total) return null;

  const current = mediaFiles[index];

  const arrowClass =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 p-2 text-blue-900 shadow-lg backdrop-blur transition hover:bg-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-0";

  return (
    <section className="mx-auto my-10 w-full max-w-4xl" aria-label="Galería de fotos">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="text-lg font-semibold text-blue-800">Galería</h3>
        <span className="text-sm tabular-nums text-gray-500">
          {index + 1} / {total}
        </span>
      </div>

      <div
        className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-black/5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          if (start === null) return;
          const delta = e.changedTouches[0].clientX - start;
          if (Math.abs(delta) > 50) (delta > 0 ? prev : next)();
          touchStartX.current = null;
        }}
      >
        <div className="aspect-[4/3] max-h-[70vh] w-full sm:aspect-[3/2]">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {mediaFiles.map((media, i) => (
              <div key={media.src} className="h-full w-full shrink-0">
                <MediaComponent
                  src={media.src}
                  alt={media.alt || `Foto ${i + 1} de ${eventName}`}
                  type={media.type}
                  priority={Math.abs(i - index) <= 1}
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                  onOpen={() => setLightbox(true)}
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className={`${arrowClass} left-3`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto siguiente"
              className={`${arrowClass} right-3`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div
          ref={thumbsRef}
          className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {mediaFiles.map((media, i) => (
            <button
              key={media.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              aria-current={i === index}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg transition focus:outline-none ${
                i === index
                  ? "opacity-100 ring-2 ring-blue-600 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <MediaThumb media={{ ...media, alt: media.alt || "" }} />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Foto anterior"
                className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Foto siguiente"
                className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {current.type === "image" ? (
            <img
              src={current.src}
              alt={current.alt || `Foto ${index + 1}`}
              className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              controls
              autoPlay
              className="max-h-[88vh] max-w-[92vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={current.src} type="video/mp4" />
            </video>
          )}

          <span className="absolute bottom-5 rounded-full bg-white/10 px-3 py-1 text-sm tabular-nums text-white">
            {index + 1} / {total}
          </span>
        </div>
      )}
    </section>
  );
};

export default Gallery;
