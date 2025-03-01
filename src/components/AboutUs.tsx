import { MISION } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-lexend font-bold text-gray-900 sm:text-4xl">¿Quiénes somos?</h2>
        <div></div>
        <h3 className="text-3xl font-lexend text-gray-900 sm:text-4xl mt-8"> Nuestra Misión: </h3>
        <div className="mt-6 text-xl text-gray-500">
          <p>{MISION}</p>
        </div>
        <div className="mt-4">
          <a onClick={() => navigate('/info')} className="text-blue-600 hover:text-blue-800 cursor-pointer">Leer mas... →</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;