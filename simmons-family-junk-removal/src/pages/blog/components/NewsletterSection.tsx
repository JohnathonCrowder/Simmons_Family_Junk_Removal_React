import React from "react";
import { motion } from "framer-motion";

const NewsletterSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Junk Removal Tips
        </h2>
        <p className="text-blue-100 mb-8">
          Subscribe to our newsletter for expert advice on decluttering,
          eco-friendly disposal, and more!
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
