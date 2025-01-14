import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  timeframe: string;
  date: string;
  services: string[];
  stats: {
    itemsRemoved: string;
    recyclingRate: string;
    manHours: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const [imageFocus, setImageFocus] = useState<"before" | "after" | null>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Image loading handler
  const handleImageLoad = useCallback((type: "before" | "after") => {
    if (type === "before") setBeforeLoaded(true);
    if (type === "after") setAfterLoaded(true);
  }, []);

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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            aria-label="Close modal background"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
            className="fixed inset-4 md:inset-10 bg-white rounded-2xl z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center text-white z-40 transition-all duration-200 hover:rotate-90"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-lg" />
            </button>

            {/* Modal Content */}
            <div className="max-w-7xl mx-auto p-4 md:p-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h2
                  id="modal-title"
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  {project.title}
                </h2>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2" />
                  {project.location}
                </div>
              </motion.div>

              {/* Image Comparison Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              >
                {/* Before Image */}
                <div
                  className="relative group"
                  onMouseEnter={() => setImageFocus("before")}
                  onMouseLeave={() => setImageFocus(null)}
                >
                  <div className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-times-circle text-red-500 mr-2" />
                    Before
                  </div>
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl">
                    {!beforeLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
                      </div>
                    )}
                    <motion.img
                      src={project.beforeImage}
                      alt="Before transformation"
                      className={`max-w-full max-h-[600px] w-full object-contain ${
                        imageFocus === "after" ? "opacity-80" : ""
                      }`}
                      onLoad={() => handleImageLoad("before")}
                      animate={{ scale: imageFocus === "before" ? 1.02 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* After Image */}
                <div
                  className="relative group"
                  onMouseEnter={() => setImageFocus("after")}
                  onMouseLeave={() => setImageFocus(null)}
                >
                  <div className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2" />
                    After
                  </div>
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl">
                    {!afterLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
                      </div>
                    )}
                    <motion.img
                      src={project.afterImage}
                      alt="After transformation"
                      className={`max-w-full max-h-[600px] w-full object-contain ${
                        imageFocus === "before" ? "opacity-80" : ""
                      }`}
                      onLoad={() => handleImageLoad("after")}
                      animate={{ scale: imageFocus === "after" ? 1.02 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Description and Services */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Services Provided
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center bg-white rounded-lg p-3 shadow-sm"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fas fa-check text-blue-600" />
                          </div>
                          <span className="text-gray-700">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats and Timeline */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-blue-600 text-white rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-4">
                      Project Stats
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-blue-100 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="text-2xl font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Timeline
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Duration</span>
                        <span className="text-lg font-semibold text-gray-900">
                          {project.timeframe}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Completed</span>
                        <span className="text-lg font-semibold text-gray-900">
                          {project.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-6 sm:mb-0 text-center sm:text-left">
                      <h4 className="text-2xl font-bold mb-2">
                        Ready for Your Transformation?
                      </h4>
                      <p className="text-blue-100">
                        Get your free quote today and experience our
                        professional service.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        Get a Free Quote
                        <i className="fas fa-arrow-right ml-2" />
                      </a>
                      <a
                        href="tel:+14174252730"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300"
                      >
                        <i className="fas fa-phone mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
