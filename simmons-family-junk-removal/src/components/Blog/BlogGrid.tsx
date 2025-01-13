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

interface BlogGridProps {
  posts: Post[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/blog/${post.slug}`}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={`/images/authors/${post.author
                    .toLowerCase()
                    .replace(" ", "-")}.jpg`}
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="text-sm">
                  <span className="text-gray-900 font-medium">
                    {post.author}
                  </span>
                  <div className="text-gray-500">
                    {post.date} · {post.readTime}
                  </div>
                </div>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-700"
              >
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogGrid;
