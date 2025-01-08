import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const timelineSteps = [
    {
      icon: "phone-alt",
      title: "Contact Us",
      description: "Get a free quote online or call us directly",
    },
    {
      icon: "calendar-check",
      title: "Schedule Service",
      description: "Choose a convenient time, same-day available",
    },
    {
      icon: "truck",
      title: "We Handle Everything",
      description: "Our professional team removes all unwanted items",
    },
    {
      icon: "smile",
      title: "Satisfaction Guaranteed",
      description: "Enjoy your clean, clutter-free space",
    },
  ];

  return (
    <section className="relative bg-blue-900 min-h-[85vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-800/50 to-transparent transform -skew-x-12" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            easings: ["easeInOut"],
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            easings: ["easeInOut"],
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={primaryButtonLink}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {primaryButtonText}
                <motion.i
                  className="fas fa-arrow-right ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="inline-flex items-center px-8 py-4 border border-blue-400 text-lg font-medium rounded-lg text-blue-100 hover:bg-blue-800/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent" />

            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="relative pl-12 pb-8 last:pb-0"
              >
                <motion.div
                  className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`fas fa-${step.icon} text-white`} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
