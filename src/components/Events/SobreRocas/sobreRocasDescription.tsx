import React from "react";

const SobreRocasDescription: React.FC = () => {
  return (
    <div className="text-lg text-gray-700 leading-relaxed">
      <p className="my-2">
        <strong>Sobre Roca: Cuatro Citas y un Retiro de dos.
          ¡Un antes y un después!
        </strong>
      </p>
      <p>
        Una oportunidad para fortalecer y profundizar la conexión en tu matrimonio. Cuatro Citas + un Retiro de fin de semana que te van a dar herramientas clave para crecer como pareja.
      </p>

      <p className="mt-2">
        Es una actividad para esposos de todas las edades, sin importar si practican o no la Fe. ¡Todos son bienvenidos!
      </p>

      <h3 className="text-xl font-semibold my-4 ">¿Cómo funciona?</h3>
      <ul className="list-disc pl-6">
        <li>En las citas, se tratan diferentes temas conyugales a solas con tu pareja. A diferencia de otras actividades, en estos encuentros no hay grupos ni se comparte la conversación. Es un espacio solo para ustedes.</li>
        <li>Si vivís lejos de Montevideo, no hay problema. Las citas se pueden hacer por Zoom y solo se deberá viajar para el Retiro.</li>
        <li>El Retiro es un fin de semana donde van a profundizar y darle un impulso nuevo a su relación.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Fechas y horarios:</h3>
      <p className="mt-2">
        📍 Las Citas son los lunes en Carrasco o los miércoles en Parque Batlle, de 20:00 a 22:10. <br />
        🗓 Será en segundo semestre del año, fechas aún por definir.  <br /><br />

        📍 El Retiro será en un Hotel de Montevideo<br />
        🕖 Desde el sábado a las 9:00 hasta el domingo a las 18:00
      </p>
      <h3 className="text-xl font-semibold mt-4">
        Formulario de pre inscripción 2025: <a href="" className="text-blue-600 underline"> https://forms.gle/YB2MveagVbztR44R9</a>
      </h3>
    </div>
  );
};

export default SobreRocasDescription;
