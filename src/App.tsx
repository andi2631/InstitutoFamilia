import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/home';

import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import AntecedentesMagisterio from './pages/moreAboutUs';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

import AOS from 'aos';
import EventPage from './pages/event';
import MainGallery from './pages/MainGallery';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<AntecedentesMagisterio />} />
          <Route path="/galeria" element={<MainGallery />} />
          <Route path="/contact" element={<ContactUs />} />

        <Route path="/events/:eventName" element={<EventPage />} />
          <></>
        </Routes>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Instituto de Ciencias Familiares. Derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
