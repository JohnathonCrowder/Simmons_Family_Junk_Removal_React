import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Residential Junk Removal",
      description:
        "From furniture to appliances, we'll clear out your home or apartment with care and efficiency.",
      image: "/images/residential-junk.jpg",
    },
    {
      title: "Commercial Services",
      description:
        "Keep your business clutter-free with our professional commercial junk removal services.",
      image: "/images/commercial-junk.jpg",
    },
    {
      title: "Yard Waste Removal",
      description:
        "Transform your outdoor space. We handle all types of yard debris and green waste.",
      image: "/images/yard-waste.jpg",
    },
    {
      title: "Storage Unit Cleanout",
      description:
        "Clearing out a storage unit? We'll handle the heavy lifting and disposal.",
      image: "/images/storage-unit.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gray-900 px-4 pb-4 border-b-4 border-blue-500">
            What We Offer
          </h2>
        </motion.div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Service Image */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold group"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <i className="fas fa-arrow-right text-blue-600"></i>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              We offer a wide range of junk removal services. Contact us for a
              custom solution tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Get a Free Quote
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
