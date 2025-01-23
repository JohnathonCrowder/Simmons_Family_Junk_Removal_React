import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../../api/posts";
import { BASE_URL } from "../../../../utils/config";
import { exportPost } from "../../../../api/posts";

interface PostsTableProps {
  posts: Post[];
  onDeleteClick: (post: Post) => void;
  selectedPosts: string[];
  onSelectPost: (id: string) => void;
}

const PostsTable: React.FC<PostsTableProps> = ({
  posts,
  onDeleteClick,
  selectedPosts,
  onSelectPost,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-blue-900/60">
          <tr>
            <th className="p-4 w-12">
              <input
                type="checkbox"
                checked={
                  posts.length > 0 && selectedPosts.length === posts.length
                }
                onChange={() => {
                  if (selectedPosts.length === posts.length) {
                    posts.forEach((post) => onSelectPost(post._id));
                  } else {
                    posts.forEach((post) => {
                      if (!selectedPosts.includes(post._id)) {
                        onSelectPost(post._id);
                      }
                    });
                  }
                }}
                className="form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
              />
            </th>
            <th className="text-left p-4 text-yellow-500 font-medium">Post</th>
            <th className="text-left p-4 text-yellow-500 font-medium">
              Category
            </th>
            <th className="text-left p-4 text-yellow-500 font-medium">Date</th>
            <th className="text-left p-4 text-yellow-500 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post._id}
              className={`border-t border-blue-400/10 hover:bg-blue-800/30 transition-colors ${
                selectedPosts.includes(post._id) ? "bg-blue-800/40" : ""
              }`}
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={selectedPosts.includes(post._id)}
                  onChange={() => onSelectPost(post._id)}
                  className="form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
                />
              </td>
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
                    <div className="text-sm text-blue-300">
                      {post.excerpt.substring(0, 50)}...
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-blue-200">
                <span className="px-2 py-1 bg-blue-900/40 rounded-full text-sm">
                  {post.category || "Uncategorized"}
                </span>
              </td>
              <td className="p-4 text-blue-300">
                {new Date(post.date).toLocaleDateString()}
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <Link
                    to={`/post/${post._id}`}
                    className="p-2 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors"
                    title="View"
                  >
                    <i className="fas fa-eye" />
                  </Link>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length === 0 && (
        <div className="text-center py-8 text-blue-300">No posts found</div>
      )}
    </div>
  );
};

export default PostsTable;
