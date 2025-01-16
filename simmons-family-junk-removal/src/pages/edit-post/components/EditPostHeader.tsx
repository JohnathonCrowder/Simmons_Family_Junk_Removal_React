import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EditPostHeader: React.FC = () => {
  return (
    <div className="relative mb-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2" />
            Back to Dashboard
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Edit Post
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-blue-100 mb-8"
        >
          Make changes to your post and save when you're ready
        </motion.p>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-blue-200"
        >
          {[
            {
              icon: "fa-pen",
              text: "Edit content directly",
            },
            {
              icon: "fa-image",
              text: "Update or remove images",
            },
            {
              icon: "fa-tags",
              text: "Modify tags and categories",
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="flex items-center bg-white/5 rounded-full px-4 py-2"
            >
              <i className={`fas ${tip.icon} mr-2 text-blue-400`} />
              {tip.text}
            </div>
          ))}
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/10"
        >
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center text-blue-200">
              <i className="fas fa-clock mr-2" />
              Auto-saves while editing
            </div>
            <div className="flex items-center text-blue-200">
              <i className="fas fa-history mr-2" />
              Maintains revision history
            </div>
            <div className="flex items-center text-blue-200">
              <i className="fas fa-shield-alt mr-2" />
              Secure editing
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual Indicators */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="flex space-x-2"
        >
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-blue-500/50"
            ></div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EditPostHeader;
