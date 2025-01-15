import React from "react";
import { Post } from "../../../../api/posts";

interface StatsGridProps {
  posts: Post[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ posts }) => {
  const stats = [
    { label: "Total Posts", value: posts.length, icon: "📝" },
    { label: "Total Views", value: "12.5K", icon: "👁️" },
    { label: "Comments", value: "238", icon: "💬" },
    { label: "Avg. Read Time", value: "4m", icon: "⏱️" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card stat-card rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
