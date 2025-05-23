import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GalleryProps, listMediaFromFolder, MediaFile } from "./utils/getPhotos";
import MediaComponent from "./MediaComponent";
import { useEffect, useState, useRef } from "react";

const Gallery: React.FC<GalleryProps> = ({ eventName }) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const fetchMedia = () => {
      try {
        const media = listMediaFromFolder(eventName);
        setMediaFiles(media);
      } catch (error) {
        console.error("Error al cargar archivos multimedia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const handlePlay = () => {
    setAutoplay(false);
    sliderRef.current?.slickPause();
  };

  const handlePause = () => {
    setAutoplay(true);
    sliderRef.current?.slickPlay();
  };

  if (loading) return <p>Cargando multimedia...</p>;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 border-2 border-gray-200 rounded-xl shadow-md bg-white p-6">
      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        speed={1000}
        cssEase="linear"
        arrows={false}
        autoplay={autoplay}
        autoplaySpeed={2500}
      >
        {mediaFiles.map((media, index) => (
          <div key={index} className="flex justify-center items-center">
            <MediaComponent
              src={media.src}
              alt={`Multimedia ${index}`}
              type={media.type}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
