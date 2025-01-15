import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface ArticleGridProps {
  posts: Post[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
          <article className="bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden hover:border-neon-blue transition-all duration-300">
            {post.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white hover:text-neon-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-neon-purple hover:text-neon-pink transition-colors">
                  Read Article →
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ArticleGrid;
