import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface RelatedPostsProps {
  currentPost: Post;
  posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, posts }) => {
  // Filter out current post and get posts with matching tags
  const relatedPosts = posts
    .filter((post) => post._id !== currentPost._id)
    .filter((post) => {
      const hasMatchingTag = post.tags?.some((tag) =>
        currentPost.tags?.includes(tag)
      );
      return hasMatchingTag;
    })
    .slice(0, 3); // Limit to 3 related posts

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-700 pt-8">
      <h3 className="text-xl font-bold text-white mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="group block bg-cyber-light/30 rounded-lg overflow-hidden hover:bg-cyber-light/40 transition-all duration-300"
          >
            {post.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {post.excerpt.substring(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
