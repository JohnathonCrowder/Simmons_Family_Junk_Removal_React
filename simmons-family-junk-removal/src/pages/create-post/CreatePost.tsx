import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts";
import StyleProvider from "./components/StyleProvider";
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
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while creating the post"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyleProvider>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CreatePostHeader />

            {error && (
              <div className="glass bg-red-500/10 text-red-400 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <PostForm onSubmit={handleSubmit} isLoading={loading} />
          </div>
        </div>
      </div>
    </StyleProvider>
  );
};

export default CreatePost;
