import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

const FeaturedProjects: React.FC = () => {
  // Take just 3 featured projects from the projects data
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Featured Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference we make with our before and after transformations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              layout="position"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                {/* After Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.afterImage}
                    alt="After transformation"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Before Image Overlay */}
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-0 transition-opacity duration-500">
                  <div className="relative h-full w-full">
                    <img
                      src={project.beforeImage}
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                  {project.category}
                </div>

                {/* Before/After Label */}
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  <span className="bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                    <i className="fas fa-sync-alt mr-2" />
                    Before & After
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <i className="fas fa-map-marker-alt mr-2" />
                  {project.location}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-2 text-center"
                    >
                      <div className="text-blue-600 font-bold">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <Link
                  to="/projects"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group/button w-full"
                >
                  <span>View Project Details</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Want to see more of our transformations?
          </h3>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
