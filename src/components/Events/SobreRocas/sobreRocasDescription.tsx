import React from "react";

const linkClass =
  "text-[#003DA5] underline underline-offset-2 decoration-[#003DA5]/40 hover:decoration-[#003DA5] transition-colors";

const SobreRocasDescription: React.FC = () => {
  return (
    <div className="text-lg leading-relaxed text-[#10182B]/80">
      <p className="font-semibold text-[#10182B]">
        Sobre Roca: Tres Citas y un Retiro de dos. ¡Un antes y un después!
      </p>
      <p className="mt-4">
        Una oportunidad para fortalecer y profundizar la conexión en tu
        matrimonio. Tres Citas + un Retiro de fin de semana que te van a dar
        herramientas clave para crecer como pareja.
      </p>

      <p className="mt-4">
        Es una actividad para esposos de todas las edades, sin importar si
        practican o no la Fe. ¡Todos son bienvenidos!
      </p>

      <h3 className="mt-8 mb-3 font-grotesk text-xl font-semibold text-[#10182B]">
        ¿Cómo funciona?
      </h3>
      <ul className="list-disc space-y-2 pl-5 marker:text-[#003DA5]">
        <li>
          En las citas se tratan diferentes temas de la vida matrimonial,
          entre ustedes dos solos.
        </li>
        <li>
          Si vivís lejos de Montevideo, no hay problema. Las citas se pueden
          hacer por Zoom y solo se deberá viajar para el Retiro.
        </li>
        <li>
          El Retiro es un fin de semana donde van a profundizar y darle un
          impulso nuevo a su relación.
        </li>
      </ul>

      <p className="mt-6">
        Para más información hacé clic en el formulario de preinscripción
      </p>
      <h3 className="mt-4 font-grotesk text-xl font-semibold text-[#10182B]">
        Formulario de preinscripción 2027:{" "}
        <a
          href="https://forms.gle/dVppVrGtXHemJ17S7"
          className={linkClass}
        >
          Click aquí
        </a>
      </h3>
      <div className="mt-6 flex items-center gap-4">
        <a
          href="https://www.instagram.com/sobreroca_matrimonios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logos/logo_ig.webp"
            alt="Instagram"
            className="h-12 w-12"
          />
        </a>
      </div>
    </div>
  );
};

export default SobreRocasDescription;
