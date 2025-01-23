import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { getPosts, Post, deletePost } from "../../../api/posts";
import StatsGrid from "./components/StatsGrid";
import ControlPanel from "./components/ControlPanel";
import PostsTable from "./components/PostsTable";
import PostsGrid from "./components/PostsGrid";
import DeleteModal from "./components/DeleteModal";
import ContactSubmissions from "./components/ContactSubmissions";
import EmailSignup from "./components/EmailSignup";

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
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
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
      setSelectedPosts((prev) => prev.filter((id) => id !== postToDelete._id));
      setDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  const handleSelectPost = (id: string) => {
    setSelectedPosts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedPosts.length} posts?`
      )
    ) {
      try {
        await Promise.all(selectedPosts.map((id) => deletePost(id)));
        setPosts(posts.filter((post) => !selectedPosts.includes(post._id)));
        setSelectedPosts([]);
      } catch (err) {
        setError("Failed to delete some posts");
      }
    }
  };

  const filteredPosts = posts
    .filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        selectedFilter === "all" || post.category === selectedFilter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return sortDirection === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

  const categories = Array.from(
    new Set(posts.map((post) => post.category || "Uncategorized"))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 pt-24 pb-8">
        {" "}
        {/* Changed py-8 to pt-24 pb-8 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">
              Admin Dashboard
            </h1>
            <p className="text-blue-200 mt-2 font-serif italic">
              I can do all things through Christ who strengthens me -
              Philippians 4:13
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-800/50 text-blue-200 rounded-lg hover:bg-blue-700/50 transition-colors"
          >
            Logout
          </button>
        </div>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["posts", "newsletter", "contact"].map((section) => (
            <button
              key={section}
              onClick={() =>
                setActiveSection(section as "posts" | "newsletter" | "contact")
              }
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === section
                  ? "bg-yellow-500 text-blue-900"
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
              categories={categories}
              sortBy={sortBy}
              sortDirection={sortDirection}
              onSortChange={(newSortBy) => {
                if (sortBy === newSortBy) {
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                } else {
                  setSortBy(newSortBy);
                  setSortDirection("desc");
                }
              }}
              selectedCount={selectedPosts.length}
              onDeleteSelected={handleDeleteSelected}
            />

            <DeleteModal
              isOpen={deleteModalOpen}
              post={postToDelete}
              onClose={() => setDeleteModalOpen(false)}
              onDelete={handleDelete}
            />

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg">
                <i className="fas fa-exclamation-circle mr-2" />
                {error}
              </div>
            ) : viewMode === "table" ? (
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                <PostsTable
                  posts={filteredPosts}
                  onDeleteClick={handleDeleteClick}
                  selectedPosts={selectedPosts}
                  onSelectPost={handleSelectPost}
                />
              </div>
            ) : (
              <PostsGrid
                posts={filteredPosts}
                onDeleteClick={handleDeleteClick}
                selectedPosts={selectedPosts}
                onSelectPost={handleSelectPost}
              />
            )}
          </>
        ) : activeSection === "newsletter" ? (
          <EmailSignup />
        ) : (
          <ContactSubmissions />
        )}
        <div className="mb-4">
          <label className="text-blue-200 mr-2">Server:</label>
          <select
            value={currentServer}
            onChange={(e) => handleServerChange(e.target.value)}
            className="bg-blue-800 text-white rounded px-2 py-1"
          >
            <option value="http://localhost:5000/api/posts">Local</option>
            <option value="https://simmonsfamilyjunkremoval-backend.onrender.com/api/posts">
              Production
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
