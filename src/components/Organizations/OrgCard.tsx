import React from "react";
import { ExternalLink } from "lucide-react";

interface OrganizationCardProps {
  imageUrl: string;
  name: string;
  link: string;
  /** para escalonar la animación de entrada */
  delay?: number;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  imageUrl,
  name,
  link,
  delay = 0,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Ir al sitio de ${name}`}
      className="group flex h-full snap-start flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex h-20 w-full items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain opacity-80 grayscale-[60%] transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <span className="mt-3 flex items-center gap-1 text-center text-sm font-medium text-gray-600 transition group-hover:text-blue-700">
        {name}
        <ExternalLink className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
      </span>
    </a>
  );
};

export default OrganizationCard;
