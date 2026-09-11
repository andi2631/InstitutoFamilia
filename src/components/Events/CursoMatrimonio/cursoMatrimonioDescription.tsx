import React from "react";

const linkClass =
  "text-[#003DA5] underline underline-offset-2 decoration-[#003DA5]/40 hover:decoration-[#003DA5] transition-colors";

const CursoMatrimonioDescription: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-[#10182B]/80">
      <h3 className="font-grotesk text-2xl font-medium italic text-[#10182B]">
        Encuentros prematrimoniales
      </h3>
      <p className="mt-4 font-semibold text-[#10182B]">
        Preparación para construir un matrimonio sólido
      </p>
      <p className="mt-2">
        Cimientos es un programa de cinco encuentros prematrimoniales
        diseñado para ayudar a las parejas a construir una base firme antes
        del matrimonio. A través de la guía de profesionales de diversas
        áreas, abordamos temas clave para fortalecer la relación y
        prepararse para una vida matrimonial basada en el amor mutuo, en la
        entrega sin medida y por sobre todo en la unión con Dios.
      </p>

      <h3 className="mt-8 mb-3 font-grotesk text-xl font-semibold text-[#10182B]">
        ¿Qué encontrarás en estos encuentros?
      </h3>
      <ul className="list-disc space-y-2 pl-5 marker:text-[#003DA5]">
        <li>
          <strong className="text-[#10182B]">El noviazgo auténtico:</strong>{" "}
          Reflexionaremos sobre su importancia y cómo vivirlo plenamente.
          Conocerse, tratarse y respetarse.
        </li>
        <li>
          <strong className="text-[#10182B]">Comunicación efectiva:</strong>{" "}
          ¿Cómo nos hablamos? ¿Cómo mejorar nuestra forma de expresarnos?
        </li>
        <li>
          <strong className="text-[#10182B]">
            Sexualidad y fertilidad:
          </strong>{" "}
          Un don y un desafío para el matrimonio. Métodos naturales.
        </li>
        <li>
          <strong className="text-[#10182B]">Los lenguajes del amor:</strong>{" "}
          Conociéndolos para fortalecer el vínculo.
        </li>
        <li>
          <strong className="text-[#10182B]">Aprender a perdonar:</strong>{" "}
          Clave para una relación saludable. Si hay perdón, todo tiene
          solución.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Pautas para manejar el dinero en pareja:
          </strong>{" "}
          Construyendo una economía sólida juntos.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Autoestima en la pareja:
          </strong>{" "}
          Cuidando el bienestar emocional de ambos.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Proyecto de vida compartido:
          </strong>{" "}
          Construyendo un futuro juntos.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Las diferencias entre el hombre y la mujer:
          </strong>{" "}
          Cómo enriquecen la relación.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Sacramento del matrimonio:
          </strong>{" "}
          Importancia del consentimiento.
        </li>
        <li>
          <strong className="text-[#10182B]">
            Testimonios de matrimonios:
          </strong>{" "}
          Experiencias reales de quienes han recorrido este camino.
        </li>
      </ul>

      <h3 className="mt-8 mb-3 font-grotesk text-xl font-semibold text-[#10182B]">
        Metodología del programa
      </h3>
      <p>
        Cada módulo incluye charlas y dinámicas interactivas dirigidas por
        especialistas. Al finalizar el curso realizaremos una entrevista
        personal con cada pareja de novios para tener una instancia
        personalizada y poder recibir de los participantes su experiencia y
        su feedback sobre los encuentros.
      </p>

      <h3 className="mt-8 mb-3 font-grotesk text-xl font-semibold text-[#10182B]">
        ¿Cuándo y dónde?
      </h3>
      <p>
        El curso se realiza <strong className="text-[#10182B]">dos veces al año</strong>,
        al inicio de cada semestre, y cuenta con un{" "}
        <strong className="text-[#10182B]">cupo aproximado de 20 parejas</strong>.
      </p>
      <ul className="mt-3 list-disc space-y-3 pl-5 marker:text-[#003DA5]">
        <li>
          <strong className="text-[#10182B]">MODALIDAD:</strong>
          <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-[#003DA5]">
            <li>
              <strong className="text-[#10182B]">📍 Presencial:</strong> En
              Montevideo, con posibilidad de evaluar casos de personas del
              interior u otras situaciones especiales.
            </li>
            <li>
              <strong className="text-[#10182B]">💻 Virtual:</strong> A
              través del links de YouTube. Se entregan los módulos y luego de
              la finalización de cada uno hay una devolución del mismo vía
              Whatsapp. Al finalizar el curso hay una entrevista virtual con
              un matrimonio del equipo de ICF.
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-[#10182B]">ORGANIZA:</strong> Instituto de
          Ciencias Familiares (ICF) - Uruguay.
        </li>
      </ul>

      <h3 className="mt-8 mb-3 font-grotesk text-xl font-semibold text-[#10182B]">
        ¡Inscríbete y prepárate para construir un futuro juntos!
      </h3>
      <p>
        Nos entusiasma recibir a todos los novios que desean prepararse para
        esta gran vocación y conocer el plan de Dios para cada familia. Para
        más información e inscripciones, no dudes en ponerte en contacto con
        nosotros.
      </p>
      <h3 className="mt-8 font-grotesk text-xl font-semibold text-[#10182B]">
        📋 Formulario de inscripción 2025:{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc7TyEEzppLPeHOWy7kWpaHq1zfERARt91B8mPu-1DoMutiDg/viewform"
          className={linkClass}
        >
          https://forms.gle/1J3GQ9n7Ls4J9x3X7
        </a>
      </h3>
    </div>
  );
};

export default CursoMatrimonioDescription;
