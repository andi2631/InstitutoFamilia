import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MoreAboutUs = () => {
    return (
        <div id="MoreAboutUs" className="min-h-screen bg-gray-100">
            <Navbar />
            <h3>Antecedentes del magisterio de la iglesia</h3>
            <p>
                “En un momento histórico en que la familia es objeto de muchas fuerzas
                 que tratan de destruirla o deformarla, la Iglesia, consciente de que el
                  bien de la sociedad y de sí misma está profundamente vinculado 
                  al bien de la familia, siente de manera más viva y 
                  acuciante su misión de proclamar a todos el designio de Dios sobre 
                  el matrimonio y la familia, asegurando su plena vitalidad, así como 
                  su promoción humana y cristiana, contribuyendo de este modo a la 
                  renovación de la sociedad y del mismo Pueblo de Dios”  
                  (Familiaris Consortio, 3)
            </p>
            <p>
                “Para que pueda realizar su vocación de _santuario de la vida_, como 
                célula de una sociedad que ama y acoge la vida, es necesario y urgente 
                que la familia misma sea ayudada y apoyada (...) La Iglesia debe 
                promover incansablemente una pastoral familiar que ayude a cada familia a 
                redescubrir y vivir con alegría y valor su misión en relación con el Evangelio 
                de la vida” (Evangelium Vitae, 94). 
            </p>
            <p>
                “Es necesario reforzar la preparación al 
                matrimonio para ofrecer preparación remota, próxima e 
                inmediata al matrimonio y acompañar a las parejas en los primeros años de 
                matrimonio”. 
            </p>
            <p>
                “Potenciar la pastoral de acompañamiento de los matrimonios con encuentros de profundización en la misión y oración…” 
                "Acompañar a las familias en crisis".  
            </p>
            <p>
                “Insertar matrimonios en la estructura diocesana
                 para potenciar la pastoral familiar, la formación de agentes, de seminaristas 
                 y sacerdotes…” (Amoris Laetitia)
            </p>
            <h3>
               Caracteristicas del Instituto de Ciencias Familiares 
            </h3>
            <ul>
                <li>
                    Es una organización de referencia en la Iglesia Católica y en la sociedad en temas vinculados a la Familia. 
                </li>
                <li>
                    Con identidad catolica
                </li>
            </ul>
            
            <Footer />
        </div>
    );
};

export default MoreAboutUs;