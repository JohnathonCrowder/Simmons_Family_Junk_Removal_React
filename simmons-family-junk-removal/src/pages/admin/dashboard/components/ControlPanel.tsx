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
  onRefresh: () => void; // New prop for refreshing posts
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  searchTerm,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  onRefresh,
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
        // Reset the file input
        if (e.target) e.target.value = "";
      } catch (err) {
        console.error("Error importing post:", err);
        // Here you could add a toast notification or some other error feedback
      }
    }
  };

  return (
    <div className="glass rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full glass-card rounded-lg px-4 py-2 text-white focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="glass-card rounded-lg px-4 py-2 text-white focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="tutorial">Tutorials</option>
            <option value="tech">Tech News</option>
            <option value="opinion">Opinion</option>
          </select>
          <div className="flex rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange("table")}
              className={`view-toggle px-4 py-2 ${
                viewMode === "table"
                  ? "bg-neon-blue/20 text-neon-blue"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <i className="fas fa-list"></i>
            </button>
            <button
              onClick={() => onViewModeChange("grid")}
              className={`view-toggle px-4 py-2 ${
                viewMode === "grid"
                  ? "bg-neon-blue/20 text-neon-blue"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <i className="fas fa-th"></i>
            </button>
          </div>
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
            className="px-4 py-2 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30 transition-all duration-300"
          >
            Import Post
          </button>
          <Link
            to="/create"
            className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded hover:bg-neon-purple/30 transition-all duration-300"
          >
            New Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
