import React from "react";
import { Link } from "react-router-dom";

const LoginFooter: React.FC = () => {
  return (
    <div className="mt-6 text-center space-y-4">
      <Link
        to="/"
        className="text-neon-blue hover:text-neon-purple transition-colors"
      >
        ← Return to main site
      </Link>

      <p className="text-gray-500 text-sm">
        Authorized personnel only. All access attempts are logged.
      </p>
    </div>
  );
};

export default LoginFooter;
