import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { eventMap } from '../components/Events/eventsMap';

const EventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const numericEventId = Number(eventId);

  // Validar que el ID sea un número
  if (isNaN(numericEventId) || numericEventId <= 0) {
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

  const validEventIds = [1, 2];
  if (!validEventIds.includes(numericEventId)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Evento no encontrado</h1>
        <p className="text-lg text-gray-600 mt-2">
          El evento con ID <span className="text-red-600 font-semibold">{numericEventId}</span> no existe.
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

  const event = eventMap[numericEventId];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-800">{event.name}</h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            {event.description}
          </p>

          <div className="mt-6">
            <p className="text-gray-600">
              <span className="font-semibold text-blue-700">ID del Evento:</span> {eventId}
            </p>
            {/* Si hay más detalles en event, puedes mostrarlos aquí */}
          </div>

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
