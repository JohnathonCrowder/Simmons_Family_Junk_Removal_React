import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../../api/posts";
import { BASE_URL } from "@/utils/config";
import { exportPost } from "../../../../api/posts";

interface PostsGridProps {
  posts: Post[];
  onDeleteClick: (post: Post) => void;
  selectedPosts: string[];
  onSelectPost: (id: string) => void;
}

const PostsGrid: React.FC<PostsGridProps> = ({
  posts,
  onDeleteClick,
  selectedPosts,
  onSelectPost,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className={`bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 overflow-hidden transition-all duration-200 ${
            selectedPosts.includes(post._id) ? "ring-2 ring-yellow-500" : ""
          }`}
        >
          <div className="relative">
            {post.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <input
              type="checkbox"
              checked={selectedPosts.includes(post._id)}
              onChange={() => onSelectPost(post._id)}
              className="absolute top-4 left-4 form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-blue-300 text-sm mb-4">
              {post.excerpt.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 text-sm px-2 py-1 bg-yellow-500/10 rounded-full">
                {post.category || "Uncategorized"}
              </span>
              <span className="text-blue-300 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="bg-blue-900/60 px-6 py-4 border-t border-yellow-500/30">
            <div className="flex justify-between items-center">
              <Link
                to={`/post/${post._id}`}
                className="text-blue-200 hover:text-blue-100 transition-colors"
              >
                View Post
              </Link>
              <div className="flex space-x-2">
                <Link
                  to={`/admin/edit-post/${post._id}`}
                  className="p-2 bg-yellow-500/20 text-yellow-300 rounded hover:bg-yellow-500/30 transition-colors"
                  title="Edit"
                >
                  <i className="fas fa-edit" />
                </Link>
                <button
                  onClick={() => exportPost(post._id)}
                  className="p-2 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors"
                  title="Export"
                >
                  <i className="fas fa-file-export" />
                </button>
                <button
                  onClick={() => onDeleteClick(post)}
                  className="p-2 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors"
                  title="Delete"
                >
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center py-8 text-blue-300">
          No posts found
        </div>
      )}
    </div>
  );
};

export default PostsGrid;
