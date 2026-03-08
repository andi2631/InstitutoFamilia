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
        <li>En las citas se tratan diferentes temas de la vida matrimonial, entre ustedes dos solos.</li>
        <li>Si vivís lejos de Montevideo, no hay problema. Las citas se pueden hacer por Zoom y solo se deberá viajar para el Retiro.</li>
        <li>El Retiro es un fin de semana donde van a profundizar y darle un impulso nuevo a su relación.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Fechas y horarios:</h3>
      <p className="mt-2">
        A definir...
      </p>
      <h3 className="text-xl font-semibold mt-4">
        Formulario de inscripción 2026: <a href="forms.gle/SfeDoccMgu6MQsb79" className="text-blue-600 underline"> Click aquí</a>
      </h3>
      <div className="flex items-center space-x-4 mt-4">
        <a href="https://www.instagram.com/sobreroca_matrimonios/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logos/logo_ig.webp"
            alt="Instagram"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default SobreRocasDescription;
