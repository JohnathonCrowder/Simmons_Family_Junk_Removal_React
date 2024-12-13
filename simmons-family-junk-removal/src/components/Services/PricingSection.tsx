import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      title: "Small Load",
      price: "$99+",
      description: "Perfect for a few items",
      features: [
        "Up to 1/8 truck",
        "Ideal for 1-2 pieces of furniture",
        "Quick removal service",
        "Eco-friendly disposal",
      ],
    },
    {
      title: "Medium Load",
      price: "$199+",
      description: "Great for multiple room cleanouts",
      features: [
        "Up to 1/4 truck",
        "Multiple pieces of furniture",
        "Appliance removal included",
        "Same-day service available",
      ],
    },
    {
      title: "Large Load",
      price: "$299+",
      description: "Full home or office cleanouts",
      features: [
        "Up to 1/2 truck",
        "Ideal for estate cleanouts",
        "Construction debris removal",
        "Priority scheduling",
      ],
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
            Our Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Transparent pricing for all your junk removal needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
