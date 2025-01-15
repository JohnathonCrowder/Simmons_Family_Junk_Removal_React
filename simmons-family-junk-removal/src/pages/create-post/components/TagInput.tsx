import React from "react";

interface TagInputProps {
  currentTag: string;
  tags: string[];
  onTagChange: (value: string) => void;
  onTagKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onRemoveTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = ({
  currentTag,
  tags,
  onTagChange,
  onTagKeyDown,
  onRemoveTag,
}) => {
  return (
    <div>
      <label htmlFor="tags" className="block text-gray-300 mb-2">
        Tags
      </label>
      <input
        type="text"
        id="tags"
        value={currentTag}
        onChange={(e) => onTagChange(e.target.value)}
        onKeyDown={onTagKeyDown}
        className="w-full glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
        placeholder="Press Enter to add tags"
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full text-sm flex items-center"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemoveTag(tag)}
              className="ml-2 text-neon-blue hover:text-neon-purple"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
