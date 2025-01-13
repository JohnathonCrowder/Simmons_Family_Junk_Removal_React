import React from "react";
import { motion } from "framer-motion";

const NewsletterSignup: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-blue-100 mb-8">
          Get the latest tips, insights, and industry news delivered straight to
          your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-3 rounded-lg text-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </motion.section>
  );
};

export default NewsletterSignup;
