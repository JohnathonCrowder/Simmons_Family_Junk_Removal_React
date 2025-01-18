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
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 min-h-[85vh] flex items-center overflow-hidden">
      {/* Subtle Background Embellishments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[25%] w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
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
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 text-lg font-medium rounded-full shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
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
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-lg font-medium rounded-full text-yellow-400 bg-transparent hover:bg-yellow-50 hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-0.5"
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
            {/* Vertical Gold Line */}
            <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-yellow-400 via-yellow-300 to-transparent" />

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
                className="relative pl-14 pb-8 last:pb-0"
              >
                {/* Gold Icon Container */}
                <motion.div
                  className="absolute left-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <i className={`fas fa-${step.icon} text-blue-900`} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
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
