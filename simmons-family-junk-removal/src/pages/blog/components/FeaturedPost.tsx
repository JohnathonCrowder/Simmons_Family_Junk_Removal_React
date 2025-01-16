import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Post } from "../../../api/posts";
import { BASE_URL } from "@/utils/config";

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <Link
        to={`/post/${post._id}`}
        className="block bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {post.image && (
            <div className="relative h-64 md:h-full">
              <img
                src={`${BASE_URL}${post.image}`}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-4">
              Featured Post
            </span>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
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
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedPost;
