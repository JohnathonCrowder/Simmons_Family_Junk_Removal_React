import React from "react";

interface ServerSwitchProps {
  currentServer: string;
  onServerChange: (url: string) => void;
}

const ServerSwitch: React.FC<ServerSwitchProps> = ({
  currentServer,
  onServerChange,
}) => {
  const servers = {
    production:
      "https://simmonsfamilyjunkremoval-backend.onrender.com/api/posts",
    local: "http://localhost:5000/api/posts",
  };

  const getCurrentServerName = (url: string) => {
    return (
      Object.entries(servers).find(([_, value]) => value === url)?.[0] ||
      "custom"
    );
  };

  return (
    <div className="glass rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">
        Server Configuration
      </h3>
      <div className="flex items-center space-x-4">
        <select
          value={getCurrentServerName(currentServer)}
          onChange={(e) =>
            onServerChange(servers[e.target.value as keyof typeof servers])
          }
          className="glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
        >
          <option value="production">Production Server</option>
          <option value="local">Local Server</option>
        </select>
        <div className="text-sm text-gray-400">
          Current: {getCurrentServerName(currentServer)}
        </div>
      </div>
    </div>
  );
};

export default ServerSwitch;
