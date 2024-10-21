import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-lexend font-bold text-gray-800"> INSTITUTO DE CIENCIAS FAMILIARES</a>
            <img
              src="https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Instituto+de+Ciencias+Familiares-26.png"
              alt="fotarda"
              className="h-auto w-44 ml-4"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
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
            <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#gallery" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;