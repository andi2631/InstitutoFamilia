import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/home';

import Navbar from './components/Navbar';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs';
import AntecedentesMagisterio from './pages/moreAboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<AntecedentesMagisterio />} />
          <Route path="/galeria" element={<Gallery />} />
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
