import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  date: string;
}

// Delete Modal Component (inline for convenience)
const DeleteContactModal: React.FC<{
  isOpen: boolean;
  name: string;
  onClose: () => void;
  onDelete: () => void;
}> = ({ isOpen, name, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
        <p className="text-gray-300 mb-6">
          Are you sure you want to delete the message from {name}? This action
          cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] =
    useState<ContactSubmission | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.get(`${BASE_URL}/api/contact`, {
          headers: {
            "x-auth-token": token,
          },
        });
        setSubmissions(response.data);
      } catch (err) {
        setError("Failed to fetch contact submissions");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const stats = {
    total: submissions.length,
    techChat: submissions.filter((s) => s.topic === "tech-chat").length,
    collaboration: submissions.filter((s) => s.topic === "collaboration")
      .length,
    questions: submissions.filter((s) => s.topic === "question").length,
    other: submissions.filter((s) => s.topic === "other").length,
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTopic =
      selectedTopic === "all" || submission.topic === selectedTopic;

    return matchesSearch && matchesTopic;
  });

  const getTopicColor = (topic: string) => {
    const colors = {
      "tech-chat": "text-cyan-400 border-cyan-400",
      collaboration: "text-emerald-400 border-emerald-400",
      question: "text-violet-400 border-violet-400",
      other: "text-amber-400 border-amber-400",
    };
    return (
      colors[topic as keyof typeof colors] || "text-gray-400 border-gray-400"
    );
  };

  const handleDeleteClick = (submission: ContactSubmission) => {
    setMessageToDelete(submission);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!messageToDelete) return;

    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${BASE_URL}/api/contact/${messageToDelete._id}`, {
        headers: {
          "x-auth-token": token,
        },
      });

      setSubmissions(submissions.filter((s) => s._id !== messageToDelete._id));
      setDeleteModalOpen(false);
      setMessageToDelete(null);
    } catch (err) {
      console.error("Error deleting message:", err);
      // Optionally add error handling UI here
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass rounded-xl p-8 text-red-400 bg-red-500/10">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Delete Modal */}
      <DeleteContactModal
        isOpen={deleteModalOpen}
        name={messageToDelete?.name || ""}
        onClose={() => {
          setDeleteModalOpen(false);
          setMessageToDelete(null);
        }}
        onDelete={handleDelete}
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass p-4 rounded-xl">
          <div className="text-2xl font-bold text-white mb-1">
            {stats.total}
          </div>
          <div className="text-gray-400">Total Messages</div>
        </div>
        <div className="glass p-4 rounded-xl">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.techChat}
          </div>
          <div className="text-gray-400">Tech Discussions</div>
        </div>
        <div className="glass p-4 rounded-xl">
          <div className="text-2xl font-bold text-emerald-400 mb-1">
            {stats.collaboration}
          </div>
          <div className="text-gray-400">Collaborations</div>
        </div>
        <div className="glass p-4 rounded-xl">
          <div className="text-2xl font-bold text-violet-400 mb-1">
            {stats.questions}
          </div>
          <div className="text-gray-400">Questions</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="glass rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-cyber-darker border border-neon-blue/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic("all")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTopic === "all"
                  ? "bg-neon-blue text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            {["tech-chat", "collaboration", "question", "other"].map(
              (topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTopic === topic
                      ? `bg-${
                          getTopicColor(topic).split(" ")[0].split("-")[1]
                        }-400/20 ${getTopicColor(topic).split(" ")[0]}`
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {topic.replace("-", " ")}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-between">
          <span>Contact Messages</span>
          <span className="text-sm text-gray-400">
            {filteredSubmissions.length} messages
          </span>
        </h2>
        {filteredSubmissions.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No messages found.
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission._id}
                className="glass border border-neon-blue/10 rounded-lg p-6 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {submission.name}
                    </h3>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-neon-blue hover:text-neon-purple transition-colors"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <span
                      className={`px-3 py-1 rounded-full text-sm border ${getTopicColor(
                        submission.topic
                      )}`}
                    >
                      {submission.topic.replace("-", " ")}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(submission.date).toLocaleDateString()}
                    </span>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(submission)}
                      className="text-red-400 hover:text-red-300 transition-colors p-2 rounded-lg hover:bg-red-500/10"
                      title="Delete message"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={`text-gray-300 ${
                    expandedMessage === submission._id ? "" : "line-clamp-3"
                  }`}
                >
                  {submission.message}
                </div>
                {submission.message.length > 150 && (
                  <button
                    onClick={() =>
                      setExpandedMessage(
                        expandedMessage === submission._id
                          ? null
                          : submission._id
                      )
                    }
                    className="mt-2 text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    {expandedMessage === submission._id
                      ? "Show less"
                      : "Read more"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSubmissions;
