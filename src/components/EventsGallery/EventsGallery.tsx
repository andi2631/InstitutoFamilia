import EventComponent from "./EventComponent";
import { useNavigate } from "react-router-dom";
import { events } from "../Events/eventsList";

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


  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-b from-blue-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 relative">
          Nuestras actividades:
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16 h-1 bg-blue-500 rounded"></span>
        </h2>

        {/* Contenedor de eventos en cuadrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="transform transition-transform duration-300 hover:scale-200"
            >
              <EventComponent
                src={event.src}
                alt={event.alt}
                onClick={() => handleClick({ eventName: event.url })}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
