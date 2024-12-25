import React from "react";
import OrganizationCard from "./OrgCard";
import { RELATED_ONG } from "../../utils/relatedOrganizations";

const relatedOrganizationsList = RELATED_ONG;


const OrganizationList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8">
      <h2 className="text-xl font-bold mb-4">Organizaciones de interés:</h2>
      <div className="flex flex-wrap gap-4 mt-8">
        {relatedOrganizationsList.map((org, index) => (
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
