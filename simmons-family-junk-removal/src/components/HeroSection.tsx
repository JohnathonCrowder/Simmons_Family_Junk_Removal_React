import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSectionAlternativeLayout: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-500/10 to-transparent opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col">
        {/* Title Section */}
        <div className="text-center mb-16 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-yellow-400 leading-snug tracking-wide"
          >
            Simmons Family Junk Removal
          </motion.h1>

          {/* Animated Separator */}
          <div className="relative flex items-center justify-center w-full mx-auto my-4">
            {/* Expanding Line (Left) */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-yellow-400"
            />
            {/* Expanding Line (Right) */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-yellow-400"
            />
            {/* Rotating Diamond */}
            <motion.div
              initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-6 h-6 bg-yellow-400"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond shape
              }}
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl lg:text-2xl font-sans text-blue-100 mt-1"
          >
            Serving Springfield, MO, with junk removal services inspired by
            faith and care.
          </motion.p>
        </div>

        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Reliable Junk Removal, Done Right Every Time
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Let us handle the heavy lifting. Simmons Family Junk Removal
              provides efficient, eco-friendly solutions across Springfield and
              beyond.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "clock", text: "Flexible Scheduling" },
                { icon: "leaf", text: "Eco-Friendly Disposal" },
                { icon: "check-circle", text: "Licensed & Insured" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg shadow"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/30 rounded-full">
                    <i
                      className={`fas fa-${feature.icon} text-yellow-300 text-2xl`}
                    />
                  </div>
                  <span className="text-blue-100 text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 text-lg font-medium rounded-full shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
                <motion.i
                  className="fas fa-arrow-right ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-lg font-medium rounded-full text-yellow-400 bg-transparent hover:bg-yellow-50 hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image with Gold Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl border-4 border-yellow-500">
              <img
                src="/truck.jpg"
                alt="Junk Removal Truck"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAlternativeLayout;
