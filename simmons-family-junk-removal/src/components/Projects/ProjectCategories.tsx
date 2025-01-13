import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/projects.json";

interface ProjectCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectCategories: React.FC<ProjectCategoriesProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { projects } = projectsData;

  // Calculate counts dynamically
  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === "all") return projects.length;
    return projects.filter(
      (project) => project.category.toLowerCase() === categoryId.toLowerCase()
    ).length;
  };

  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: "th-large",
      color: "blue",
      count: getCategoryCount("all"),
    },
    {
      id: "residential",
      label: "Residential",
      icon: "home",
      color: "red",
      count: getCategoryCount("residential"),
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: "building",
      color: "orange",
      count: getCategoryCount("commercial"),
    },
    {
      id: "estate",
      label: "Estate",
      icon: "box",
      color: "purple",
      count: getCategoryCount("estate"),
    },
    {
      id: "yard",
      label: "Yard",
      icon: "leaf",
      color: "green",
      count: getCategoryCount("yard"),
    },
    {
      id: "storage",
      label: "Storage",
      icon: "warehouse",
      color: "yellow",
      count: getCategoryCount("storage"),
    },
    {
      id: "construction",
      label: "Construction",
      icon: "hard-hat",
      color: "teal",
      count: getCategoryCount("construction"),
    },
  ];

  // Hide categories with no projects
  const visibleCategories = categories.filter((category) => category.count > 0);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Browse By Category
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Find Projects By Type
          </h2>
        </motion.div>

        {/* Desktop Category Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-4">
          {visibleCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-blue-600 text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow border border-gray-100"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  selectedCategory === category.id
                    ? "bg-white"
                    : `bg-${category.color}-100`
                }`}
              >
                <i
                  className={`fas fa-${category.icon} text-xl ${
                    selectedCategory === category.id
                      ? "text-blue-600"
                      : `text-${category.color}-600`
                  }`}
                />
              </div>
              <div className="text-sm font-semibold mb-1">{category.label}</div>
              <div
                className={`text-xs ${
                  selectedCategory === category.id
                    ? "text-blue-100"
                    : "text-gray-500"
                }`}
              >
                {category.count} {category.count === 1 ? "Project" : "Projects"}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile Scrollable Categories */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max px-4">
            {visibleCategories.map((category, index) => (
              <motion.button
                key={`mobile-${category.id}`}
                onClick={() => onCategoryChange(category.id)}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 min-w-[120px] ${
                  selectedCategory === category.id
                    ? `bg-blue-600 text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow border border-gray-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    selectedCategory === category.id
                      ? "bg-white"
                      : `bg-${category.color}-100`
                  }`}
                >
                  <i
                    className={`fas fa-${category.icon} ${
                      selectedCategory === category.id
                        ? "text-blue-600"
                        : `text-${category.color}-600`
                    }`}
                  />
                </div>
                <div className="text-xs font-semibold">{category.label}</div>
                <div
                  className={`text-xs ${
                    selectedCategory === category.id
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {category.count}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-blue-600">
              {categories.find((c) => c.id === selectedCategory)?.count || 0}
            </span>{" "}
            projects in{" "}
            <span className="font-semibold text-blue-600">
              {categories.find((c) => c.id === selectedCategory)?.label ||
                "All Categories"}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCategories;
