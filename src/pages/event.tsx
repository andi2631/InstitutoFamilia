import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { eventMap } from '../components/Events/eventsMap';

const EventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const numericEventId = Number(eventId);

  // Validar que el ID sea un número
  if (isNaN(numericEventId) || numericEventId <= 0) {
    return <p>Error: El parámetro `eventId` no es válido.</p>;
  }

  const validEventIds = [1, 2];
  if (!validEventIds.includes(numericEventId)) {
    return (
      <div>
        <h1>Evento no encontrado</h1>
        <p>El evento con ID {numericEventId} no existe.</p>
        <button onClick={() => navigate('/')}>Volver a la página principal</button>
      </div>
    );
  }

  const event = eventMap[numericEventId];

  return (
    <div>
      <h1>Detalles del Evento: {event.description}</h1>
      <p>ID del evento: {eventId}</p>
      {/* Puedes usar el eventId para buscar más información */}
    </div>
  );
};

export default EventPage;
