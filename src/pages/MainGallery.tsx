import React, { useEffect } from "react";
import Gallery from "../components/Gallery/Gallery";

const folderNames = ["cimientos", "evento2", "evento3"]; // Ajusta con tus carpetas en S3

const MainGallery: React.FC = () => {

  useEffect(() => {
    console.log(import.meta.env.VITE_AWS_ACCESS_KEY_ID! as string)
  }, []);
  

  return (
    <div className="flex flex-col items-center gap-8">
      {folderNames.map((even_name, index) => (
        <div key={index} className="mb-16">
          <Gallery  eventName={even_name}/>
        </div>
      ))}
    </div>
  );
};

export default MainGallery;
