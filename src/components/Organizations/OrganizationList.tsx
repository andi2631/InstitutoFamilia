import React from "react";
import OrganizationCard from "./OrgCard";
import { RELATED_ONGS } from "../../utils/relatedOrganizations";

const OrganizationList: React.FC = () => {
  return (
    <section className="mt-12" data-aos="fade-up" aria-label="Organizaciones de interés">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800">Organizaciones de interés</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-500" />
        <p className="mt-3 text-sm text-gray-500">
          Instituciones con las que compartimos el trabajo por la familia y la vida.
        </p>
      </div>

      {/* en pantallas chicas se desliza en horizontal; desde sm es una grilla */}
      <div className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
        {RELATED_ONGS.map((org, index) => (
          <div key={org.name} className="w-40 shrink-0 sm:w-auto">
            <OrganizationCard
              imageUrl={org.imageUrl}
              name={org.name}
              link={org.link}
              delay={index * 75}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationList;
