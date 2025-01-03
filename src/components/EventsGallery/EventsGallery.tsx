import EventComponent from "./EventComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
import { EventData } from "../../utils/types";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
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
    src: 'flyer curso matrimonio',
    alt: 'Curso de Matrimonio',
    eventName: 'Curso de Matrimonio',
    id: 1,
  },
  {
    src: 'flyer sobre rocas',
    alt: 'Sobre Rocas',
    eventName: 'Sobre Rocas',
    id: 2,
  },
  ];

  return (
    <section id="gallery" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Proximos comienzos: </h2>
        <Slider {...settings}>
          {events.map((event, index) => (
            //Colocar flyers de eventos a comenzar
            <EventComponent key={index} src={event.src} alt={event.alt} eventName={event.eventName} onClick={() => handleClick({eventId : event.id})} />
          ))}
        </Slider>
      </div>
    </section>
  );
};


export default EventGallery;