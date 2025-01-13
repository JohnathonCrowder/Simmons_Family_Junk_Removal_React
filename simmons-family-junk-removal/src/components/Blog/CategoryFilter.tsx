import React from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        onClick={() => onSelectCategory("all")}
        className={`px-6 py-2 rounded-full ${
          selectedCategory === "all"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-50"
        } transition-colors`}
      >
        All Posts
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          } transition-colors`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
