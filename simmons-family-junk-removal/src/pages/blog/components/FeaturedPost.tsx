import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[1400px] mx-auto"
      >
        <div className="relative grid grid-cols-12 gap-4 rounded-2xl overflow-hidden bg-blue-900 shadow-2xl">
          {/* Content Section - Left Side */}
          <div className="col-span-12 lg:col-span-5 p-8 md:p-12 flex flex-col justify-center z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-6">
                Featured Article
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h2>

              <p className="text-blue-100 mb-8 line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 mb-8">
                <div className="flex items-center text-blue-200">
                  <i className="far fa-calendar-alt mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                {post.category && (
                  <span className="inline-flex items-center text-blue-200">
                    <i className="far fa-folder mr-2" />
                    {post.category}
                  </span>
                )}
              </div>

              <Link
                to={`/post/${post._id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 group"
              >
                Read Article
                <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image Section - Right Side */}
          <div className="col-span-12 lg:col-span-7 relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  {post.image && (
                    <img
                      ref={imageRef}
                      src={`${BASE_URL}${post.image}`}
                      alt={post.title}
                      onLoad={() => setImageLoaded(true)}
                      className={`
                        absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                        ${imageLoaded ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  )}
                </motion.div>
              )}

              {/* Loading state */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-blue-800/50 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-50 blur-lg" />
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-xl" />
      </motion.div>
    </div>
  );
};

export default FeaturedPost;
