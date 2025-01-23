import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { importPost } from "../../../../api/posts";

interface ControlPanelProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  viewMode: "table" | "grid";
  onViewModeChange: (mode: "table" | "grid") => void;
  onRefresh: () => void;
  categories: string[];
  sortBy: "date" | "title";
  sortDirection: "asc" | "desc";
  onSortChange: (sortBy: "date" | "title") => void;
  selectedCount: number;
  onDeleteSelected: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  searchTerm,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  onRefresh,
  categories,
  sortBy,
  sortDirection,
  onSortChange,
  selectedCount,
  onDeleteSelected,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await importPost(file);
        onRefresh(); // Refresh posts after successful import
        if (e.target) e.target.value = "";
      } catch (err) {
        console.error("Error importing post:", err);
      }
    }
  };

  return (
    <div className="glass rounded-xl p-6 mb-8 backdrop-blur-md border border-yellow-500/30">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full md:w-64 px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 placeholder-blue-200/60"
            />
            <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500/50" />
          </div>

          {/* Category Filter */}
          <select
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Sort Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSortChange("date")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                sortBy === "date"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-blue-800/50 text-blue-200 hover:bg-blue-700/50"
              }`}
            >
              <i className={`fas fa-calendar-alt mr-2`} />
              Date
              {sortBy === "date" && (
                <i
                  className={`fas fa-sort-${
                    sortDirection === "asc" ? "up" : "down"
                  } ml-1`}
                />
              )}
            </button>
            <button
              onClick={() => onSortChange("title")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                sortBy === "title"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-blue-800/50 text-blue-200 hover:bg-blue-700/50"
              }`}
            >
              <i className={`fas fa-font mr-2`} />
              Title
              {sortBy === "title" && (
                <i
                  className={`fas fa-sort-${
                    sortDirection === "asc" ? "up" : "down"
                  } ml-1`}
                />
              )}
            </button>
          </div>

          {/* View Toggle */}
          <button
            onClick={() =>
              onViewModeChange(viewMode === "table" ? "grid" : "table")
            }
            className="px-3 py-2 bg-blue-800/50 text-blue-200 rounded-lg hover:bg-blue-700/50 transition-colors"
          >
            <i
              className={`fas fa-${viewMode === "grid" ? "list" : "th"} mr-2`}
            />
            {viewMode === "grid" ? "List View" : "Grid View"}
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Hidden file input for import */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".zip"
            className="hidden"
          />

          {/* Import button */}
          <button
            onClick={handleImportClick}
            className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-all duration-300 border border-green-500/30"
          >
            <i className="fas fa-file-import mr-2" />
            Import
          </button>

          {/* New Post button */}
          <Link
            to="/create"
            className="px-4 py-2 bg-yellow-500 text-blue-900 rounded-lg hover:bg-yellow-400 transition-all duration-300"
          >
            <i className="fas fa-plus mr-2" />
            New Post
          </Link>

          {/* Delete Selected button */}
          {selectedCount > 0 && (
            <button
              onClick={onDeleteSelected}
              className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300 border border-red-500/30"
            >
              <i className="fas fa-trash mr-2" />
              Delete Selected ({selectedCount})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
