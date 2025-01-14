import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projects.json";
import ProjectModal from "./ProjectModal";

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

interface ProjectsGridProps {
  selectedCategory: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ selectedCategory }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = projectsData;

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layout="position"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  {/* After Image with loading optimization */}
                  <div className="absolute inset-0">
                    <img
                      src={project.afterImage}
                      alt="After transformation"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Before Image Overlay with loading optimization */}
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
                    {Object.entries(project.stats).map(
                      ([key, value], index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-2 text-center"
                        >
                          <div className="text-blue-600 font-bold">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((service, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        +{project.services.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group/button w-full"
                  >
                    <span>View Project Details</span>
                    <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-600 mb-4">
              No projects found for this category.
            </div>
            <button
              onClick={() => selectedCategory === "all"}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Projects
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsGrid;
