import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import TagInput from "./TagInput";
import SubmitButton from "./SubmitButton";

interface PostFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isLoading: boolean;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [] as string[],
  });
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tags") {
        postFormData.append(key, JSON.stringify(value));
      } else {
        postFormData.append(key, value as string);
      }
    });
    if (image) {
      postFormData.append("image", image);
    }
    await onSubmit(postFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
              required
            >
              <option value="">Select a category</option>
              <option value="tutorial">Tutorial</option>
              <option value="tech-news">Tech News</option>
              <option value="opinion">Opinion</option>
              <option value="case-study">Case Study</option>
            </select>
          </div>

          <TagInput
            currentTag={currentTag}
            tags={formData.tags}
            onTagChange={setCurrentTag}
            onTagKeyDown={handleTagKeyDown}
            onRemoveTag={(tagToRemove) =>
              setFormData({
                ...formData,
                tags: formData.tags.filter((tag) => tag !== tagToRemove),
              })
            }
          />

          <div>
            <label className="block text-gray-300 mb-2">Featured Image</label>
            <ImageUpload
              imagePreview={imagePreview}
              onImageClick={() => fileInputRef.current?.click()}
              onRemoveImage={(e) => {
                e.stopPropagation();
                setImage(null);
                setImagePreview(null);
              }}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="excerpt" className="block text-gray-300 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-300 mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
              rows={12}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate("/admin/dashboard")}
          className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
};

export default PostForm;
