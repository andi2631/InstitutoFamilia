import { useNavigate } from "react-router-dom";

const AntecedentesMagisterio = () => {
  const navigator = useNavigate();
  return (
    <section
      id="antecedentes-magisterio"
      className="py-16 bg-gray-100 font-lexend"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl font-bold text-left text-blue-800 sm:text-4xl mb-8">
          Nuestro fundador: Padre Pedro Richards, Apóstol de la Familia
        </h3>

        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 mb-4">
          <div className="mt-1 text-lg text-gray-800 leading-relaxed space-y-6">
            <p>
              El Padre Pedro Richards C.P. (nombre civil: Juan Enoch Richards
              Kehoe) nació en Buenos Aires, Argentina, el 31 de diciembre de
              1911 y partió a la Casa del Padre el 30 de octubre de 2004, a la
              edad de 93 años.{" "}
            </p>
            <p>
              Sacerdote pasionista de ascendencia irlandesa, fue reconocido
              internacionalmente por su incansable labor apostólica en favor de
              la familia. Inspirado en el llamado del Papa Pío XII a defender la
              institución familiar, dedicó su vida a la formación y
              espiritualidad conyugal, promoviendo valores fundamentales para la
              vida matrimonial y la paternidad responsable.{" "}
            </p>
            <p>
              Fiel al Magisterio de la Iglesia, el Padre Pedro abrazó y difundió
              con fervor las enseñanzas de la Humanae Vitae de San Pablo VI,
              promoviendo la defensa de la Vida desde la concepción y la
              práctica de los Métodos Naturales de Regulación de la Natalidad.
              Su compromiso con la Familia fue reconocido en 1981, cuando San
              Juan Pablo II lo nombró consultor del Pontificio Consejo para la
              Familia, confirmando así su entrega, sabiduría y amor por la
              misión de la Iglesia en este ámbito.{" "}
            </p>
            <p>
              Más adelante, la Familiaris Consortio, solicitaba en su num 35;
              "Ante el problema de una honesta regulación de la natalidad, la
              comunidad celestial, en el tiempo presente, debe preocuparse por
              suscitar convicciones y ofrecer ayudas concretas a quienes desean
              vivir la paternidad y la maternidad de modo verdaderamente
              responsable." El ICF (instituto de ciencias familiares) es su obra
              Magna: el P. Pedro incluye en ella todo lo que su sentido
              apostólico y evangelizador encuentra propicio para la Familia.
            </p>
          </div>

          <img
            src="/logos/Padre pedro con jpII.png"
            alt="padre pedro cn jpII"
            className="w-full h-full object-cover mt-4"
          />
          <div className="mt-1 text-lg text-gray-800 leading-relaxed space-y-6">
            <p>
              {" "}
              <em>
                P. Pedro Richards (izquierda) junto a Juan Pablo II (derecha).
              </em>
            </p>
          </div>

          <img
            src="/logos/PP_escritorio.png"
            alt="padre pedro cn jpII"
            className="w-full h-full object-cover mt-4"
          />
          <div className="mt-1 text-lg text-gray-800 leading-relaxed space-y-6">
            <p>
              {" "}
              <em>P. Pedro en su habitual espacio de trabajo.</em>
            </p>
          </div>
        </div>

        {/* Subtítulo: Características del ICF */}
        <h3 className="text-3xl font-bold text-center text-blue-800 mt-12 mb-4 sm:text-4xl">
          Su legado: Instituto de Ciencias Familiares
        </h3>

        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 mb-4">
          <div className="mt-1 text-lg text-gray-800 leading-relaxed space-y-6">
            <p>
              Para responder al llamado de la{" "}
              <a
                href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html"
                className="text-blue-600 underline inline"
              >
                Humanae Vitae
              </a>{" "}
              y el{" "}
              <a
                href="https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html"
                className="text-blue-600 underline inline"
              >
                Familiaris Consortio
              </a>
              , que en su numeral 35 exhorta a la comunidad eclesial a “suscitar
              convicciones y ofrecer ayudas concretas a quienes desean vivir la
              paternidad y maternidad de manera verdaderamente responsable”, el
              Padre Pedro fundó diversas iniciativas, como el CENAPLANF, (Centro
              Nacional de Planificación Natural de la Familia), integrándose al
              concierto internacional de instituciones afines y contribuyó al
              esfuerzo global en la protección de los valores matrimoniales, así
              como en la difusión y enseñanza de los Métodos Naturales.{" "}
            </p>
          </div>
        </div>

        {/* Lista de características */}
        <h3 className="text-3xl font-bold text-center text-blue-800 mt-12 mb-4 sm:text-4xl">
          Características del Instituto de Ciencias Familiares
        </h3>
        <ul className="mt-6 bg-white p-6 rounded-lg shadow-md text-lg text-gray-800 space-y-4">
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Promover la dignidad de la vida humana desde el mismo momento de la
            concepción hasta su muerte natural.{" "}
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Impartir conocimientos integrales sobre la transmisión de la Vida
            Humana con base en las normas teológicas y morales de la Iglesia
            Católica Apostólica Romana. La ortodoxia papal es la Roca sobre la
            cual ha de apoyarse.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Concientizar a los casados a la generosidad en su fecundidad, siendo
            la pareja en último término quien determine, según las normas
            éticas, cuantos y cuándo han de encarnar su amor.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            <span className="inline">
              Fomentar la Paternidad Responsable según los Métodos Naturales de
              diagnóstico de la Fertilidad, de acuerdo con la{" "}
              <a
                href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html"
                className="text-blue-600 underline inline"
              >
                Humanae Vitae
              </a>
              ,{" "}
              <a
                href="https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html"
                className="text-blue-600 underline inline"
              >
                Familiaris Consortio
              </a>{" "}
              y las Instrucciones de la Santa Sede.
            </span>
          </li>
        </ul>

        {/* Contenido del texto */}
        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 mt-4">
          <p className="italic border-l-4 border-blue-400 pl-4">
            Que Dios, por intercesión de la Santísima Virgen María, Reina de las
            Familias, conserve al ICF y a sus miembros en la fidelidad a la
            doctrina de Jesús y Su Iglesia.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigator(-1)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  );
};

export default AntecedentesMagisterio;
