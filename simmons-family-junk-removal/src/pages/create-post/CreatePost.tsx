import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createPost } from "../../api/posts";

// Import your components
import CreatePostHeader from "./components/CreatePostHeader";
import PostForm from "./components/PostForm";

const CreatePost: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      await createPost(formData);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <CreatePostHeader />

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6"
            >
              {error}
            </motion.div>
          )}

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
            <PostForm onSubmit={handleSubmit} isLoading={loading} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreatePost;
