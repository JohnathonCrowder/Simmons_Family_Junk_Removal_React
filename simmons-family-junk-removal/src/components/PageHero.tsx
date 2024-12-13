import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeroProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    path: string;
  }>;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  breadcrumbs,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <li className="text-gray-300">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li>
                      <Link
                        to={crumb.path}
                        className="text-gray-300 hover:text-white"
                        aria-current={
                          index === breadcrumbs.length - 1 ? "page" : undefined
                        }
                      >
                        {crumb.label}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </motion.div>
        )}

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
          )}

          {/* Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {primaryButtonText && (
                <Link
                  to={primaryButtonLink || "#"}
                  className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-lg"
                >
                  {primaryButtonText}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
              {secondaryButtonText && (
                <Link
                  to={secondaryButtonLink || "#"}
                  className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-white"
          viewBox="0 0 1440 100"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,95 480,95 720,95 C960,95 1200,95 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
