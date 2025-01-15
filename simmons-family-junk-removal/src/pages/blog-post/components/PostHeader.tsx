// src/pages/blog-post/components/PostHeader.tsx
import React from "react";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface PostHeaderProps {
  post: Post;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center pt-8">
      {" "}
      {/* Added pt-8 for top padding */}
      {/* Image Section */}
      {post.image && (
        <div className="mb-8">
          <img
            src={`${BASE_URL}${post.image}`}
            alt={post.title}
            className="rounded-lg max-h-[600px] w-full object-contain mx-auto"
          />
        </div>
      )}
      {/* Content Section */}
      <div className="max-w-3xl mx-auto">
        {/* Category and Date */}
        <div className="flex justify-center flex-wrap items-center gap-4 mb-6 text-sm">
          {post.category && (
            <span className="px-4 py-1.5 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/30">
              {post.category}
            </span>
          )}
          <span className="text-gray-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-300 italic mb-8">{post.excerpt}</p>

        {/* Optional Decorative Element */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
