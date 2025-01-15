import React from "react";

interface DashboardHeaderProps {
  onLogout: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
        Admin Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-400">Welcome back, Admin</span>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
