import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Junk Removal",
      description:
        "From furniture to appliances, we'll clear out your home or apartment with care and efficiency.",
      features: [
        "Same-day service",
        "Full house cleanouts",
        "Appliance removal",
      ],
      image: "/images/residential-junk.jpg", // Add actual image paths
      color: "blue",
    },
    {
      icon: "building",
      title: "Commercial Services",
      description:
        "Keep your business clutter-free with our professional commercial junk removal services.",
      features: [
        "Office cleanouts",
        "Construction debris",
        "Equipment disposal",
      ],
      image: "/images/commercial-junk.jpg",
      color: "indigo",
    },
    {
      icon: "leaf",
      title: "Yard Waste Removal",
      description:
        "Transform your outdoor space. We handle all types of yard debris and green waste.",
      features: ["Landscaping debris", "Tree branches", "Soil and rocks"],
      image: "/yard-waste.jpg",
      color: "blue",
    },
    {
      icon: "box",
      title: "Storage Unit Cleanout",
      description:
        "Clearing out a storage unit? We'll handle the heavy lifting and disposal.",
      features: ["Complete emptying", "Organized removal", "Proper disposal"],
      image: "/images/storage-unit.jpg",
      color: "indigo",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive junk removal solutions tailored to your needs. Fast,
              reliable, and eco-friendly service guaranteed.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-${service.color}-600/90 to-${service.color}-800/90`}
                />
                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mr-4">
                      <i className={`fas fa-${service.icon} text-xl`} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span
                        className={`w-5 h-5 rounded-full bg-${service.color}-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
                      >
                        <i
                          className={`fas fa-check text-${service.color}-600 text-xs`}
                        />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className={`inline-flex items-center text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors duration-300`}
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to get started? Get your free quote today!
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Quote
            <motion.i
              className="fas fa-arrow-right ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
