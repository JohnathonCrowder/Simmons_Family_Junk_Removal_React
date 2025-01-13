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
  title = "Ready to Clear the Clutter?",
  description = "Get your free, no-obligation quote today and experience the difference professional junk removal can make.",
  primaryButtonText = "Get Your Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call (417) 425-2730",
  secondaryButtonLink = "tel:+14174252730",
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-blue-400 font-semibold mb-4">
            Professional Junk Removal Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={primaryButtonLink}
              className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg group"
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
              className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "bolt",
              title: "Fast Service",
              description: "Most jobs completed within 24 hours",
            },
            {
              icon: "dollar-sign", // Changed from hand-holding-dollar
              title: "Competitive Pricing",
              description: "Transparent, upfront quotes with no hidden fees",
            },
            {
              icon: "leaf",
              title: "Eco-Friendly",
              description: "Responsible disposal and recycling practices",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i
                  className={`fas fa-${feature.icon} text-2xl text-blue-300`}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
