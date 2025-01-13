import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

const ProjectShowcase: React.FC = () => {
  const featuredProject = projectsData.projects[0];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Featured Transformation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See Our Work In Action
          </h2>
          <p className="text-lg text-gray-600">
            Experience the dramatic difference our professional junk removal
            services can make in transforming cluttered spaces into clean,
            organized environments.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Before Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={featuredProject.beforeImage}
                  alt="Before transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-black/75 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm">
                <i className="fas fa-times-circle mr-2 text-red-400" />
                Before
              </div>
            </motion.div>

            {/* After Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={featuredProject.afterImage}
                  alt="After transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                <i className="fas fa-check-circle mr-2 text-green-300" />
                After
              </div>
            </motion.div>

            {/* Location Badge */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ y: -2 }}
                className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100"
              >
                <i className="fas fa-map-marker-alt text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">
                  {featuredProject.location}
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <i className="far fa-calendar text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">
                  {featuredProject.date}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Project Title and Description */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {featuredProject.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(featuredProject.stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-xl border border-gray-100"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Services Provided
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {featuredProject.services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center bg-gray-50 rounded-lg p-3"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-check text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="space-y-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 group"
              >
                Get Your Free Quote
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <p className="text-center text-gray-500 text-sm">
                No obligation • Same day response • Best price guaranteed
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "clock",
              title: "Fast Service",
              text: "Same day service available for urgent needs",
            },
            {
              icon: "shield-alt",
              title: "Fully Insured",
              text: "Licensed and insured for your peace of mind",
            },
            {
              icon: "leaf",
              title: "Eco-Friendly",
              text: "Responsible disposal and recycling practices",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`fas fa-${benefit.icon} text-blue-600 text-xl`} />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h5>
                <p className="text-gray-600">{benefit.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
