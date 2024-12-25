// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa el nuevo componente Home
import Home from './pages/home';

// Importa Navbar y, si lo deseas, mantén también los componentes separados
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs';
import AntecedentesMagisterio from './pages/moreAboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          {/* Ruta principal que muestra todo el contenido en Home */}
          <Route path="/" element={<Home />} />
          
          {/* Ejemplo de otras rutas si las necesitas por separado 
              (solo a modo de ejemplo, puedes eliminarlas si no las usas) */}
          <Route path="/aboutUs" element={<AntecedentesMagisterio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Your Organization. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
