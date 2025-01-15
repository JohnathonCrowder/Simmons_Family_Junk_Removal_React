import React from "react";

const LoginHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="text-6xl mb-4 key-icon">🔐</div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
        Admin Access
      </h1>
      <p className="text-gray-400 mt-2">Enter the mainframe</p>
    </div>
  );
};

export default LoginHeader;
