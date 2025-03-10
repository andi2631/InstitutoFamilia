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
      className="block w-48 shadow-md rounded overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-32 object-cover"
      />
      <div className="p-2 bg-gray-100 text-center">
        {name}
      </div>
    </a>
  );
};

export default OrganizationCard;
