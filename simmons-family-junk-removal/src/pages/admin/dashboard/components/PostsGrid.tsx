import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../../api/posts";
import { BASE_URL } from "@/utils/config";
import { exportPost } from "../../../../api/posts";

interface PostsGridProps {
  posts: Post[];
  onDeleteClick: (post: Post) => void;
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts, onDeleteClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id} className="glass-card rounded-xl overflow-hidden">
          {post.image && (
            <div className="h-48 overflow-hidden">
              <img
                src={`${BASE_URL}${post.image}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {post.excerpt.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <div className="flex space-x-2">
                {/* New View Button */}
                <Link
                  to={`/post/${post._id}`}
                  className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded hover:bg-neon-purple/30 transition-all duration-300"
                >
                  View
                </Link>
                <Link
                  to={`/admin/edit-post/${post._id}`}
                  className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded hover:bg-neon-blue/30 transition-all duration-300"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDeleteClick(post)}
                  className="px-3 py-1 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-all duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => exportPost(post._id)}
                  className="px-3 py-1 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30 transition-all duration-300"
                >
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
