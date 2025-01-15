import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../../api/posts";
import StyleProvider from "./components/StyleProvider";
import EditPostHeader from "./components/EditPostHeader";
import EditPostForm from "./components/EditPostForm";

// Define the shape of the form data that matches EditPostForm's expectations
interface EditPostFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string; // Required string
  tags: string[]; // Required array
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

      // Transform the fetched post to match EditPostFormData shape
      const formattedPost: EditPostFormData = {
        title: fetchedPost.title,
        excerpt: fetchedPost.excerpt,
        content: fetchedPost.content,
        category: fetchedPost.category || "", // Provide default empty string
        tags: fetchedPost.tags || [], // Provide default empty array
        image: fetchedPost.image || undefined,
      };

      setPost(formattedPost);
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
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <StyleProvider>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <EditPostHeader />

            {error && (
              <div className="glass bg-red-500/10 text-red-400 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="glass bg-green-500/10 text-green-400 p-4 rounded-lg mb-6 success-message">
                {successMessage}
              </div>
            )}

            {post && (
              <EditPostForm
                post={post}
                onSubmit={handleSubmit}
                isSaving={saving}
              />
            )}
          </div>
        </div>
      </div>
    </StyleProvider>
  );
};

export default EditPost;
