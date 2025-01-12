import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      image: "/images/residential-junk.jpg",
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
      image: "/images/yard-waste.jpg",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk removal solutions tailored to your needs. Fast,
            reliable, and eco-friendly service guaranteed.
          </p>
        </motion.div>

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
              {/* Image Section - Made Taller */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-300 group-hover:translate-y-0">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 shadow-lg">
                        <i
                          className={`fas fa-${service.icon} text-2xl text-white`}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check text-blue-600 text-sm" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
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
