import React from 'react';
import Gallery from './Gallery';
import { GalleryProps } from './utils/GalleryList';

interface GalleryListProps {
  galleries: GalleryProps[];
}

const MainGallery: React.FC<GalleryListProps> = ({ galleries }) => {
  return (
    <div className="gallery-list">
      {galleries.map((gallery, index) => (
        <div key={index} className="mb-16">
          <Gallery 
            GalleryPhotos={gallery.GalleryPhotos} 
            eventName={gallery.eventName} 
          />
        </div>
      ))}
    </div>
  );
};

export default MainGallery;