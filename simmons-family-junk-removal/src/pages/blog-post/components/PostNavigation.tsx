import React from "react";
import { Link } from "react-router-dom";

const PostNavigation: React.FC = () => {
  return (
    <div className="p-6 md:p-8 border-t border-gray-700">
      <div className="flex justify-between">
        <Link
          to="/blogpage"
          className="px-6 py-3 bg-cyber-light text-neon-blue rounded-lg hover:bg-cyber-light/70 transition-colors duration-300 flex items-center space-x-2"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  );
};

export default PostNavigation;
