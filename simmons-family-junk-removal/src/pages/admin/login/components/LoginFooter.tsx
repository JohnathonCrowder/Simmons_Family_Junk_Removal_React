import React from "react";
import { Link } from "react-router-dom";

const LoginFooter: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <Link
        to="/"
        className="text-blue-200 hover:text-white transition-colors inline-flex items-center"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Return to main site
      </Link>

      <div className="mt-4 text-blue-200/60 text-sm">
        <p>© {new Date().getFullYear()} Simmons Family Junk Removal</p>
        <p>Authorized personnel only</p>
      </div>
    </div>
  );
};

export default LoginFooter;
