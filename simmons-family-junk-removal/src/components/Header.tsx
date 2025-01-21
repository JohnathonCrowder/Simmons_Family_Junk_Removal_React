import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/servicesData";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Items
  const navItems = [
    { label: "Home", path: "/", icon: "home" },
    {
      label: "Services",
      path: "/services",
      icon: "tools",
      hasDropdown: true,
    },
    { label: "Projects", path: "/projects", icon: "image" },
    { label: "Blog", path: "/blog", icon: "book" },
    { label: "About", path: "/about", icon: "info-circle" },
    { label: "Contact", path: "/contact", icon: "envelope" },
  ];

  // Mobile Menu Component
  const MobileMenu = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-[80vw] max-w-sm h-full bg-blue-900 text-white overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-blue-100 hover:text-white"
              >
                <i className="fas fa-times text-2xl" />
              </button>
            </div>

            {/* Company Logo */}
            <div className="px-6 py-4 border-b border-blue-800">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                <div className="ml-3">
                  <div className="text-lg font-bold">Simmons Family</div>
                  <div className="text-sm text-blue-300">Junk Removal</div>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <div key={item.path} className="mb-2">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMobileSubmenu(
                            openMobileSubmenu === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        <span className="flex items-center">
                          <i className={`fas fa-${item.icon} w-6`} />
                          {item.label}
                        </span>
                        <i
                          className={`fas fa-chevron-down transform transition-transform duration-200 ${
                            openMobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-2 space-y-2">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center px-4 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800 transition-colors"
                                >
                                  <i
                                    className={`fas fa-${service.icon} w-6 text-blue-400`}
                                  />
                                  <span>{service.title}</span>
                                </Link>
                              ))}
                              <Link
                                to="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center px-4 py-2 rounded-lg text-yellow-300 hover:bg-blue-800 transition-colors"
                              >
                                <i className="fas fa-th-list w-6" />
                                <span>View All Services</span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? "bg-blue-700 text-white"
                          : "text-blue-100 hover:bg-blue-800 hover:text-white"
                      }`}
                    >
                      <i className={`fas fa-${item.icon} w-6`} />
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Call-to-Action Buttons */}
            <div className="px-6 py-4 border-t border-blue-800 space-y-4">
              <a
                href="tel:+14174252730"
                className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-phone mr-2" />
                (417) 425-2730
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Social Links */}
            <div className="px-6 py-4 border-t border-blue-800">
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/SimmonsFamily04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/simmons_family_junk_removal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-2xl" />
                </a>
                <a
                  href="https://www.youtube.com/@SimmonsFamilyJunkRemoval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-youtube text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
                src="/logo.png"
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
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) setIsServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) setIsServicesDropdownOpen(false);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-white bg-blue-500"
                        : "text-blue-100 hover:text-white hover:bg-blue-800"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fas fa-chevron-down ml-1 text-xs" />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                        >
                          {servicesData.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                            >
                              <i
                                className={`fas fa-${service.icon} w-6 text-blue-500`}
                              />
                              <span>{service.title}</span>
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <Link
                              to="/services"
                              className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            >
                              <i className="fas fa-th-list w-6" />
                              <span>View All Services</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+14174252730"
                className="text-blue-100 hover:text-white transition-colors duration-300"
              >
                <i className="fas fa-phone mr-2" />
                (417) 425-2730
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
      <MobileMenu />
    </>
  );
};

export default Header;
