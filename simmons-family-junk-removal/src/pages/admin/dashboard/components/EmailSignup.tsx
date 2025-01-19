import React, { useState, useEffect } from "react";
import {
  getSubscriptions,
  deleteSubscription,
  NewsletterSubscription,
} from "../../../../api/newsletter";

const EmailSignup: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSubscriptions = async () => {
    try {
      const data = await getSubscriptions();
      setSubscriptions(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch subscriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      try {
        await deleteSubscription(id);
        setSubscriptions(subscriptions.filter((sub) => sub._id !== id));
      } catch (err) {
        setError("Failed to delete subscription");
      }
    }
  };

  const filteredSubscriptions = subscriptions.filter((sub) =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Newsletter Subscriptions
        </h2>
        <input
          type="text"
          placeholder="Search emails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 glass-input rounded-lg px-4 py-2 text-white focus:outline-none"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-500/10 text-red-400 rounded-lg">
          {error}
        </div>
      )}

      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-400">Email</th>
              <th className="text-left p-4 text-gray-400">Date</th>
              <th className="text-right p-4 text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map((subscription) => (
              <tr
                key={subscription._id}
                className="border-b border-gray-800 hover:bg-white/5"
              >
                <td className="p-4 text-white">{subscription.email}</td>
                <td className="p-4 text-gray-400">
                  {new Date(subscription.date).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleDelete(subscription._id)}
                    className="px-3 py-1 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredSubscriptions.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No subscriptions found
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSignup;
