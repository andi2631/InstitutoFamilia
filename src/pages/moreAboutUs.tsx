import { useNavigate } from "react-router-dom";


const AntecedentesMagisterio = () => {

  const navigator = useNavigate() 
  return (
    <section id="antecedentes-magisterio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <h2 className="text-3xl font-bold font-lexend text-gray-900 sm:text-4xl">
          ANTECEDENTES DEL MAGISTERIO DE LA IGLESIA
        </h2>

        {/* Contenido de Familiaris Consortio */}
        <div className="mt-6 text-xl text-gray-700 space-y-6">
          <p>
            “En un momento histórico en que la familia es objeto de muchas fuerzas que tratan de
            destruirla o deformarla, la Iglesia, consciente de que el bien de la sociedad y de sí
            misma está profundamente vinculado al bien de la familia, siente de manera más viva
            y acuciante su misión de proclamar a todos el designio de Dios sobre el matrimonio y
            la familia, asegurando su plena vitalidad, así como su promoción humana y cristiana,
            contribuyendo de este modo a la renovación de la sociedad y del mismo Pueblo de
            Dios” 
            <em>(Familiaris Consortio, 3)</em>
          </p>

          {/* Contenido de Evangelium Vitae */}
          <p>
            “Para que pueda realizar su vocación de &lt;santuario de la vida&gt;, como célula de una
            sociedad que ama y acoge la vida, es necesario y urgente que la familia misma sea
            ayudada y apoyada (...) La Iglesia debe promover incansablemente una pastoral
            familiar que ayude a cada familia a redescubrir y vivir con alegría y valor su misión en
            relación con el Evangelio de la vida” 
            <em>(Evangelium Vitae, 94)</em>.
          </p>

          {/* Preparación al matrimonio */}
          <p>
            “Es necesario reforzar la preparación al matrimonio para ofrecer preparación remota,
            próxima e inmediata al matrimonio y acompañar a las parejas en los primeros años de
            matrimonio”.
          </p>

          {/* Amoris Laetitia */}
          <p>
            “Potenciar la pastoral de acompañamiento de los matrimonios con encuentros de
            profundización en la misión y oración…” “Acompañar a las familias en crisis”…
            “Insertar matrimonios en la estructura diocesana para potenciar la pastoral familiar, la
            formación de agentes, de seminaristas y sacerdotes…” 
            <em>(Amoris Laetitia)</em>
          </p>
        </div>

        {/* Subtítulo: Características del ICF */}
        <h3 className="text-3xl font-lexend text-gray-900 sm:text-4xl mt-10">
          CARACTERISTICAS DEL ICF
        </h3>

        {/* Lista de características */}
        <ul className="mt-6 text-xl text-gray-700 list-disc list-inside space-y-2">
          <li>
            Es una organización de referencia en la Iglesia Católica y en la sociedad en
            temas vinculados a la Familia.
          </li>
          <li>Con identidad católica y perspectiva pastoral</li>
          <li>Tiene carácter nacional</li>
          <li>Promueve el trabajo multidisciplinario con estructura participativa.</li>
        </ul>
        {/* Botón para regresar a la página anterior */}
        <div className="mt-8">
          <button
            onClick={() => navigator(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  );
};

export default AntecedentesMagisterio;
