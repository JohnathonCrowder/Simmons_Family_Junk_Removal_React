// File: ServicesSection.tsx
// Path: simmons-family-junk-removal/src/components/Home/ServicesSection.tsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Residential Junk Removal",
      description:
        "From furniture to appliances, we'll clear out your home with care and efficiency, leaving your space clutter-free.",
      image: "/images/residential-junk.jpg",
      features: [
        "Garage and attic cleanouts",
        "Appliance removal",
        "Safe handling of bulky items",
        "Eco-friendly disposal options",
      ],
      alt: "Residential junk removal service",
    },
    {
      title: "Commercial Junk Removal",
      description:
        "Professional junk removal for offices, warehouses, and retail spaces to keep your business clutter-free.",
      image: "/images/commercial-junk.jpg",
      features: [
        "Office furniture disposal",
        "Retail space cleanouts",
        "Construction debris removal",
        "Flexible scheduling options",
      ],
      alt: "Commercial junk removal service",
    },
    {
      title: "Yard Waste Removal",
      description:
        "Reclaim your outdoor space by removing branches, soil, and storm debris efficiently and responsibly.",
      image: "/images/yard-waste.jpg",
      features: [
        "Storm debris collection",
        "Seasonal yard cleanups",
        "Safe disposal of natural materials",
        "Residential and commercial services",
      ],
      alt: "Yard waste removal service",
    },
    {
      title: "Estate Cleanouts",
      description:
        "Handle estate transitions with care and professionalism. We sort, remove, and donate items responsibly.",
      image: "/images/estate-cleanout.jpg",
      features: [
        "Compassionate, discreet service",
        "Sorting and donation coordination",
        "Full-property cleanout solutions",
        "Free on-site estimates",
      ],
      alt: "Estate cleanout service",
    },
    {
      title: "Construction Debris Removal",
      description:
        "We remove leftover drywall, lumber, and other materials from renovation or construction projects.",
      image: "/images/construction-debris.jpg",
      features: [
        "Same-day debris pickup",
        "Removal of wood, metal, and more",
        "Licensed and insured professionals",
        "Loading and hauling included",
      ],
      alt: "Construction debris removal service",
    },
    {
      title: "Appliance Disposal",
      description:
        "From refrigerators to washers, we safely disconnect and haul away large appliances for eco-friendly disposal.",
      image: "/images/appliance-disposal.jpg",
      features: [
        "Professional disconnection",
        "EPA-compliant recycling",
        "Pickup of all appliance types",
        "Preventive leak and spill measures",
      ],
      alt: "Appliance disposal service",
    },
  ];

  const stats = [
    { number: "350+", label: "Happy Clients Served" },
    { number: "80%", label: "Items Recycled or Donated" },
    { number: "12+", label: "Years Serving Springfield" },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
      aria-labelledby="services-section-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-100/30 rounded-full blur-3xl top-1/3 left-1/4"></div>
        <div className="absolute w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="services-section-heading"
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Junk Removal Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in efficient and eco-friendly junk removal, offering
            tailored services to meet your needs. From homes to businesses, our
            professional team is here to help.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl border-2 border-yellow-500 shadow-lg overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-gray-700"
                    >
                      <i className="fas fa-check text-blue-600 mr-2 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mb-24">
          <Link
            to="/services"
            className="inline-block bg-yellow-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border-2 border-yellow-500 text-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-4xl font-extrabold text-blue-700 mb-2">
                  {stat.number}
                </h4>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-500 rounded-3xl p-12 text-center text-white hover:shadow-[0_0_30px_10px_rgba(255,215,0,0.6)] transition-shadow duration-300"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Reclaim Your Space?
          </h3>
          <p className="text-lg text-yellow-100 max-w-2xl mx-auto mb-8">
            Contact Simmons Family Junk Removal today and experience the
            difference a professional team can make. Get started with a free,
            no-obligation quote!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-100 transition-all duration-300 shadow-lg"
          >
            Get Your Free Quote
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
