import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const handleNavigation = (path: string, hash?: string) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  };

  return (
    <nav className="bg-blue-50 shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              onClick={() => handleNavigation('/')}
              src="logos/icf_banner_azul.png"
              alt="ICF"
              className="h-auto w-56 ml-19 pl-15 md:ml-10 cursor-pointer"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                onClick={() => handleNavigation('/')}
                className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-lexend transition duration-300 ease transform hover:scale-105 hover:bg-gray-200 cursor-pointer"
              >
                Inicio
              </a>
              <a
                onClick={() => handleNavigation('/#about', '#about')}
                className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-lexend transition duration-300 ease transform hover:scale-105 hover:bg-gray-200 cursor-pointer"
              >
                Sobre nosotros
              </a>
              <a
                onClick={() => handleNavigation('/#contact', '#contact')}
                className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-lexend transition duration-300 ease transform hover:scale-105 hover:bg-gray-200 cursor-pointer"
              >
                Contáctanos
              </a>
              <a
                onClick={() => handleNavigation('/articulos')}
                className="relative text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-lexend transition duration-300 ease transform hover:scale-105 hover:bg-gray-200 cursor-pointer"
              >
                Artículos de interés
              </a>
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
            <a onClick={() => handleNavigation('/')} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
            <a onClick={() => handleNavigation('/', '#about')} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Sobre nosotros</a>
            <a onClick={() => handleNavigation('/galeria')} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Galeria</a>
            <a onClick={() => handleNavigation('/', '#contact')} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contáctanos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
