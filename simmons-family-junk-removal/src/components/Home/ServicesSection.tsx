import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection: React.FC = () => {
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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Tailored junk removal solutions for every situation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
