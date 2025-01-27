import EventComponent from "./EventComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
import { EventData } from "../../utils/types";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,

};

const EventGallery = () => {

  const navigate = useNavigate();

  const handleClick = (params : EventParams) => {
    const fullRoute = Object.keys(params).reduce((acc, key) => {
      const value = params[key as keyof EventParams];
      return acc.replace(`:${key}`, String(value));
    }, 'events/:eventId');
    
    navigate(fullRoute);
  }

  interface EventParams {
    eventId: number;
  }

 const events : EventData[] = [
  {
    src: 'flyer curso matrimonio', //Cambiar por la url de la imagen
    alt: 'Curso: Matrimonio',
    eventName: 'Curso: Matrimonio',
    id: 2,
  },
  {
    src: 'flyer sobre rocas', //Cambiar por la url de la imagen
    alt: 'Curso: Sobre Rocas',
    eventName: 'Curso: Sobre Rocas',
    id: 1,
  },
  ];

  return (
    <section id="gallery" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Próximos comienzos: </h2> 
        <Slider {...settings}>
          {events.map((event, index) => (
            <EventComponent key={index} src={event.src} alt={event.alt} eventName={event.eventName} onClick={() => handleClick({eventId : event.id})} />
          ))}
        </Slider>
      </div>
    </section>
  );
};


export default EventGallery;