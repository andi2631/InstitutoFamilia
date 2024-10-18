import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Quienes somos?</h2>
        <div className="mt-6 text-xl text-gray-500">
          <p>Our organization is committed to making a difference in the lives of people and communities around the world. With a focus on education, sustainability, and social justice, we strive to create lasting positive change.</p>
          <p className="mt-4">Founded in 2010, we have grown from a small group of passionate individuals to a global network of changemakers. Our dedicated team and volunteers work tirelessly to implement innovative solutions to some of the world's most pressing challenges.</p>
        </div>
        <div className="mt-10">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Learn more about our mission →</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;