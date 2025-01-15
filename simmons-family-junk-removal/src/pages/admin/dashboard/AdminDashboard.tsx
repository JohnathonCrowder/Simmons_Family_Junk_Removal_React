import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { getPosts, Post, deletePost } from "../../../api/posts";
import DashboardHeader from "./components/DashboardHeader";
import StatsGrid from "./components/StatsGrid";
import ControlPanel from "./components/ControlPanel";
import PostsTable from "./components/PostsTable";
import PostsGrid from "./components/PostsGrid";
import DeleteModal from "./components/DeleteModal";
import NewsletterSection from "./components/NewsLetterSection";
import ContactSubmissions from "./components/ContactSubmissions";

// New ServerSwitch component
const ServerSwitch: React.FC<{
  currentServer: string;
  onServerChange: (url: string) => void;
}> = ({ currentServer, onServerChange }) => {
  const servers = {
    production: "https://codefusionlabs-backend.onrender.com/api/posts",
    local: "http://localhost:5000/api/posts",
  };

  const getCurrentServerName = (url: string) => {
    return (
      Object.entries(servers).find(([_, value]) => value === url)?.[0] ||
      "custom"
    );
  };

  return (
    <div className="glass rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">
        Server Configuration
      </h3>
      <div className="flex items-center space-x-4">
        <select
          value={getCurrentServerName(currentServer)}
          onChange={(e) =>
            onServerChange(servers[e.target.value as keyof typeof servers])
          }
          className="glass-card rounded-lg px-4 py-2 text-white focus:outline-none"
        >
          <option value="production">Production Server</option>
          <option value="local">Local Server</option>
        </select>
        <div className="text-sm text-gray-400">
          Current:{" "}
          {getCurrentServerName(currentServer).charAt(0).toUpperCase() +
            getCurrentServerName(currentServer).slice(1)}
        </div>
      </div>
    </div>
  );
};

// Extend the Post interface to include category
interface ExtendedPost extends Post {
  category?: string;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<ExtendedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<ExtendedPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [activeSection, setActiveSection] = useState<
    "posts" | "newsletter" | "contact"
  >("posts");
  const { logout } = useAuth();
  const navigate = useNavigate();

  // New state for server management
  const [currentServer, setCurrentServer] = useState(
    localStorage.getItem("serverUrl") || import.meta.env.VITE_API_URL
  );

  const handleServerChange = (newServer: string) => {
    localStorage.setItem("serverUrl", newServer);
    setCurrentServer(newServer);
    // Optional: Refresh the page to apply changes
    window.location.reload();
  };

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts as ExtendedPost[]);
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refreshPosts = async () => {
    setLoading(true);
    try {
      await fetchPosts();
    } catch (err) {
      setError("Failed to refresh posts");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("serverUrl"); // Clear server URL on logout
    logout();
    navigate("/admin/login");
  };

  const handleDeleteClick = (post: ExtendedPost) => {
    setPostToDelete(post);
    setDeleteModalOpen(true);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || post.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <style>
        {`
          .glass {
            background: rgba(26, 26, 47, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(33, 150, 243, 0.1);
          }

          .glass-card {
            background: rgba(26, 26, 47, 0.3);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(33, 150, 243, 0.2);
            transition: all 0.3s ease;
          }

          .glass-card:hover {
            border-color: rgba(33, 150, 243, 0.5);
            box-shadow: 0 0 15px rgba(33, 150, 243, 0.2);
          }
        `}
      </style>

      <DeleteModal
        isOpen={deleteModalOpen}
        post={postToDelete}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={async () => {
          try {
            if (postToDelete) {
              await deletePost(postToDelete._id);
              setPosts(posts.filter((post) => post._id !== postToDelete._id));
              setDeleteModalOpen(false);
            }
          } catch (err) {
            console.error("Error deleting post:", err);
            setError("Failed to delete post");
          }
        }}
      />

      <div className="container mx-auto px-4">
        <DashboardHeader onLogout={handleLogout} />

        {/* Server Switch */}
        <ServerSwitch
          currentServer={currentServer}
          onServerChange={handleServerChange}
        />

        {/* Section Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection("posts")}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === "posts"
                ? "bg-neon-blue text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveSection("newsletter")}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === "newsletter"
                ? "bg-neon-blue text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Newsletter
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === "contact"
                ? "bg-neon-blue text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contact
          </button>
        </div>

        {activeSection === "posts" ? (
          <>
            <StatsGrid posts={posts} />
            <ControlPanel
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onRefresh={refreshPosts}
            />

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center py-8">{error}</div>
            ) : viewMode === "table" ? (
              <PostsTable
                posts={filteredPosts}
                onDeleteClick={handleDeleteClick}
              />
            ) : (
              <PostsGrid
                posts={filteredPosts}
                onDeleteClick={handleDeleteClick}
              />
            )}
          </>
        ) : activeSection === "newsletter" ? (
          <NewsletterSection />
        ) : (
          <ContactSubmissions />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
