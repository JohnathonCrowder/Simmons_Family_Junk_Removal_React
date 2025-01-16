import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface BlogGridProps {
  posts: Post[];
}

const PostCard: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/post/${post._id}`}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {post.image && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`${BASE_URL}${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                {post.category && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </span>
                )}
                <h2 className="text-xl font-bold text-blue-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-blue-600 font-medium">Read More →</span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {!isVisible && (
        <div className="animate-pulse">
          <div className="bg-white/10 rounded-xl">
            <div className="aspect-w-16 aspect-h-9 bg-white/20"></div>
            <div className="p-6">
              <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center text-blue-100 py-12">
        <p className="text-xl">No posts found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <PostCard key={post._id} post={post} index={index} />
      ))}
    </div>
  );
};

export default BlogGrid;
