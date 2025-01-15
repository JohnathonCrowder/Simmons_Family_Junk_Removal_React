import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface FeaturedArticleProps {
  post: Post;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ post }) => {
  return (
    <div className="mb-16">
      <Link to={`/post/${post._id}`}>
        <article className="grid md:grid-cols-2 gap-8 bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden hover:border-neon-blue transition-all duration-300">
          {post.image && (
            <div className="h-64 md:h-auto overflow-hidden">
              <img
                src={`${BASE_URL}${post.image}`}
                alt={post.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 flex flex-col justify-center">
            <span className="text-neon-blue mb-2">Featured Article</span>
            <h2 className="text-3xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-neon-purple hover:text-neon-pink transition-colors">
                Read Full Article →
              </span>
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default FeaturedArticle;
