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
import NewsletterSection from "./components/NewsletterSection";
import ContactSubmissions from "./components/ContactSubmissions";

// New ServerSwitch component
const ServerSwitch: React.FC<{
  currentServer: string;
  onServerChange: (url: string) => void;
}> = ({ currentServer, onServerChange }) => {
  const servers = {
    production:
      "https://simmonsfamilyjunkremoval-backend.onrender.com/api/posts",
    local: "http://localhost:5000/api/posts",
  };

  const getCurrentServerName = (url: string) => {
    return (
      Object.entries(servers).find(([_, value]) => value === url)?.[0] ||
      "custom"
    );
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">
        Server Configuration
      </h3>
      <div className="flex items-center space-x-4">
        <select
          value={getCurrentServerName(currentServer)}
          onChange={(e) =>
            onServerChange(servers[e.target.value as keyof typeof servers])
          }
          className="bg-white/10 border border-blue-300/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
        >
          <option value="production">Production Server</option>
          <option value="local">Local Server</option>
        </select>
        <div className="text-blue-200">
          Current:{" "}
          {getCurrentServerName(currentServer).charAt(0).toUpperCase() +
            getCurrentServerName(currentServer).slice(1)}
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [activeSection, setActiveSection] = useState<
    "posts" | "newsletter" | "contact"
  >("posts");
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Server management state
  const [currentServer, setCurrentServer] = useState(
    localStorage.getItem("serverUrl") || import.meta.env.VITE_API_URL
  );

  const handleServerChange = (newServer: string) => {
    localStorage.setItem("serverUrl", newServer);
    setCurrentServer(newServer);
    window.location.reload();
  };

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setError(null);
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
    await fetchPosts();
  };

  const handleLogout = () => {
    localStorage.removeItem("serverUrl");
    logout();
    navigate("/admin/login");
  };

  const handleDeleteClick = (post: Post) => {
    setPostToDelete(post);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!postToDelete) return;
    try {
      await deletePost(postToDelete._id);
      setPosts(posts.filter((p) => p._id !== postToDelete._id));
      setDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (err) {
      setError("Failed to delete post");
    }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299E1' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        post={postToDelete}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
        <DashboardHeader onLogout={handleLogout} />

        {/* Server Switch */}
        <ServerSwitch
          currentServer={currentServer}
          onServerChange={handleServerChange}
        />

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8">
          {["posts", "newsletter", "contact"].map((section) => (
            <button
              key={section}
              onClick={() =>
                setActiveSection(section as "posts" | "newsletter" | "contact")
              }
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === section
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-blue-200 hover:bg-white/20"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
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
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg">
                {error}
              </div>
            ) : viewMode === "table" ? (
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                <PostsTable
                  posts={filteredPosts}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
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
