import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import EventsGallery from '../components/EventsGallery/EventsGallery';

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <EventsGallery />
      <ContactUs />
    </div>
  );
}

export default Home;
