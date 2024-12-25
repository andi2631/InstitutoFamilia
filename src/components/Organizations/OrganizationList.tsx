import React from "react";
import OrganizationCard from "./OrgCard";

interface Organization {
  imageUrl: string;
  name: string;
  link: string;
}

const organizations: Organization[] = [
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Organización 1",
    link: "https://example.com/organization1",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Organización 2",
    link: "https://example.com/organization2",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Organización 3",
    link: "https://example.com/organization3",
  },
];

const OrganizationList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8">
      <h2 className="text-xl font-bold mb-4">Organizaciones de interés:</h2>
      {/* Render the organization cards */}
      <div className="flex flex-wrap gap-4 mt-8">
        {organizations.map((org, index) => (
          <OrganizationCard
            key={index}
            imageUrl={org.imageUrl}
            name={org.name}
            link={org.link}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationList;
