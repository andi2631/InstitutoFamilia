import EventComponent from "./EventComponent";
import { useNavigate } from "react-router-dom";
import { events } from "../Events/eventsList";

interface EventParams {
  eventName: string;
}

const EventGallery = () => {
  const navigate = useNavigate();

  const handleClick = (params: EventParams) => {
    const fullRoute = Object.keys(params).reduce((acc, key) => {
      const value = params[key as keyof EventParams];
      return acc.replace(`:${key}`, String(value));
    }, "/events/:eventName");

    navigate(fullRoute);
  };

  return (
    <section id="gallery" className="bg-gradient-to-b from-blue-50 via-white to-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-14 border-l-4 border-[#003DA5] pl-6 sm:pl-10">
          <h2 className="font-grotesk text-4xl font-medium tracking-tight text-[#10182B] sm:text-5xl">
            Nuestras actividades
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventComponent
              key={event.url}
              src={event.src}
              alt={event.alt}
              eventName={event.eventName}
              onClick={() => handleClick({ eventName: event.url })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
