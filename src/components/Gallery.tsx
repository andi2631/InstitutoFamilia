import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://source.unsplash.com/random/800x600?community', alt: 'Community event' },
    { src: 'https://source.unsplash.com/random/800x600?volunteer', alt: 'Volunteers working' },
    { src: 'https://source.unsplash.com/random/800x600?education', alt: 'Educational program' },
    { src: 'https://source.unsplash.com/random/800x600?environment', alt: 'Environmental project' },
    { src: 'https://source.unsplash.com/random/800x600?teamwork', alt: 'Team collaboration' },
    { src: 'https://source.unsplash.com/random/800x600?impact', alt: 'Making an impact' },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;