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
      src: "https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Cimientos_flyer.jpeg",
      alt: "Curso: Matrimonio",
      eventName: "Curso: Matrimonio",
      id: 2,
      path: "cimientos",
    },
    {
      src: "https://via.placeholder.com/500x750?text=Flyer+no+disponible", // Placeholder si no hay imagen
      alt: "Curso: Sobre Rocas",
      eventName: "Curso: Sobre Rocas",
      id: 1,
      path: "sobreRocas",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Próximos Cursos
        </h2>
        
        {/* Contenedor de eventos en fila */}
        <div className="flex flex-wrap justify-center gap-8">
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
