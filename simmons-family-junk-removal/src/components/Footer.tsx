import React from "react";
import { Link } from "react-router-dom";

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
              {[
                { icon: "facebook-f", url: "#" },
                { icon: "twitter", url: "#" },
                { icon: "instagram", url: "#" },
                { icon: "linkedin-in", url: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow us on ${social.icon}`}
                >
                  <i className={`fab fa-${social.icon}`} />
                </a>
              ))}
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

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Simmons Junk Removal. All rights
              reserved.
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
              <a
                href="#top"
                className="hover:text-white transition-colors duration-300 flex items-center"
              >
                Back to Top
                <i className="fas fa-arrow-up ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
