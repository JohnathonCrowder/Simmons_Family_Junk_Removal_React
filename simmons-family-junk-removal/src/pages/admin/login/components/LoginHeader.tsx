import React from "react";

const LoginHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <img
        src="/logo.png"
        alt="Simmons Family Junk Removal"
        className="h-20 mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
      <p className="text-blue-200">
        Secure access for Simmons Family Junk Removal staff
      </p>
    </div>
  );
};

export default LoginHeader;
