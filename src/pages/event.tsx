import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { eventMap } from "../components/Events/eventsMap";
import { events } from "../components/Events/eventsList";
import Gallery from "../components/Gallery/Gallery";
import CursoMatrimonioDescription from "../components/Events/CursoMatrimonio/cursoMatrimonioDescription";
import SobreRocasDescription from "../components/Events/SobreRocas/sobreRocasDescription";
import MetodosNaturalesDescription from "../components/Events/Fertilidad/fertilidadDescription";

const BackLink = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-[#003DA5] transition-colors hover:text-[#0B1B33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      Volver
    </button>
  );
};

const EventPage: React.FC = () => {
  const { eventName } = useParams<{ eventName: string }>();
  const navigate = useNavigate();

  if (!eventName) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
        <p className="font-grotesk text-2xl font-medium text-[#10182B]">
          El evento solicitado no es válido.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#003DA5] px-7 py-3.5 font-grotesk font-semibold text-white transition-colors hover:bg-[#0B1B33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40 focus-visible:ring-offset-2"
        >
          Volver a la página principal
        </button>
      </div>
    );
  }

  const validEventIds = events.map((event) => event.url);
  if (!validEventIds.includes(eventName)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="font-grotesk text-3xl font-medium text-[#10182B]">
          Evento no encontrado
        </h1>
        <p className="mt-3 max-w-md text-lg text-[#10182B]/70">
          El evento <span className="font-semibold text-[#003DA5]">{eventName}</span> no
          existe. Nuestras actividades actuales son Sobre Roca, Cimientos y
          Reconocimiento de la Fertilidad.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#003DA5] px-7 py-3.5 font-grotesk font-semibold text-white transition-colors hover:bg-[#0B1B33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40 focus-visible:ring-offset-2"
        >
          Volver a la página principal
        </button>
      </div>
    );
  }

  const event = eventMap[eventName];

  const renderEventInfo = () => {
    switch (event.id) {
      case 1:
        return <CursoMatrimonioDescription />;
      case 3:
        return <MetodosNaturalesDescription />;
      default:
      case 2:
        return <SobreRocasDescription />;
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <BackLink />

        <div className="mt-8 border-l-4 border-[#003DA5] pl-6 sm:pl-10">
          <h1 className="font-grotesk text-4xl font-medium leading-[0.95] tracking-tight text-[#10182B] sm:text-5xl">
            {event.name}
          </h1>
        </div>

        <div className="mt-10">{renderEventInfo()}</div>

        {event.folderName && (
          <div className="mt-4">
            <Gallery eventName={event.folderName} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
