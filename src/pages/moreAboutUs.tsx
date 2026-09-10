import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TIMELINE = [
  { year: "1911", label: "Nace en Buenos Aires, el 31 de diciembre." },
  { year: "1968", label: "Abraza y difunde la Humanae Vitae de San Pablo VI." },
  {
    year: "1981",
    label:
      "San Juan Pablo II lo nombra consultor del Pontificio Consejo para la Familia.",
  },
  { year: "2004", label: "Parte a la Casa del Padre el 30 de octubre, a los 93 años." },
];

const linkClass =
  "text-[#003DA5] underline underline-offset-2 decoration-[#003DA5]/40 hover:decoration-[#003DA5] transition-colors";

const AntecedentesMagisterio = () => {
  const navigate = useNavigate();

  return (
    <div id="antecedentes-magisterio" className="bg-[#EDE7DA]">
      {/* Volver */}
      <div className="mx-auto max-w-5xl px-6 pt-8 sm:px-8">
        <button
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-[#003DA5] transition-colors hover:text-[#0B1B33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003DA5]/40"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Volver
        </button>
      </div>

      {/* Hero */}
      <header className="relative mt-6 h-[58vh] min-h-[420px] max-h-[640px] w-full overflow-hidden sm:mt-8">
        <img
          src="/logos/Padre pedro con jpII.png"
          alt="Padre Pedro Richards saluda a San Juan Pablo II"
          className="absolute inset-0 h-full w-full object-cover object-[50%_22%] contrast-[1.05] sepia-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/40 to-[#0B1B33]/5" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-10 sm:px-8 sm:pb-14">
          <h1 className="font-fraunces text-4xl font-medium leading-[1.05] text-white sm:text-6xl">
            Padre Pedro Richards
          </h1>
          <p className="mt-3 max-w-md font-fraunces text-lg italic text-white/85 sm:text-xl">
            Apóstol de la Familia
          </p>
          <p className="mt-5 font-sans text-sm text-white/70">1911 – 2004</p>
          <p className="font-sans text-sm text-white/70">
            Fundador del Instituto de Ciencias Familiares
          </p>
        </div>
      </header>

      {/* Biografía */}
      <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
          {/* Línea de tiempo (desktop) */}
          <aside className="hidden lg:block">
            <ol className="sticky top-24 space-y-8 border-l border-[#8B6F3E]/40 pl-6">
              {TIMELINE.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-[#8B6F3E]" />
                  <p className="font-fraunces text-lg font-medium text-[#003DA5]">
                    {item.year}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-snug text-[#262220]/70">
                    {item.label}
                  </p>
                </li>
              ))}
            </ol>
          </aside>

          <div>
            <h2 className="font-fraunces text-2xl font-medium text-[#0B1B33] sm:text-3xl">
              Una vida entregada a la familia
            </h2>

            <div className="mt-6 max-w-[65ch] space-y-6 font-serif text-[17px] leading-[1.8] text-[#262220]/90">
              <p>
                El Padre Pedro Richards C.P. (nombre civil: Juan Enoch
                Richards Kehoe) nació en Buenos Aires, Argentina, el 31 de
                diciembre de 1911 y partió a la Casa del Padre el 30 de
                octubre de 2004, a la edad de 93 años.
              </p>
              <p>
                Sacerdote Pasionista de ascendencia irlandesa, fue reconocido
                internacionalmente por su incansable labor apostólica en
                favor de la familia. Inspirado en el llamado del Papa Pío
                XII a defender la institución familiar, dedicó su vida a la
                formación y espiritualidad conyugal, promoviendo valores
                fundamentales para la vida matrimonial y la paternidad
                responsable.
              </p>
              <p>
                Fiel al Magisterio de la Iglesia, el Padre Pedro abrazó y
                difundió con fervor las enseñanzas de la Humanae Vitae de
                San Pablo VI, promoviendo la defensa de la vida desde la
                concepción y la práctica de los métodos naturales de
                regulación de la natalidad. Su compromiso con la familia fue
                reconocido en 1981, cuando San Juan Pablo II lo nombró
                consultor del Pontificio Consejo para la Familia,
                confirmando así su entrega, sabiduría y amor por la misión
                de la Iglesia en este ámbito.
              </p>
              <p>
                Más adelante, la Familiaris Consortio solicitaba en su
                numeral 35: «Ante el problema de una honesta regulación de
                la natalidad, la comunidad eclesial, en el tiempo presente,
                debe preocuparse por suscitar convicciones y ofrecer ayudas
                concretas a quienes desean vivir la paternidad y la
                maternidad de modo verdaderamente responsable». El ICF
                (Instituto de Ciencias Familiares) es su obra magna: el P.
                Pedro incluye en ella todo lo que su sentido apostólico y
                evangelizador encuentra propicio para la familia.
              </p>
            </div>

            {/* Línea de tiempo (mobile) */}
            <ol className="mt-8 space-y-2 border-y border-[#8B6F3E]/30 py-5 font-sans text-sm text-[#262220]/70 lg:hidden">
              {TIMELINE.map((item) => (
                <li key={item.year}>
                  <span className="font-fraunces font-medium text-[#003DA5]">
                    {item.year}
                  </span>{" "}
                  — {item.label}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Retrato + cita */}
        <div className="grid grid-cols-1 gap-8 border-t border-[#8B6F3E]/30 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
          <figure>
            <div className="border border-[#8B6F3E]/40 p-2">
              <img
                src="/logos/PP_escritorio.png"
                alt="Padre Pedro en su escritorio, rodeado de libros y papeles"
                className="w-full object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 font-sans text-sm text-[#262220]/60">
              Padre Pedro en su habitual espacio de trabajo.
            </figcaption>
          </figure>
          <blockquote className="font-fraunces text-2xl italic leading-snug text-[#0B1B33] sm:text-3xl">
            “Quiero que toda mujer conozca el Método Billings de
            reconocimiento de la fertilidad.”
            <footer className="mt-4 font-sans text-sm not-italic text-[#262220]/60">
              San Juan Pablo II, a Padre Pedro
            </footer>
          </blockquote>
        </div>

        {/* Legado */}
        <div className="border-t border-[#8B6F3E]/30 pt-14 sm:pt-16">
          <h2 className="font-fraunces text-2xl font-medium text-[#0B1B33] sm:text-3xl">
            Su legado: Instituto de Ciencias Familiares
          </h2>
          <div className="mt-6 max-w-[65ch] font-serif text-[17px] leading-[1.8] text-[#262220]/90">
            <p>
              Para responder al llamado de la{" "}
              <a
                href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html"
                className={linkClass}
              >
                Humanae Vitae
              </a>{" "}
              y la{" "}
              <a
                href="https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html"
                className={linkClass}
              >
                Familiaris Consortio
              </a>
              , que en su numeral 35 exhorta a la comunidad eclesial a
              «suscitar convicciones y ofrecer ayudas concretas a quienes
              desean vivir la paternidad y maternidad de manera
              verdaderamente responsable», el Padre Pedro fundó diversas
              iniciativas, como el CENAPLANF (Centro Nacional de
              Planificación Natural de la Familia), integrándose al
              concierto internacional de instituciones afines y
              contribuyendo al esfuerzo global en la protección de los
              valores matrimoniales, así como en la difusión y enseñanza de
              los métodos naturales de reconocimiento de la fertilidad,
              enmarcada en la Teología del Cuerpo dada por San Juan Pablo
              II.
            </p>
          </div>
        </div>

        {/* Características */}
        <div className="pt-14 sm:pt-16">
          <h2 className="font-fraunces text-2xl font-medium text-[#0B1B33] sm:text-3xl">
            Características del Instituto de Ciencias Familiares
          </h2>
          <ul className="mt-6 max-w-[65ch] divide-y divide-[#8B6F3E]/25 border-y border-[#8B6F3E]/25">
            <li className="py-5 font-serif text-[17px] leading-[1.75] text-[#262220]/90">
              Promover la dignidad de la vida humana desde el mismo momento
              de la concepción hasta su muerte natural.
            </li>
            <li className="py-5 font-serif text-[17px] leading-[1.75] text-[#262220]/90">
              Impartir conocimientos integrales sobre la conyugalidad y la
              transmisión de la vida humana con base en las normas
              teológicas y morales de la Iglesia Católica Apostólica
              Romana. La ortodoxia papal es la Roca sobre la cual ha de
              apoyarse.
            </li>
            <li className="py-5 font-serif text-[17px] leading-[1.75] text-[#262220]/90">
              Concientizar a los casados a la generosidad en su fecundidad,
              siendo la pareja en último término quien determine, según las
              normas éticas, cuántos y cuándo han de encarnar su amor.
            </li>
            <li className="py-5 font-serif text-[17px] leading-[1.75] text-[#262220]/90">
              Fomentar la Paternidad Responsable según los Métodos
              Naturales de diagnóstico de la Fertilidad, de acuerdo con la{" "}
              <a
                href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html"
                className={linkClass}
              >
                Humanae Vitae
              </a>
              ,{" "}
              <a
                href="https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html"
                className={linkClass}
              >
                Familiaris Consortio
              </a>
              , las enseñanzas de la Teología del Cuerpo dadas por Juan
              Pablo II y demás instrucciones de la Santa Sede.
            </li>
          </ul>
        </div>

        {/* Cierre */}
        <div className="mx-auto max-w-3xl pt-16 text-center sm:pt-20">
          <div className="mx-auto h-px w-12 bg-[#8B6F3E]/50" />
          <p className="mt-8 font-fraunces text-xl italic leading-relaxed text-[#0B1B33] sm:text-2xl">
            Que Dios, por intercesión de la Santísima Virgen María, Reina de
            las Familias, conserve al ICF y a sus miembros en la fidelidad a
            la doctrina de Jesús y Su Iglesia.
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-[#8B6F3E]/50" />
        </div>
      </main>
    </div>
  );
};

export default AntecedentesMagisterio;
