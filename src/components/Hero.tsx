import React from 'react';

const Hero = () => {
  return (
    <div className="bg-pantone-classic-blue text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Welcome to Our Organization</h1>
        <p className="mt-6 text-xl max-w-3xl">We are dedicated to making a positive impact in our community and beyond. Join us in our mission to create a better world.</p>
        <div className="mt-10">
          <a href="#contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">Get Involved</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;