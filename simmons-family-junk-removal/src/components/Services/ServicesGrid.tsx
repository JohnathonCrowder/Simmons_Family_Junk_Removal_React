import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Junk Removal",
      description: "Professional removal of household items and debris.",
      features: [
        "Full house cleanouts",
        "Garage & basement clearing",
        "Appliance removal",
      ],
    },
    {
      icon: "building",
      title: "Commercial Services",
      description: "Efficient cleanouts for offices and construction sites.",
      features: [
        "Office furniture removal",
        "Retail cleanouts",
        "Warehouse clearing",
      ],
    },
    {
      icon: "couch",
      title: "Furniture Removal",
      description: "Safe disposal of old or unwanted furniture pieces.",
      features: [
        "All sizes handled",
        "Eco-friendly disposal",
        "Donation coordination",
      ],
    },
    {
      icon: "truck-loading",
      title: "Appliance Disposal",
      description: "Proper handling and recycling of large appliances.",
      features: [
        "Safe disconnection",
        "EPA-compliant disposal",
        "All types accepted",
      ],
    },
    {
      icon: "hard-hat",
      title: "Construction Debris",
      description: "Quick removal of renovation and construction waste.",
      features: ["Same-day service", "Flexible scheduling", "All debris types"],
    },
    {
      icon: "leaf",
      title: "Yard Waste Removal",
      description: "Comprehensive outdoor cleanup and waste removal.",
      features: [
        "Storm debris cleanup",
        "Landscaping waste",
        "Soil & rock removal",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk removal solutions tailored to your needs.
            Professional, reliable, and eco-friendly service guaranteed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                <i className={`fas fa-${service.icon}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
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
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
              >
                Get a Quote
                <motion.i
                  className="fas fa-arrow-right ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-blue-100 text-blue-600 mb-6">
            <i className="fas fa-phone p-3 bg-blue-600 text-white rounded-full" />
            <span className="px-4 font-semibold">
              Need immediate assistance?
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer custom solutions for unique situations. Contact us to
            discuss your specific needs and get a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Free Quote
              <i className="fas fa-arrow-right ml-2" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              <i className="fas fa-phone mr-2" />
              (123) 456-7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
