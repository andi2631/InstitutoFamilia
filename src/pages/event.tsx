import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { eventMap } from '../components/Events/eventsMap';
import { events } from "../components/Events/eventsList";
import Gallery from '../components/Gallery/Gallery';
import CursoMatrimonioDescription from '../components/Events/CursoMatrimonio/cursoMatrimonioDescription';
import SobreRocasDescription from '../components/Events/SobreRocas/sobreRocasDescription';
import MetodosNaturalesDescription from '../components/Events/Fertilidad/fertilidadDescription';

const EventPage: React.FC = () => {
  const { eventName } = useParams<{ eventName: string }>();
  const navigate = useNavigate();

  if (!eventName) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <p className="text-xl font-semibold text-red-600">
          Error: El parámetro <strong>`eventId`</strong> no es válido.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Volver a la página principal
        </button>
      </div>
    );
  }

  const validEventIds = events.map(event => event.url);
  if (!validEventIds.includes(eventName)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Evento no encontrado</h1>
        <p className="text-lg text-gray-600 mt-2">
          El evento con nombre <span className="text-red-600 font-semibold">{eventName}</span> no existe.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Nuestros actuales eventos son: Sobre Roca, Cimientos y reconocimiento de la fertilidad.
        </button>
      </div>
    );
  }

  const event = eventMap[eventName];

  const renderEventInfo = () => {
    switch (event.id) {
      case 1:
        return <CursoMatrimonioDescription />;
      default:
      case 2:
        return <SobreRocasDescription />
      case 3:
        return <MetodosNaturalesDescription />
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 justify-center">
          <h1 className="text-4xl font-bold text-blue-800 my-4 text-center mx-auto">
            {event.name}
          </h1>
          {renderEventInfo()}
          <div className="mt-6">
            <p className="text-gray-600">
            </p>
          </div>
          {event.folderName &&
            <div className="flex flex-col items-center gap-8">
              <Gallery eventName={event.folderName} />
            </div>}

          <button
            onClick={() => navigate('/')}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Volver a la página principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
