import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <nav className="bg-white shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              onClick={() => navigate('/')}
              src="https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Instituto+de+Ciencias+Familiares-26.png"
              alt="ICF"
              className="h-auto w-56 ml-19 pl-15 md:ml-10 cursor-pointer"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="" onClick={() => navigate('/')} className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease transform hover:scale-105 hover:bg-gray-200">Inicio</a>
              <a href="#about" className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease transform hover:scale-105 hover:bg-gray-200">Sobre nosotros</a>
              <a href="#" onClick={() => navigate('/galeria')} className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease transform hover:scale-105 hover:bg-gray-200">Galeria</a>
              <a href="#contact" className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease transform hover:scale-105 hover:bg-gray-200">Contáctanos</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a onClick={() => navigate('/galeria')} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Galeria</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contáctanos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;