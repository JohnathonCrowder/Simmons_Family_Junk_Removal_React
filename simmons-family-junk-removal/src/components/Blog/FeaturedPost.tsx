import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  tags: string[];
}

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative aspect-w-16 aspect-h-9 lg:aspect-h-full">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Featured Post
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={`/images/authors/${post.author
                .toLowerCase()
                .replace(" ", "-")}.jpg`}
              alt={post.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-500">
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-blue-600 font-semibold group"
          >
            Read More
            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedPost;
