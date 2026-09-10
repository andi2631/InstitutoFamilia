import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MISION } from "../utils/consts";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        {/* Título y texto viven en un solo bloque, unidos por el filete
            azul — sin partir la sección en columnas ni mover el texto. */}
        <div className="border-l-4 border-[#003DA5] pl-6 sm:pl-10">
          <h2 className="font-grotesk text-5xl font-medium leading-[0.95] tracking-tight text-[#10182B] sm:text-6xl">
            ¿Quiénes somos?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#10182B]/80">
            {MISION}
          </p>

          <button
            onClick={() => navigate("/info")}
            className="group mt-9 inline-flex w-fit items-center gap-2.5 rounded-sm bg-[#003DA5] px-7 py-3.5 font-grotesk font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B1B33] hover:shadow-lg hover:shadow-[#003DA5]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40 focus-visible:ring-offset-2"
          >
            Conocé nuestra historia
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
