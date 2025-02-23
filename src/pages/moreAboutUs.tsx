import { useNavigate } from "react-router-dom";

const AntecedentesMagisterio = () => {
  const navigator = useNavigate();
  return (
    <section id="antecedentes-magisterio" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-center text-blue-800 sm:text-5xl mb-8">
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
            Promover la Paternidad Responsable según los Métodos Naturales de diagnóstico de la Fertilidad, de acuerdo con la<a href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html"> Humanae Vitae</a> (link), Familiaris Consortio (link) y las Instrucciones de la Santa sede. 
          </li>
        </ul>
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
