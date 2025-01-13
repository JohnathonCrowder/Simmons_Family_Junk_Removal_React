import React from "react";
import { motion } from "framer-motion";

const BlogHero: React.FC = () => {
  return (
    <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800" />
      <div className="absolute inset-0 opacity-20 bg-grid-pattern" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Junk Removal Insights & Tips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Expert advice, industry insights, and success stories from our team
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="px-6 py-3 rounded-lg text-gray-900 w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
