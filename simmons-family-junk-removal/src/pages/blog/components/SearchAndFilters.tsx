import React from "react";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilter: "all" | "featured" | "latest" | "popular";
  onFilterChange: (filter: "all" | "featured" | "latest" | "popular") => void;
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  allTags: string[];
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
  selectedTag,
  onTagChange,
  allTags,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3 relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-cyber-darker border border-neon-blue/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-blue">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="flex space-x-2">
          {["all", "featured", "latest", "popular"].map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter as typeof activeFilter)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-neon-blue text-white"
                  : "bg-cyber-darker text-gray-400 hover:text-white"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {allTags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(selectedTag === tag ? null : tag)}
              className={`tag-pill px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-neon-purple/20 text-neon-purple border border-neon-purple"
                  : "bg-cyber-darker text-gray-400 border border-gray-700 hover:border-neon-purple hover:text-neon-purple"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;
