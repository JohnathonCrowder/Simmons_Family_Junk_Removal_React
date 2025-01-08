import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20vw] font-bold text-white/5">JUNK</h1>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/truck.jpg"
                alt="Junk Removal Truck"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
            </div>

            {/* Overlapping elements */}
            <div className="absolute -bottom-6 left-6 right-6 bg-primary text-white p-6 rounded shadow-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold">15+</span>
                  <span className="text-sm leading-tight">
                    Years of
                    <br />
                    Experience
                  </span>
                </div>
                <div className="h-12 w-px bg-white/30" />
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold">5K+</span>
                  <span className="text-sm leading-tight">
                    Satisfied
                    <br />
                    Customers
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 text-white"
          >
            <h2 className="text-5xl font-bold mb-6">
              We Make
              <span className="block text-accent mt-2">Junk Disappear</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              From old furniture to construction debris, we handle it all.
              Professional, reliable service that puts you first.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { icon: "clock", text: "Same-Day Service Available" },
                { icon: "leaf", text: "Eco-Friendly Disposal Methods" },
                { icon: "shield-alt", text: "Licensed and Fully Insured" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <i className={`fas fa-${feature.icon} text-accent`} />
                  </div>
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                Get a Free Quote
                <i className="fas fa-arrow-right ml-2" />
              </Link>
              <a
                href="tel:+14175550123"
                className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <i className="fas fa-phone mr-2" />
                (417) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-4 text-white/70">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Serving Springfield and surrounding areas</span>
          <span>Family owned & operated since 2005</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
