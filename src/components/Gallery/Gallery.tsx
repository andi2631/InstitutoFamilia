
import ImageComponent from './ImageComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: true,
};

const bucketUrl = 'https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Screenshot+2024-10-21+083746.png'

const Gallery = () => {
  const images = [
    { src: `${bucketUrl}`, alt: 'Community event' },
    { src: 'https://source.unsplash.com/random/800x600?volunteer', alt: 'Volunteers working' },
    { src: 'https://source.unsplash.com/random/800x600?education', alt: 'Educational program' },
    { src: 'https://source.unsplash.com/random/800x600?environment', alt: 'Environmental project' },
    { src: 'https://source.unsplash.com/random/800x600?teamwork', alt: 'Team collaboration' },
    { src: 'https://source.unsplash.com/random/800x600?impact', alt: 'Making an impact' },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Nuestro eventos: </h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <ImageComponent key={index} src={image.src} alt={image.alt} />
          ))}
        </Slider>
      </div>
    </section>
  );
};


export default Gallery;