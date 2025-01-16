import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

const RelatedPosts: React.FC<{ currentPost: Post; posts: Post[] }> = ({
  currentPost,
  posts,
}) => {
  const relatedPosts = posts
    .filter((post) => post._id !== currentPost._id)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {post.image && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
