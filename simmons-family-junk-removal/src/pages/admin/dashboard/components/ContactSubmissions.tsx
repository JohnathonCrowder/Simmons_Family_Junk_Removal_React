import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  items: string[]; // Items could be undefined or empty
  pickupDate: string;
  pickupTime: string;
  city: string;
  instructions?: string; // Optional field
  date: string;
}

// Delete Modal Component
const DeleteContactModal: React.FC<{
  isOpen: boolean;
  name: string;
  onClose: () => void;
  onDelete: () => void;
}> = ({ isOpen, name, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Delete</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the message from{" "}
          <strong>{name}</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] =
    useState<ContactSubmission | null>(null);

  // Fetch submissions from the backend
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.get(`${BASE_URL}/api/contact`, {
          headers: { "x-auth-token": token },
        });
        setSubmissions(response.data);
      } catch (err) {
        setError(
          "Failed to fetch contact submissions. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter submissions by search term
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.instructions?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleDeleteClick = (submission: ContactSubmission) => {
    setMessageToDelete(submission);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!messageToDelete) return;

    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${BASE_URL}/api/contact/${messageToDelete._id}`, {
        headers: { "x-auth-token": token },
      });
      setSubmissions(submissions.filter((s) => s._id !== messageToDelete._id));
      setDeleteModalOpen(false);
      setMessageToDelete(null);
    } catch (err) {
      console.error("Error deleting message:", err);
      setError("Failed to delete the message. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Delete Modal */}
      <DeleteContactModal
        isOpen={deleteModalOpen}
        name={messageToDelete?.name || ""}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search submissions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        />
        <span className="text-gray-600 text-sm">
          Showing {filteredSubmissions.length} of {submissions.length}{" "}
          submissions
        </span>
      </div>

      {/* Submissions List */}
      <div className="grid gap-6">
        {filteredSubmissions.length === 0 ? (
          <div className="text-gray-500 text-center">No submissions found.</div>
        ) : (
          filteredSubmissions.map((submission) => (
            <div
              key={submission._id}
              className="p-6 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {submission.name}
                  </h3>
                  <p className="text-gray-600">{submission.email}</p>
                  <p className="text-gray-600">{submission.phone}</p>
                </div>
                <button
                  onClick={() => handleDeleteClick(submission)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Service Type:</strong> {submission.serviceType}
                </p>
                <p>
                  <strong>City:</strong> {submission.city}
                </p>
                <p>
                  <strong>Pickup Date:</strong>{" "}
                  {new Date(submission.pickupDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Pickup Time:</strong> {submission.pickupTime}
                </p>
                <p>
                  <strong>Items:</strong>{" "}
                  {submission.items?.length > 0
                    ? submission.items.join(", ")
                    : "No items listed"}
                </p>
                {submission.instructions && (
                  <p>
                    <strong>Instructions:</strong> {submission.instructions}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactSubmissions;
