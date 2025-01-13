import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      name: "1/8 Truck Load",
      price: "99",
      description: "Perfect for small cleanouts",
      idealFor: "1-2 items, small spaces",
      features: [
        "Single item removal",
        "Small apartment cleanout",
        "Minimum load charge",
        "Labor & disposal included",
      ],
      icon: "box",
    },
    {
      name: "1/4 Truck Load",
      price: "189",
      description: "Ideal for medium-sized jobs",
      idealFor: "Multiple items, single room",
      popular: true,
      features: [
        "Multiple item removal",
        "Single room cleanout",
        "Furniture & appliances",
        "Same-day service available",
      ],
      icon: "dolly",
    },
    {
      name: "1/2 Truck Load",
      price: "289",
      description: "Great for larger cleanouts",
      idealFor: "Multiple rooms, garage",
      features: [
        "Large volume removal",
        "Multiple room cleanout",
        "Construction debris",
        "Priority scheduling",
      ],
      icon: "truck-loading",
    },
    {
      name: "Full Truck Load",
      price: "469",
      description: "Complete cleanout solution",
      idealFor: "Whole house, full estate",
      features: [
        "Maximum capacity load",
        "Full property cleanout",
        "Commercial quantities",
        "Multiple trip discount",
      ],
      icon: "truck",
    },
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-semibold mb-4">
            Our Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent, Simple Pricing
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our pricing is based on how much space your junk takes up in our
            truck. No hidden fees, just honest, upfront pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                tier.popular ? "ring-4 ring-blue-500" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas fa-${tier.icon} text-blue-600 text-2xl`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">$</span>
                  <span className="text-5xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{tier.description}</p>
                <p className="text-sm text-gray-500 mb-6">
                  Ideal for: {tier.idealFor}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <i className="fas fa-check text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-blue-100 mb-6">
              We understand that every job is unique. Contact us for a
              personalized estimate tailored to your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Request Custom Quote
                <i className="fas fa-arrow-right ml-2" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <i className="fas fa-phone mr-2" />
                (417) 425-2730
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
