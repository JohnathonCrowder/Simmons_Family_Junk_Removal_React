import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  timeframe: string;
  services: string[];
}

const ProjectsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Complete Garage Transformation",
      category: "Residential",
      location: "Springfield, MO",
      beforeImage: "/images/projects/garage-before.jpg",
      afterImage: "/images/projects/garage-after.jpg",
      description: "Transformed a cluttered garage into an organized space",
      timeframe: "1 Day",
      services: ["Junk Removal", "Organization", "Recycling"],
    },
    // Add more projects here
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "estate", label: "Estate Cleanouts" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === selectedCategory
        );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  {/* Before/After Comparison */}
                  <div className="relative w-full h-full">
                    <img
                      src={project.afterImage}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 w-1/2 overflow-hidden">
                      <img
                        src={project.beforeImage}
                        alt="Before"
                        className="w-[200%] h-full object-cover"
                      />
                    </div>
                    {/* Overlay Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {project.timeframe}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
