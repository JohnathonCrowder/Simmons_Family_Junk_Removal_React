import React from "react";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

const PostHeader: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="relative">
      {post.image && (
        <div className="relative h-[400px]">
          <img
            src={`${BASE_URL}${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      )}
      <div className="relative p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          {post.category && (
            <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <i className="far fa-calendar mr-2" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <i className="far fa-clock mr-2" />5 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
