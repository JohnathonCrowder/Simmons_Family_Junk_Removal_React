import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getPostById, updatePost } from "../../api/posts";
import EditPostHeader from "./components/EditPostHeader";
import EditPostForm from "./components/EditPostForm";

interface EditPostFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image?: string;
}

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [post, setPost] = useState<EditPostFormData | null>(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      if (!id) throw new Error("No post ID provided");
      const fetchedPost = await getPostById(id);
      setPost({
        title: fetchedPost.title,
        excerpt: fetchedPost.excerpt,
        content: fetchedPost.content,
        category: fetchedPost.category || "",
        tags: fetchedPost.tags || [],
        image: fetchedPost.image,
      });
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch post");
      setLoading(false);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setSaving(true);
    setError(null);
    setSuccessMessage(null);

    try {
      if (!id) throw new Error("No post ID provided");
      await updatePost(id, formData);
      setSuccessMessage("Post updated successfully");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <EditPostHeader />

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6"
            >
              {error}
            </motion.div>
          )}

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg mb-6"
            >
              {successMessage}
            </motion.div>
          )}

          {post && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <EditPostForm
                post={post}
                onSubmit={handleSubmit}
                isSaving={saving}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPost;
