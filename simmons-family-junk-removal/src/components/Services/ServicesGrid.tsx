import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Junk Removal",
      description: "Professional removal of household items and debris.",
    },
    {
      icon: "building",
      title: "Commercial Services",
      description: "Efficient cleanouts for offices and construction sites.",
    },
    {
      icon: "couch",
      title: "Furniture Removal",
      description: "Safe disposal of old or unwanted furniture pieces.",
    },
    {
      icon: "truck-loading",
      title: "Appliance Disposal",
      description: "Proper handling and recycling of large appliances.",
    },
    {
      icon: "dumpster",
      title: "Construction Debris",
      description: "Quick removal of renovation and construction waste.",
    },
    {
      icon: "recycle",
      title: "Eco-Friendly Disposal",
      description: "Responsible recycling and donation of usable items.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="text-primary text-4xl mb-4">
            <i className={`fas fa-${service.icon}`}></i>
          </div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;
