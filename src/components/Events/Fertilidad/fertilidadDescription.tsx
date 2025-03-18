import React from "react";

const MetodosNaturalesDescription: React.FC = () => {
  return (
    <div className="text-lg text-gray-700 leading-relaxed">
      <p className="my-2">
        <strong>El reconocimiento de la fertilidad y la planificación natural</strong>
      </p>
      <p>
        Para concebir un hijo se requiere de la colaboración amorosa de los esposos. Para posponer un hijo, también se necesita de la colaboración amorosa de ambos esposos.
        Mediante la observación de marcadores biológicos se logra identificar los días fértiles del ciclo reproductivo de la mujer. Con esa información, la pareja decide cuándo tener, o no, relaciones conyugales y así lograr o evitar el embarazo.
      </p>

      <h3 className="text-xl font-semibold my-4">Beneficios de los métodos naturales</h3>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Inocuos para la salud:</strong> No se utilizan fármacos, dispositivos ni procedimientos mecánicos o quirúrgicos.</li>
        <li><strong>Reversibles:</strong> Pueden usarse tanto para posponer como para buscar el embarazo.</li>
        <li><strong>Abstinencia periódica:</strong> Si se desea posponer el embarazo, se deberá evitar la relación conyugal durante la fase fértil del ciclo menstrual.</li>
        <li><strong>Confiables:</strong> Un estudio de la OMS otorgó una eficacia del 98,5% al Método de la Ovulación, estableciendo que toda mujer puede reconocer los días fértiles e infértiles del ciclo si se le enseña qué buscar y cómo buscarlo.</li>
        <li><strong>Entrenamiento personalizado:</strong> Adaptado a cada pareja para mejorar su conocimiento y aplicación.</li>
        <li><strong>Fortalece el vínculo de amor entre los esposos:</strong> Basado en la colaboración mutua y el respeto a la naturaleza biológica del varón y la mujer por igual.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Reflexión sobre el amor conyugal</h3>
      <p className="mt-2">
        ¿Tú sabías que la Iglesia Católica rechaza el uso de los anticonceptivos por ir contra la esencia del amor conyugal? <i>(SS. Pablo VI - Humanae Vitae n. 14)</i>
      </p>

      <p className="mt-2">
        El reconocimiento de la fertilidad ofrece al matrimonio las bases para comprender los ciclos naturales del cuerpo y, de este modo, <strong>servirse de una disposición natural</strong> <i>(Humanae Vitae n.16)</i> para regular la natalidad.
        Esto permite preservar la integridad del acto conyugal, custodiar el amor matrimonial y su complementariedad, así como honrar su dignidad como un don de Dios, viendo a los hijos como una bendición.
      </p>
    </div>
  );
};

export default MetodosNaturalesDescription;
