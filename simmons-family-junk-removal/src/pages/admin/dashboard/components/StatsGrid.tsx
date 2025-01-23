import React from "react";
import { Post } from "../../../../api/posts";

interface StatsGridProps {
  posts: Post[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ posts }) => {
  // Calculate real stats
  const stats = {
    totalPosts: posts.length,
    categories: posts.reduce<Record<string, number>>((acc, post) => {
      const category = post.category || "Uncategorized";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {}),
    latestPost:
      posts.length > 0
        ? new Date(
            Math.max(...posts.map((p) => new Date(p.date).getTime()))
          ).toLocaleDateString()
        : "No posts",
    oldestPost:
      posts.length > 0
        ? new Date(
            Math.min(...posts.map((p) => new Date(p.date).getTime()))
          ).toLocaleDateString()
        : "No posts",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-blue-800/30 rounded-lg p-6 border border-yellow-500/20">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-yellow-500 text-sm">Total Posts</div>
            <div className="text-2xl font-bold text-white">
              {stats.totalPosts}
            </div>
          </div>
          <div className="text-3xl text-yellow-500 opacity-50">
            <i className="fas fa-file-alt" />
          </div>
        </div>
      </div>

      <div className="bg-blue-800/30 rounded-lg p-6 border border-yellow-500/20">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-yellow-500 text-sm">Categories</div>
            <div className="text-2xl font-bold text-white">
              {Object.keys(stats.categories).length}
            </div>
          </div>
          <div className="text-3xl text-yellow-500 opacity-50">
            <i className="fas fa-folder" />
          </div>
        </div>
      </div>

      <div className="bg-blue-800/30 rounded-lg p-6 border border-yellow-500/20">
        <div>
          <div className="text-yellow-500 text-sm mb-1">Latest Post</div>
          <div className="text-lg font-bold text-white">{stats.latestPost}</div>
        </div>
      </div>

      <div className="bg-blue-800/30 rounded-lg p-6 border border-yellow-500/20">
        <div className="text-yellow-500 text-sm mb-2">Category Breakdown</div>
        <div className="space-y-1 max-h-24 overflow-y-auto">
          {Object.entries(stats.categories)
            .sort(([, a], [, b]) => b - a)
            .map(([category, count]) => (
              <div key={category} className="flex justify-between text-sm">
                <span className="text-blue-200">{category}</span>
                <span className="text-white font-medium">{count}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
