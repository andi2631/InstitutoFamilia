import EventComponent from "./EventComponent";
import { useNavigate } from "react-router-dom";
import { EventData } from "../../utils/types";

const EventGallery = () => {
  const navigate = useNavigate();

  const handleClick = (params: EventParams) => {
    const fullRoute = Object.keys(params).reduce((acc, key) => {
      const value = params[key as keyof EventParams];
      return acc.replace(`:${key}`, String(value));
    }, "/events/:eventName");

    navigate(fullRoute);
  };

  interface EventParams {
    eventName: string;
  }

  const events: EventData[] = [
    {
      src: "/logos/Cimientos_flyer.jpeg",
      alt: "",
      eventName: "Cimientos del Matrimonio",
      id: 2,
      path: "cimientos",
    },
    {
      src: "https://via.placeholder.com/500x750?text=Flyer+no+disponible",
      alt: "",
      eventName: "Sobre Roca",
      id: 1,
      path: "sobreRocas",
    },
    {
      src: "https://via.placeholder.com/500x750?text=Flyer+no+disponible",
      alt: "",
      eventName: "Curso de Fertilidad",
      id: 3,
      path: "reconocimientoFertilidad",
    }
  ];

  return (
    <section data-aos="zoom-in" id="gallery" className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-lexend-bold text-gray-800 text-center mb-5 ">
          Nuestras actividades:
        </h2>

        {/* Contenedor de eventos en fila */}
        <div className="flex flex-nowrap justify-center gap-8 overflow-x-auto">
          {events.map((event, index) => (
            <EventComponent
              key={index}
              src={event.src}
              alt={event.alt}
              eventName={event.eventName}
              onClick={() => handleClick({ eventName: event.path })}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventGallery;
