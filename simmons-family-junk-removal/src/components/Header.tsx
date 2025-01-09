import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-blue-900/95 backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png" // Update this to your actual logo path
                alt="Simmons Family Junk Removal"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
              <div className="flex flex-col">
                <span
                  className={`text-white font-bold transition-all duration-300 ${
                    isScrolled ? "text-lg" : "text-xl"
                  }`}
                >
                  Simmons Family
                </span>
                <span className="text-blue-300 text-sm">Junk Removal</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-white bg-blue-500"
                      : "text-blue-100 hover:text-white hover:bg-blue-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+14175550123"
                className="text-blue-100 hover:text-white transition-colors duration-300"
              >
                <i className="fas fa-phone mr-2" />
                (417) 555-0123
              </a>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <i
                className={`fas fa-${
                  isMobileMenuOpen ? "times" : "bars"
                } text-xl`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
          >
            <div className="bg-blue-900/95 backdrop-blur-md shadow-lg">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-white bg-blue-500"
                          : "text-blue-100 hover:text-white hover:bg-blue-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-3 rounded-lg transition-all duration-300 text-center"
                  >
                    Get a Quote
                  </Link>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
