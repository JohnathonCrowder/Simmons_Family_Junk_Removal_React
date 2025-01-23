import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../utils/config";
import { motion, AnimatePresence } from "framer-motion";

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  city: string;
  items?: string[];
  pickupDate: string;
  pickupTime: string;
  instructions?: string;
  date: string;
}

const ContactSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [selectedSubmissions, setSelectedSubmissions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "name">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(`${BASE_URL}/api/contact`, {
        headers: { "x-auth-token": token },
      });
      setSubmissions(response.data);
    } catch (err) {
      setError("Failed to fetch contact submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`${BASE_URL}/api/contact/${id}`, {
          headers: { "x-auth-token": token },
        });
        setSubmissions(submissions.filter((sub) => sub._id !== id));
        setSelectedSubmissions((selected) => selected.filter((s) => s !== id));
      } catch (err) {
        setError("Failed to delete submission");
      }
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedSubmissions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedSubmissions.length} submissions?`
      )
    ) {
      try {
        const token = localStorage.getItem("adminToken");
        await Promise.all(
          selectedSubmissions.map((id) =>
            axios.delete(`${BASE_URL}/api/contact/${id}`, {
              headers: { "x-auth-token": token },
            })
          )
        );
        setSubmissions((subs) =>
          subs.filter((sub) => !selectedSubmissions.includes(sub._id))
        );
        setSelectedSubmissions([]);
      } catch (err) {
        setError("Failed to delete some submissions");
      }
    }
  };

  const exportToCSV = (selectedOnly: boolean = false) => {
    const dataToExport = selectedOnly
      ? filteredSubmissions.filter((sub) =>
          selectedSubmissions.includes(sub._id)
        )
      : filteredSubmissions;

    const csvContent = [
      [
        "Name",
        "Email",
        "Phone",
        "Service Type",
        "City",
        "Items",
        "Pickup Date",
        "Pickup Time",
        "Instructions",
        "Submission Date",
      ],
      ...dataToExport.map((sub) => [
        sub.name,
        sub.email,
        sub.phone,
        sub.serviceType,
        sub.city,
        sub.items?.join("; ") || "",
        sub.pickupDate,
        sub.pickupTime,
        sub.instructions || "",
        new Date(sub.date).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `contact_submissions_${selectedOnly ? "selected_" : ""}${
        new Date().toISOString().split("T")[0]
      }.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubmissions = submissions
    .filter((sub) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        sub.name.toLowerCase().includes(searchLower) ||
        sub.email.toLowerCase().includes(searchLower) ||
        sub.phone.includes(searchTerm) ||
        sub.city.toLowerCase().includes(searchLower);

      const matchesFilter =
        filterType === "all" || sub.serviceType === filterType;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });

  const serviceTypes = Array.from(
    new Set(submissions.map((sub) => sub.serviceType))
  );
  const stats = {
    total: submissions.length,
    filtered: filteredSubmissions.length,
    selected: selectedSubmissions.length,
    byService: submissions.reduce((acc, sub) => {
      acc[sub.serviceType] = (acc[sub.serviceType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 border border-yellow-500/30 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">
              Contact Submissions
            </h2>
            <p className="text-blue-200">Manage and track customer requests</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 placeholder-blue-200/60"
              />
              <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500/50" />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
            >
              <option value="all">All Services</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <div className="relative">
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30 flex items-center"
              >
                <i className="fas fa-file-export mr-2" />
                Export
                <i className="fas fa-chevron-down ml-2" />
              </button>

              {showExportOptions && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => {
                        exportToCSV();
                        setShowExportOptions(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 transition-colors"
                    >
                      <i className="fas fa-file-csv mr-2" />
                      Export All as CSV
                    </button>
                    {selectedSubmissions.length > 0 && (
                      <button
                        onClick={() => {
                          exportToCSV(true);
                          setShowExportOptions(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 transition-colors"
                      >
                        <i className="fas fa-check-square mr-2" />
                        Export Selected ({selectedSubmissions.length})
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-yellow-500 text-sm">Total Submissions</div>
                <div className="text-2xl font-bold text-white">
                  {stats.total}
                </div>
              </div>
              <div className="text-3xl text-yellow-500 opacity-50">
                <i className="fas fa-inbox" />
              </div>
            </div>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-yellow-500 text-sm">Filtered Results</div>
                <div className="text-2xl font-bold text-white">
                  {stats.filtered}
                </div>
              </div>
              <div className="text-3xl text-yellow-500 opacity-50">
                <i className="fas fa-filter" />
              </div>
            </div>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-yellow-500 text-sm">Selected</div>
                <div className="text-2xl font-bold text-white">
                  {stats.selected}
                </div>
              </div>
              <div className="text-3xl text-yellow-500 opacity-50">
                <i className="fas fa-check-square" />
              </div>
            </div>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="text-yellow-500 text-sm mb-2">
              Services Breakdown
            </div>
            <div className="space-y-1">
              {Object.entries(stats.byService).map(([service, count]) => (
                <div key={service} className="flex justify-between text-sm">
                  <span className="text-blue-200">{service}</span>
                  <span className="text-white font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="px-3 py-1 bg-blue-800/50 text-blue-200 rounded hover:bg-blue-700/50 transition-colors"
            >
              <i
                className={`fas fa-${viewMode === "grid" ? "list" : "th"} mr-2`}
              />
              {viewMode === "grid" ? "List View" : "Grid View"}
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  if (sortBy === "date") {
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                  } else {
                    setSortBy("date");
                    setSortDirection("desc");
                  }
                }}
                className={`px-3 py-1 rounded transition-colors ${
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
                onClick={() => {
                  if (sortBy === "name") {
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                  } else {
                    setSortBy("name");
                    setSortDirection("asc");
                  }
                }}
                className={`px-3 py-1 rounded transition-colors ${
                  sortBy === "name"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-blue-800/50 text-blue-200 hover:bg-blue-700/50"
                }`}
              >
                <i className={`fas fa-user mr-2`} />
                Name
                {sortBy === "name" && (
                  <i
                    className={`fas fa-sort-${
                      sortDirection === "asc" ? "up" : "down"
                    } ml-1`}
                  />
                )}
              </button>
            </div>
          </div>
          {selectedSubmissions.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30"
            >
              <i className="fas fa-trash mr-2" />
              Delete Selected ({selectedSubmissions.length})
            </button>
          )}
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        </div>
      ) : error ? (
        <div className="p-6 text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg">
          <i className="fas fa-exclamation-circle mr-2" />
          {error}
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredSubmissions.map((submission) => (
              <motion.div
                key={submission._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 overflow-hidden ${
                  selectedSubmissions.includes(submission._id)
                    ? "ring-2 ring-yellow-500"
                    : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSubmissions.includes(submission._id)}
                          onChange={() => toggleSelect(submission._id)}
                          className="mr-3 form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
                        />
                        {submission.name}
                      </h3>
                      <p className="text-blue-300">{submission.email}</p>
                      <p className="text-blue-300">{submission.phone}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(submission._id)}
                      className="text-red-300 hover:text-red-200 transition-colors ml-4"
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-yellow-500">Service:</span>
                      <span className="text-white">
                        {submission.serviceType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-500">City:</span>
                      <span className="text-white">{submission.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-500">Pickup:</span>
                      <span className="text-white">
                        {submission.pickupDate} at {submission.pickupTime}
                      </span>
                    </div>
                    {submission.items && submission.items.length > 0 && (
                      <div>
                        <span className="text-yellow-500">Items:</span>
                        <p className="text-white mt-1">
                          {submission.items.join(", ")}
                        </p>
                      </div>
                    )}
                    {submission.instructions && (
                      <div>
                        <button
                          onClick={() =>
                            setSelectedCard(
                              selectedCard === submission._id
                                ? null
                                : submission._id
                            )
                          }
                          className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center"
                        >
                          <span className="mr-2">Instructions</span>
                          <i
                            className={`fas fa-chevron-${
                              selectedCard === submission._id ? "up" : "down"
                            }`}
                          />
                        </button>
                        {selectedCard === submission._id && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-white mt-1"
                          >
                            {submission.instructions}
                          </motion.p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-blue-900/60 px-6 py-3 border-t border-yellow-500/30">
                  <span className="text-blue-300 text-sm">
                    Submitted on{" "}
                    {new Date(submission.date).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
      {filteredSubmissions.length === 0 && !loading && (
        <div className="text-center py-12 bg-blue-900/40 rounded-xl border border-yellow-500/30">
          <i className="fas fa-inbox text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            No submissions found
          </h3>
          <p className="text-blue-300">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
