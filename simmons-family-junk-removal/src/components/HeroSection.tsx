import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-500/10 to-transparent opacity-70" />

        {/* Geometric patterns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299E1' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 text-white order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              Professional Junk Removal <br />
              <span className="text-blue-300">Made Simple</span>
            </h2>

            <p className="text-blue-100 text-base sm:text-lg mb-6 lg:mb-8">
              {subtitle}
            </p>

            <div className="space-y-4 mb-8 lg:mb-12">
              {[
                { icon: "clock", text: "Same-Day Service Available" },
                { icon: "leaf", text: "Eco-Friendly Disposal Methods" },
                { icon: "shield-alt", text: "Licensed and Fully Insured" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                    <i className={`fas fa-${feature.icon} text-blue-300`} />
                  </div>
                  <span className="text-sm sm:text-base text-blue-100">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                {primaryButtonText}
                <i className="fas fa-arrow-right ml-2" />
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  <i className="fas fa-phone mr-2" />
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/truck.jpg"
                alt="Junk Removal Truck"
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-4 right-4 lg:left-6 lg:right-6 bg-blue-500 text-white p-4 lg:p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <span className="text-2xl lg:text-4xl font-bold">5+</span>
                  <span className="text-xs lg:text-sm leading-tight">
                    Years of
                    <br />
                    Experience
                  </span>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/30" />
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <span className="text-2xl lg:text-4xl font-bold">500+</span>
                  <span className="text-xs lg:text-sm leading-tight">
                    Satisfied
                    <br />
                    Customers
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-3 text-white/70">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs sm:text-sm space-y-2 sm:space-y-0">
          <span>Serving Springfield and surrounding areas</span>
          <span>Family owned & operated since 2005</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
