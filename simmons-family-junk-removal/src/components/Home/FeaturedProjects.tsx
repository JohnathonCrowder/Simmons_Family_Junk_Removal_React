import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Complete Home Cleanout",
      category: "Residential",
      description:
        "Transformed a cluttered 3,000 sq ft home into a clean, organized space in just 2 days. Our team efficiently sorted through years of accumulated items, properly disposing of waste while ensuring recyclable materials were handled responsibly. The project included removal of old furniture, appliances, and general household items.",
      stats: {
        items: "250+",
        time: "2 days",
        recycled: "80%",
      },
      image: "/images/home-cleanout.jpg",
      tags: ["Furniture Removal", "Appliance Disposal", "Eco-Friendly"],
      fullDescription:
        "This project presented unique challenges with multiple rooms of accumulated items. Our team worked systematically, room by room, ensuring valuable items were preserved while removing unwanted clutter. We coordinated with local recycling centers and donation facilities to minimize landfill impact.",
      challenges: [
        "Multiple rooms of heavy furniture",
        "Delicate family heirlooms to preserve",
        "Tight deadline for real estate listing",
      ],
      results: [
        "Completely cleared space ready for sale",
        "80% of materials recycled or donated",
        "Finished ahead of schedule",
      ],
    },
    {
      title: "Office Renovation Cleanout",
      category: "Commercial",
      description:
        "Cleared out an entire office floor for renovation, ensuring minimal disruption to business operations. This project required careful coordination with building management and efficient handling of office furniture and equipment.",
      stats: {
        items: "500+",
        time: "1 day",
        recycled: "75%",
      },
      image: "/images/office-cleanout.jpg",
      tags: ["Office Furniture", "E-Waste", "Quick Turnaround"],
      fullDescription:
        "This commercial cleanout involved removing outdated office furniture, electronics, and renovation debris from a 10,000 sq ft office space. Our team worked during off-hours to minimize business disruption and coordinated with building management for elevator access and parking.",
      challenges: [
        "Working within strict building hours",
        "Proper disposal of sensitive materials",
        "Coordinating with multiple stakeholders",
      ],
      results: [
        "Zero disruption to neighboring businesses",
        "All electronics properly recycled",
        "Completed under budget",
      ],
    },
  ];

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
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformation for yourself. Real projects, real results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(
                    ([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key === "recycled" ? "Recycled" : key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(index)}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  View Details
                  <i className="fas fa-arrow-right ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={selectedProject !== null ? projects[selectedProject] : null}
        />

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
          <div className="absolute inset-0 opacity-10">
            <i className="fas fa-quote-left text-9xl absolute top-4 left-4" />
            <i className="fas fa-quote-right text-9xl absolute bottom-4 right-4" />
          </div>

          <div className="relative z-10">
            <p className="text-2xl font-medium mb-6 text-center">
              "The team was incredibly professional and efficient. They
              transformed our space in no time. Highly recommend their
              services!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/images/client-avatar.jpg"
                alt="John Doe"
                className="w-16 h-16 rounded-full border-4 border-white/20 mr-4"
              />
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-blue-200">Homeowner</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to start your own success story?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Quote
            <i className="fas fa-arrow-right ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
