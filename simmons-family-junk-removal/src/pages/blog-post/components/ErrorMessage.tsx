import React from "react";
import { Link } from "react-router-dom";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full glass rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-4">Error</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <Link
          to="/blogpage" // Updated from "/blog" to "/blogpage"
          className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors duration-300"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
