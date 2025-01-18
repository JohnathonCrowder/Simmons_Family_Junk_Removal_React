import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface BlogGridProps {
  posts: Post[];
}

// Separate Image component with lazy loading
const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imageRef.current) {
            imageRef.current.src = src;
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return (
    <div className="relative w-full h-64 bg-gray-200">
      {!error ? (
        <>
          <img
            ref={imageRef}
            alt={alt}
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse">
              <div className="flex items-center justify-center h-full">
                <i className="fas fa-image text-4xl text-gray-400" />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <i className="fas fa-image-slash text-4xl text-gray-400" />
        </div>
      )}
    </div>
  );
};

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
    <div ref={cardRef} className="h-full">
      {" "}
      {/* Added h-full */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full" // Added h-full
          >
            <Link
              to={`/post/${post._id}`}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col" // Added h-full and flex flex-col
            >
              {post.image && (
                <div className="w-full">
                  <LazyImage
                    src={`${BASE_URL}${post.image}`}
                    alt={post.title}
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                {" "}
                {/* Added flex-1 and flex flex-col */}
                <div className="mb-auto">
                  {" "}
                  {/* This div will push the date/read more to the bottom */}
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
                </div>
                <div className="flex justify-between items-center text-sm mt-4 pt-4 border-t border-gray-100">
                  <span className="text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {!isVisible && (
        <div className="animate-pulse h-full">
          {" "}
          {/* Added h-full */}
          <div className="bg-white/10 rounded-xl h-full flex flex-col">
            {" "}
            {/* Added h-full and flex flex-col */}
            <div className="h-48 bg-white/20"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-white/20 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
                <div className="h-4 bg-white/20 rounded w-2/3"></div>
              </div>
              <div className="h-4 bg-white/20 rounded w-full mt-4 pt-4"></div>
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
