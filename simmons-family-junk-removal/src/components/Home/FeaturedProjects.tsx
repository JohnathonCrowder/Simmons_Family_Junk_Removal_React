import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      image: "before-after-1.jpg",
      title: "Residential Cleanout",
      description: "Complete home decluttering and removal service",
      stats: "2 tons removed in 4 hours",
    },
    {
      image: "before-after-2.jpg",
      title: "Office Renovation",
      description: "Commercial space clearing for major renovations",
      stats: "Entire floor cleared in 2 days",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            See the transformation for yourself
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl"
            >
              <img
                src={`/images/${project.image}`}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 flex flex-col justify-end p-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-gray-900 text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <p className="text-primary font-semibold">{project.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
