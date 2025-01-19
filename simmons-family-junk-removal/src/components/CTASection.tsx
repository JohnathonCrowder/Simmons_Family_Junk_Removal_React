// File: CTASection.tsx
// Path: simmons-family-junk-removal/src/components/Home/CTASection.tsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Simmons Family Junk Removal",
  description = "Your trusted partner for fast, reliable, and eco-friendly junk removal in Springfield and beyond. Experience the difference a family-owned business can make!",
  primaryButtonText = "Get Your Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call (417) 425-2730",
  secondaryButtonLink = "tel:+14174252730",
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle golden glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-yellow-400 font-semibold mb-4">
            Family-Owned & Operated
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-gray-100 text-lg md:text-xl mb-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={primaryButtonLink}
              className="inline-flex items-center justify-center bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg group"
            >
              <span>{primaryButtonText}</span>
              <motion.i
                className="fas fa-arrow-right ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <a
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center bg-transparent text-yellow-300 px-8 py-4 rounded-lg font-semibold 
                         hover:bg-yellow-400/10 transition-all duration-300 border border-yellow-300/40 backdrop-blur-sm group"
            >
              <motion.i
                className="fas fa-phone mr-2"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              />
              <span>{secondaryButtonText}</span>
            </a>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: "bolt",
              title: "Fast Service",
              description: "Most jobs completed within 24 hours.",
            },
            {
              icon: "dollar-sign",
              title: "Transparent Pricing",
              description: "Upfront quotes with no hidden fees.",
            },
            {
              icon: "recycle",
              title: "Eco-Friendly Solutions",
              description: "We prioritize responsible recycling and disposal.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-yellow-300/20 hover:bg-white/10 transition-colors duration-300 shadow-sm"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <i
                  className={`fas fa-${feature.icon} text-2xl text-yellow-300`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-yellow-100 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
