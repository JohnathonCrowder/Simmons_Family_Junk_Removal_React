import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = "/images/hero-bg.jpg",
  title = (
    <>
      Professional Junk Removal <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
        Made Simple
      </span>
    </>
  ),
  subtitle = "Efficient, eco-friendly junk removal services for your home and business.",
  primaryButtonText = "Get a Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call Us Now",
  secondaryButtonLink = "tel:+1234567890",
}) => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center animate-zoom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <motion.div
      className="relative z-10 container mx-auto px-4 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to={primaryButtonLink}
          className="bg-gradient-to-r from-primary to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          {primaryButtonText}
        </Link>
        <a
          href={secondaryButtonLink}
          className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-md"
        >
          {secondaryButtonText}
        </a>
      </div>
    </motion.div>

    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
  </section>
);

export default HeroSection;
