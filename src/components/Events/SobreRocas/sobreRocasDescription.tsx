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
        Es una actividad para <b>esposos de todas las edades</b>, sin importar si tienen fe o no. ¡Todos son bienvenidos!
      </p>

      <h3 className="text-xl font-semibold my-4 ">¿Cómo funciona?</h3>
      <ul className="list-disc pl-6">
        <li>En las <strong>citas</strong>, van a tratar diferentes temas conyugales a <strong>solas con tu pareja</strong>. A diferencia de otras actividades, <strong>en estos encuentros no hay grupos ni se comparte la conversación. </strong> Es un espacio solo para ustedes.</li>
        <li>Si vivís lejos de Montevideo, no hay problema. Las citas se pueden hacer por Zoom y solo se deberá viajar para el Retiro.</li>
        <li>El Retiro es un fin de semana donde van a profundizar todo lo aprendido y darle un impulso nuevo a su relación.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Fechas y horarios:</h3>
      <p className="mt-2">
        📍 Las Citas son los miércoles de 20:00 a 22:10 en xxxxxxx 2640 (cerca del Obelisco). <br />
        ➡️ 28 de agosto, 4, 11 y 25 de septiembre. <br />
        📍 El Retiro será en el Hotel xxxx, Montevideo<br/>
        🗓 Fin de semana del xx al xx de septiembre <br/>
        🕖 Desde el sábado a las 9:00 hasta el domingo a las 18:00
      </p>
      <h3 className="text-xl font-semibold mt-4">
        Formulario de inscripción 2025: <a href="" className="text-blue-600 underline"></a>
      </h3>
    </div>
  );
};

export default SobreRocasDescription;
