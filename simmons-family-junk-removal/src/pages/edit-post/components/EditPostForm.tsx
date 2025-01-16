import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_URL } from "@/utils/config";

interface EditPostFormProps {
  post: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    image?: string;
  };
  onSubmit: (formData: FormData) => Promise<void>;
  isSaving: boolean;
}

const EditPostForm: React.FC<EditPostFormProps> = ({
  post,
  onSubmit,
  isSaving,
}) => {
  const [formData, setFormData] = useState(post);
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    post.image ? `${BASE_URL}${post.image}` : null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postFormData = new FormData();

    // Append all form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tags") {
        postFormData.append(key, JSON.stringify(value));
      } else {
        postFormData.append(key, value as string);
      }
    });

    // Handle image
    if (image) {
      postFormData.append("image", image);
    } else if (imagePreview) {
      postFormData.append("keepOldImage", "true");
    }

    await onSubmit(postFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(currentTag.trim())) {
        setFormData({
          ...formData,
          tags: [...formData.tags, currentTag.trim()],
        });
      }
      setCurrentTag("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-6 md:p-8 space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-white mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Category Select */}
        <div>
          <label
            htmlFor="category"
            className="block text-white mb-2 font-medium"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Tips">Tips & Tricks</option>
            <option value="Eco-friendly">Eco-friendly Disposal</option>
          </select>
        </div>

        {/* Excerpt Textarea */}
        <div>
          <label
            htmlFor="excerpt"
            className="block text-white mb-2 font-medium"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            rows={3}
            required
          />
        </div>

        {/* Tags Input */}
        <div>
          <label htmlFor="tags" className="block text-white mb-2 font-medium">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyDown={handleTagKeyDown}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Press Enter to add tags"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      tags: formData.tags.filter((_, i) => i !== index),
                    })
                  }
                  className="ml-2 text-blue-300 hover:text-white"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-white mb-2 font-medium">
            Featured Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-lg hover:border-blue-500 transition-colors">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto h-48 w-auto rounded"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-blue-500 rounded-md font-medium text-white hover:bg-blue-400 px-3 py-2"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Textarea */}
        <div>
          <label
            htmlFor="content"
            className="block text-white mb-2 font-medium"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            rows={12}
            required
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="px-6 py-4 bg-gray-900/50 flex items-center justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate("/admin/dashboard")}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSaving}
          className={`
            px-6 py-2 bg-blue-500 text-white rounded-lg font-medium
            ${isSaving ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"}
            transition-colors
          `}
        >
          {isSaving ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving Changes...
            </span>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
