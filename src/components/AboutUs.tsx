import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-lexend font-bold text-gray-900 sm:text-4xl">¿Quiénes somos?</h2>
        <div></div>
        <h3 className="text-3xl font-lexend text-gray-900 sm:text-4xl mt-8"> Nuestra Misión: </h3>
        <div className="mt-6 text-xl text-gray-500">
          <p>
            Somos una Organización social católica que anuncia la Buena Noticia del matrimonio 
            y la Familia a través de la investigación, la formación humana y espiritual 
            de los integrantes de las familias, de la promoción y defensa de la vida en 
            todas sus etapas y a través de la divulgación de documentos de interés 
            vinculados a la Familia.
          </p>
        </div>
        <div className="mt-10">
          <a href="MoreAboutUs" className="text-blue-600 hover:text-blue-800 font-medium">Aprende más sobre nosotros →</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;