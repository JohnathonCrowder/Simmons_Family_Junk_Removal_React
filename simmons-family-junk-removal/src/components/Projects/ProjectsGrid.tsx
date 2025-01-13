import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projects.json";

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
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    {/* Before/After Comparison */}
                    <div
                      className="relative w-full h-full group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.afterImage}
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 w-1/2 overflow-hidden transition-all duration-300 group-hover:w-1/3">
                        <img
                          src={project.beforeImage}
                          alt="Before"
                          className="w-[200%] h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-1 bg-white" />
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Labels */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        Before
                      </div>
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="fas fa-map-marker-alt mr-2" />
                        {project.location}
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {project.timeframe}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center bg-gray-50 rounded-lg p-2"
                      >
                        <div className="text-blue-600 font-bold">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
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
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    View Project Details
                    <i className="fas fa-arrow-right ml-2" />
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

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-10 bg-white rounded-2xl z-50 overflow-auto"
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white z-10"
                  >
                    <i className="fas fa-times" />
                  </button>

                  {/* Modal Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-full">
                      <img
                        src={selectedProject.afterImage}
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 w-1/2 overflow-hidden">
                        <img
                          src={selectedProject.beforeImage}
                          alt="Before"
                          className="w-[200%] h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-1 bg-white" />
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        Before
                      </div>
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        After
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-6">
                        <i className="fas fa-map-marker-alt mr-2" />
                        {selectedProject.location}
                      </div>

                      <div className="space-y-6">
                        <p className="text-gray-600">
                          {selectedProject.description}
                        </p>

                        {/* Project Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(selectedProject.stats).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="text-center bg-gray-50 rounded-xl p-4"
                              >
                                <div className="text-2xl font-bold text-blue-600">
                                  {value}
                                </div>
                                <div className="text-sm text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Services */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Services Provided
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedProject.services.map((service, index) => (
                              <div
                                key={index}
                                className="flex items-center text-gray-600"
                              >
                                <i className="fas fa-check text-blue-600 mr-2" />
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-sm text-gray-600">
                                Project Duration
                              </div>
                              <div className="font-semibold text-gray-900">
                                {selectedProject.timeframe}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">
                                Completed
                              </div>
                              <div className="font-semibold text-gray-900">
                                {selectedProject.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGrid;
