import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="Simmons Family Junk Removal Logo"
            className="h-12"
          />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
