// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery/Gallery';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default Home;
