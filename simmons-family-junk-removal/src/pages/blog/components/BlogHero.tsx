import React from "react";
import { motion } from "framer-motion";

const BlogHero: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Junk Removal Tips & Insights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-blue-100 mb-8"
      >
        Expert advice on decluttering, eco-friendly disposal, and transforming
        your space
      </motion.p>
    </div>
  );
};

export default BlogHero;
