import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData"; // Update the import path as needed

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
            Junk Removal Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From small pickups to major cleanouts, Simmons Family Junk Removal
            offers a variety of junk removal services for Springfield, MO,
            ensuring a clutter-free life for homeowners, businesses, and more.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl border-2 border-yellow-500 shadow-lg p-8 transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i
                    className={`fas fa-${service.icon} text-2xl`}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-blue-700 mt-8 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <i className="fas fa-check text-blue-600 mr-2 text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link to Detail Page */}
              <Link
                to={`/services/${service.slug}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-center"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Informative Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-blue-50 rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            Trusted by Springfield & Beyond
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Our commitment to eco-friendly solutions, transparent pricing, and
            prompt service has made us a top choice in the region. Join the
            countless residential and commercial clients who have benefited from
            a clutter-free environment.
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Have a unique situation? Our team is flexible and ready to discuss
            custom junk removal plans. Reach out to learn more about our process
            and how we can assist you in achieving a cleaner, more organized
            space.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
