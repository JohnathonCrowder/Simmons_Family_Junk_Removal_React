import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-blue-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Simmons Family Junk Removal"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">
                  Simmons Family
                </span>
                <span className="text-blue-300 text-sm">Junk Removal</span>
              </div>
            </Link>
            <p className="text-blue-200">
              Professional junk removal services in Springfield, MO.
              Family-owned and operated since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/SimmonsFamily04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/simmons_family_junk_removal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.youtube.com/@SimmonsFamilyJunkRemoval"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                aria-label="Subscribe to our YouTube channel"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
                { label: "Get a Quote", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Residential Junk Removal",
                "Commercial Junk Removal",
                "Construction Debris",
                "Appliance Removal",
                "Furniture Removal",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-check text-blue-500 text-xs mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: "map-marker-alt",
                  text: "Springfield, MO 65806",
                },
                {
                  icon: "phone",
                  text: "(417) 425-2730",
                  href: "tel:+14174252730",
                },
                {
                  icon: "envelope",
                  text: "jsimmons@simmonsfamjunkremoval.com",
                  href: "mailto:jsimmons@simmonsfamjunkremoval.com",
                },
                { icon: "clock", text: "Mon-Sat: 7am - 7pm" },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i
                    className={`fas fa-${item.icon} text-blue-500 mt-1 mr-3`}
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bible Verse Section - Balanced Design */}
      <div className="border-t border-blue-800 bg-blue-900/95 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Decorative Line and Cross */}
            <div className="flex items-center w-full justify-center mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-px bg-blue-700 w-full max-w-xs"
              />
              <span className="px-4 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-yellow-400/20 blur-lg rounded-full"
                />
                <motion.i
                  className="fas fa-cross text-yellow-400 text-2xl relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 6px #FCD34D)",
                      "drop-shadow(0 0 10px #FCD34D)",
                    ],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    filter: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                />
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-px bg-blue-700 w-full max-w-xs"
              />
            </div>

            {/* Bible Verse */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center font-serif text-xl md:text-2xl text-blue-100 italic mb-2"
            >
              "I can do all things through Christ who strengthens me"
            </motion.p>

            {/* Citation */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-yellow-400 text-sm font-medium"
            >
              — Philippians 4:13 —
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Simmons Family Junk Removal. All
              rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-blue-300">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <motion.a
                href="#top"
                className="hover:text-white transition-colors duration-300 flex items-center"
                whileHover={{ y: -2 }}
              >
                Back to Top
                <i className="fas fa-arrow-up ml-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
