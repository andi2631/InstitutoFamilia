import React from "react";

interface OrganizationCardProps {
  imageUrl: string;
  name: string;
  link: string;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ imageUrl, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-48 shadow-md rounded overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-300 ring-1 ring-gray-400 hover:ring-2"
      data-aos="fade-up"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-28 object-contain"
      />

    </a>
  );
};

export default OrganizationCard;
