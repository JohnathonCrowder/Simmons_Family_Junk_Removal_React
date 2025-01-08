import React from "react";
import { motion } from "framer-motion";

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      highlight: "500+",
      title: "Happy Customers",
      description: "Building trust one cleanup at a time",
      icon: "smile",
    },
    {
      highlight: "100k+",
      title: "Pounds Removed",
      description: "Getting the job done, no matter the size",
      icon: "truck-loading",
    },
    {
      highlight: "90%",
      title: "Recycling Rate",
      description: "Committed to responsible disposal",
      icon: "recycle",
    },
    {
      highlight: "4.9",
      title: "Star Rating",
      description: "Quality service that speaks for itself",
      icon: "star",
    },
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Small Business, <br />
            <span className="text-blue-300">Big Results</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Every job matters, every customer counts. Here's what we've achieved
            together with our community's trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i
                    className={`fas fa-${achievement.icon} text-blue-300 text-3xl`}
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">
                    {achievement.highlight}
                  </div>
                  <div className="text-xl font-semibold text-blue-200">
                    {achievement.title}
                  </div>
                  <p className="text-blue-100">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-quote-right text-blue-300 text-3xl" />
            </div>
            <blockquote className="text-xl text-blue-100 mb-6">
              "Juan was professional, efficient, and went above and beyond. He
              turned what I thought would be a stressful cleanup into a seamless
              experience. Couldn't recommend him more highly!"
            </blockquote>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="mt-2 text-blue-200 font-semibold">
              Sarah Thompson
            </div>
            <div className="text-blue-300 text-sm">Springfield Homeowner</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
