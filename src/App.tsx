
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MoreAboutUs from './components/MoreAboutUs';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactUs />
      <MoreAboutUs />
      <Footer />
    </div>
  );
}

export default App;