import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    stats: {
      items: string;
      time: string;
      recycled: string;
    };
    image: string;
    tags: string[];
    challenges: string[];
    results: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container - Centers the modal both vertically and horizontally */}
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50 px-4 py-8">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <i className="fas fa-times text-xl" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-grow">
                {/* Hero Section */}
                <div className="relative h-[300px] md:h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                      {project.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-lg text-white/80">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="p-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {Object.entries(project.stats).map(
                      ([key, value], index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 text-center"
                        >
                          <div className="text-3xl font-bold text-blue-600 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key === "recycled" ? "Recycled" : key}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-8">
                    {/* Full Description */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Project Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Challenges Overcome
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3 text-gray-600"
                          >
                            <i className="fas fa-check-circle text-blue-600 mt-1" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Project Results
                      </h3>
                      <ul className="space-y-3">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3 text-gray-600"
                          >
                            <i className="fas fa-star text-blue-600 mt-1" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Service Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-12 bg-gray-50 rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let us help you transform your space with our professional
                      junk removal services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={onClose}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Get a Free Quote
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                      <a
                        href="tel:+1234567890"
                        className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <i className="fas fa-phone mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
