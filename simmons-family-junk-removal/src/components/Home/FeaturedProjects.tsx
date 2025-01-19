// File: TransformationsSection.tsx
// Path: simmons-family-junk-removal/src/components/Home/TransformationsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

const TransformationsSection: React.FC = () => {
  // Example: taking 3 featured projects. Adjust accordingly.
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <section
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
      aria-labelledby="transformations-section-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-1/3 left-1/4"></div>
        <div className="absolute w-80 h-80 bg-blue-200/20 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="transformations-section-heading"
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Before &amp; After Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how Simmons Family Junk Removal transforms cluttered spaces into
            beautiful, clean environments.
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white border-t-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_10px_2px_rgba(255,215,0,0.5)] transition-shadow duration-300"
            >
              {/* Before/After Image Wrapper */}
              <div className="relative h-64 overflow-hidden">
                {/* Before Image (default state) */}
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* After Image (hover state) */}
                <img
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3 inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i
                    className="fas fa-map-marker-alt mr-2"
                    aria-hidden="true"
                  />
                  {project.location}
                </div>

                {/* Description */}
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-50 rounded-lg p-2 text-center"
                    >
                      <div className="text-blue-600 font-bold">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <Link
                  to="/projects"
                  className="text-blue-600 font-medium text-sm inline-flex items-center group/button"
                >
                  View More Details
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            View All Transformations
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
