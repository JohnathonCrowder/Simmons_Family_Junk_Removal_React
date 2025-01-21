// File: src/components/RelatedServices.tsx

import React from "react";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentSlug }) => {
  const relatedServices = servicesData.filter(
    (service) => service.slug !== currentSlug
  );

  return (
    <div className="related-services bg-gray-50 p-8 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-blue-700 mb-6">
        Related Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedServices.slice(0, 3).map((service) => (
          <Link
            to={`/services/${service.slug}`}
            key={service.slug}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-blue-700 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
