
import ImageComponent from './ImageComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GalleryProps } from './utils/GalleryList';

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
  cssEase: "linear",
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Gallery: React.FC<GalleryProps> = ({ GalleryPhotos, eventName }) => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8"> {eventName} </h2>
        <Slider {...settings}>
          {GalleryPhotos.map((image, index) => (
            <ImageComponent key={index} src={image.src} alt={image.alt} />
          ))}
        </Slider>
      </div>
    </section>
  );
};


export default Gallery;