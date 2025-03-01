import { useNavigate } from "react-router-dom";

const AntecedentesMagisterio = () => {
  const navigator = useNavigate();
  return (

    <section id="antecedentes-magisterio" className="py-16 bg-gray-100 font-lexend">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

      <h3 className="text-3xl font-bold text-left text-blue-800 sm:text-4xl mb-8">
          Nuestro origen...
        </h3> 

        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 mb-4">
          <div className="mt-1 text-lg text-gray-800 leading-relaxed space-y-6">
            <p>
              Nuestro fundador Juan Enoch Richards Kehoe (nombre civil), nació en Buenos Aires, Argentina, el 31 de diciembre de 1911, falleciendo a sus 93 el 30 de octubre del 2004.
            </p>
            <p>
              El Padre Pedro fue un sacerdote católico Pasionista, de ascendencia irlandesa. Se lo conoció internacionalmente por su labor apostólica centrada en la Familia, apoyando la formación y espiritualidad conyugal de los matrimonios, instrumentando el llamado que presentó el papa Pio XII de proteger a la familia de los embates en su contra. Posteriormente, y siguiendo al San Pablo VI y la Humanae Vitae, predicó incansablemente sobre la defensa de la vida desde la concepción, así como la Paternidad Responsable y el uso de los Métodos Naturales de Regulación de la Natalidad.
            </p>
            <p>
              En el año 1981, San Juan Pablo II nombró al P. Pedro Richards C.P. consultor del Pontificio Consejo para la Familia. Era la confirmación de su dedicación, amor, sabiduría y fidelidad a las enseñanzas del Magisterio de la Iglesia Católica en los temas relativos a la Familia y la cultura de la Vida. El Padre Pedro había fundado el CENAPLANF (centro nacional de planificación natural de la familia) como respuesta a la Humanae Vitae dada por Pablo VI en junio de 1968.
            </p>
            <p>
              Más adelante, la Familiaris Consortio, solicitaba en su num 35; "Ante el problema de una honesta regulación de la natalidad, la comunidad celestial, en el tiempo presente, debe preocuparse por suscitar convicciones y ofrecer ayudas concretas a quienes desean vivir la paternidad y la maternidad de modo verdaderamente responsable."
              El ICF (instituto de ciencias familiares) es su obra Magna: el P. Pedro incluye en ella todo lo que su sentido apostólico y evangelizador encuentra propicio para la Familia.
            </p>
          </div>
        </div>

        {/* Subtítulo: Características del ICF */}
        <h3 className="text-3xl font-bold text-center text-blue-800 mt-12 sm:text-4xl">
          Somos una organización civíl que se rige por los siguientes estatutos:
        </h3>

        {/* Lista de características */}
        <ul className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md text-lg text-gray-800 space-y-4">
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Promover la dignidad de la vida humana desde el mismo momento de la concepción hasta su muerte natural, según las enseñanzas del Magisterio de la Iglesia Católica.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Impartir conocimientos integrales sobre la transmisión de la Vida Humana con base en las normas teológicas y morales de la Iglesia Católica Apostólica Romana. La ortodoxia papal es la Roca sobre la cual ha de apoyarse.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            Concientizar a los casados a la generosidad en su fecundidad, siendo la pareja en último término quien determine, según las normas éticas, cuantos y cuándo han de encarnar su amor.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-2">•</span>
            <span className="inline">
              Promover la Paternidad Responsable según los Métodos Naturales de diagnóstico de la Fertilidad, de acuerdo con la{" "}
              <a href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html" className="text-blue-600 underline inline">
                Humanae Vitae
              </a>,{" "}
              <a href="https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html" className="text-blue-600 underline inline">
                Familiaris Consortio
              </a> y las Instrucciones de la Santa Sede.
            </span>
          </li>
        </ul>

        {/* Título principal */}
        <h2 className="text-4xl font-bold text-center text-blue-800 sm:text-5xl mt-12 mb-8">
          Antecedentes del Magisterio de la Iglesia
        </h2>

        {/* Contenido del texto */}
        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10">
          <div className="mt-6 text-lg text-gray-800 leading-relaxed space-y-6">
            <p className="italic border-l-4 border-blue-400 pl-4">
              “En un momento histórico en que la familia es objeto de muchas fuerzas que tratan de
              destruirla o deformarla, la Iglesia, consciente de que el bien de la sociedad y de sí
              misma está profundamente vinculado al bien de la familia, siente de manera más viva
              y acuciante su misión de proclamar a todos el designio de Dios sobre el matrimonio y
              la familia, asegurando su plena vitalidad, así como su promoción humana y cristiana,
              contribuyendo de este modo a la renovación de la sociedad y del mismo Pueblo de
              Dios” <em>(Familiaris Consortio, 3)</em>
            </p>
            <p>
              “Para que pueda realizar su vocación de <strong>santuario de la vida</strong>, como célula de una
              sociedad que ama y acoge la vida, es necesario y urgente que la familia misma sea
              ayudada y apoyada (...) La Iglesia debe promover incansablemente una pastoral
              familiar que ayude a cada familia a redescubrir y vivir con alegría y valor su misión en
              relación con el Evangelio de la vida” <em>(Evangelium Vitae, 94)</em>.
            </p>
            <p>
              “Es necesario reforzar la preparación al matrimonio para ofrecer preparación remota,
              próxima e inmediata al matrimonio y acompañar a las parejas en los primeros años de
              matrimonio”.
            </p>
            <p>
              “Potenciar la pastoral de acompañamiento de los matrimonios con encuentros de
              profundización en la misión y oración…” “Acompañar a las familias en crisis”…
              “Insertar matrimonios en la estructura diocesana para potenciar la pastoral familiar, la
              formación de agentes, de seminaristas y sacerdotes…” <em>(Amoris Laetitia)</em>
            </p>
          </div>
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
