import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../../api/posts";
import { BASE_URL } from "../../../../utils/config";
import { exportPost } from "../../../../api/posts";

interface PostsTableProps {
  posts: Post[];
  onDeleteClick: (post: Post) => void;
}

const PostsTable: React.FC<PostsTableProps> = ({ posts, onDeleteClick }) => {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-400">Post</th>
              <th className="text-left p-4 text-gray-400">Date</th>
              <th className="text-left p-4 text-gray-400">Views</th>
              <th className="text-left p-4 text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post._id}
                className="border-b border-gray-800 hover:bg-white/5"
              >
                <td className="p-4">
                  <div className="flex items-center space-x-4">
                    {post.image && (
                      <img
                        src={`${BASE_URL}${post.image}`}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <div className="font-medium text-white">{post.title}</div>
                      <div className="text-sm text-gray-400">
                        {post.excerpt.substring(0, 50)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="p-4 text-gray-400">
                  {Math.floor(Math.random() * 1000)}
                </td>
                <td className="p-4">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
