import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GalleryProps, listMediaFromFolder, MediaFile } from "./utils/s3";
import MediaComponent from "./MediaComponent";
import { useEffect, useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000, 
  cssEase: "linear",
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};


const Gallery: React.FC<GalleryProps> = ({ eventName }) => {

  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        let allMedia: MediaFile[] = [];
          const media = await listMediaFromFolder(eventName);
          allMedia = [...allMedia, ...media];
        setMediaFiles(allMedia);
      } catch (error) {
        console.error("Error al cargar archivos multimedia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) return <p> Cargando multimedia...</p>;

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Slider {...settings}>
        {mediaFiles.map((media, index) => (
          <div key={index} className="flex justify-center items-center">
            <MediaComponent src={media.src} alt={`Multimedia ${index}`} type={media.type} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
