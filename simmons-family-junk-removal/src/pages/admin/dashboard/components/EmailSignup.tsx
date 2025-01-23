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
  const [sortConfig, setSortConfig] = useState<{
    key: keyof NewsletterSubscription;
    direction: "ascending" | "descending";
  }>({ key: "date", direction: "descending" });
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<string[]>(
    []
  );
  const [showExportOptions, setShowExportOptions] = useState(false);

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

  const handleDelete = async (ids: string[]) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${ids.length} subscription(s)?`
      )
    ) {
      try {
        await Promise.all(ids.map((id) => deleteSubscription(id)));
        setSubscriptions(subscriptions.filter((sub) => !ids.includes(sub._id)));
        setSelectedSubscriptions([]);
      } catch (err) {
        setError("Failed to delete subscriptions");
      }
    }
  };

  const handleSort = (key: keyof NewsletterSubscription) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    });
  };

  const toggleSelectAll = () => {
    if (selectedSubscriptions.length === filteredSubscriptions.length) {
      setSelectedSubscriptions([]);
    } else {
      setSelectedSubscriptions(filteredSubscriptions.map((sub) => sub._id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedSubscriptions((prev) =>
      prev.includes(id) ? prev.filter((subId) => subId !== id) : [...prev, id]
    );
  };

  const exportToCSV = (selectedOnly: boolean = false) => {
    const dataToExport = selectedOnly
      ? filteredSubscriptions.filter((sub) =>
          selectedSubscriptions.includes(sub._id)
        )
      : filteredSubscriptions;

    const csvContent = [
      ["Email", "Date"],
      ...dataToExport.map((sub) => [
        sub.email,
        new Date(sub.date).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `email_subscriptions_${selectedOnly ? "selected_" : ""}${
          new Date().toISOString().split("T")[0]
        }.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const filteredSubscriptions = subscriptions
    .filter((sub) => sub.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortConfig.key === "date") {
        return sortConfig.direction === "ascending"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      const compareResult = (a[sortConfig.key] as string).localeCompare(
        b[sortConfig.key] as string
      );
      return sortConfig.direction === "ascending"
        ? compareResult
        : -compareResult;
    });

  return (
    <div className="bg-blue-900/40 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-yellow-500/30">
      <div className="p-6 border-b border-yellow-500/30 bg-blue-900/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-yellow-500">
            Email Subscriptions
          </h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search emails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 placeholder-blue-200/60"
              />
              <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500/50" />
            </div>

            {/* Export Dropdown */}
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
                      role="menuitem"
                    >
                      <i className="fas fa-file-csv mr-2" />
                      Export All as CSV
                    </button>
                    <button
                      onClick={() => {
                        exportToCSV(true);
                        setShowExportOptions(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 transition-colors"
                      role="menuitem"
                      disabled={selectedSubscriptions.length === 0}
                    >
                      <i className="fas fa-check-square mr-2" />
                      Export Selected as CSV
                    </button>
                  </div>
                </div>
              )}
            </div>

            {selectedSubscriptions.length > 0 && (
              <button
                onClick={() => handleDelete(selectedSubscriptions)}
                className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30"
              >
                Delete Selected ({selectedSubscriptions.length})
              </button>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="text-yellow-500 text-sm">Total Subscriptions</div>
            <div className="text-2xl font-bold text-white">
              {subscriptions.length}
            </div>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="text-yellow-500 text-sm">Filtered Results</div>
            <div className="text-2xl font-bold text-white">
              {filteredSubscriptions.length}
            </div>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-4 border border-yellow-500/20">
            <div className="text-yellow-500 text-sm">Selected</div>
            <div className="text-2xl font-bold text-white">
              {selectedSubscriptions.length}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        </div>
      ) : error ? (
        <div className="p-6 text-red-300 bg-red-500/10 border border-red-500/30 m-4 rounded-lg">
          {error}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-900/60">
              <tr>
                <th className="p-4">
                  <input
                    type="checkbox"
                    checked={
                      selectedSubscriptions.length ===
                      filteredSubscriptions.length
                    }
                    onChange={toggleSelectAll}
                    className="form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
                  />
                </th>
                <th
                  className="p-4 text-left cursor-pointer hover:bg-blue-800/50 transition-colors"
                  onClick={() => handleSort("email")}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-medium">Email</span>
                    {sortConfig.key === "email" && (
                      <i
                        className={`ml-2 fas fa-sort-${
                          sortConfig.direction === "ascending" ? "up" : "down"
                        } text-yellow-500`}
                      />
                    )}
                  </div>
                </th>
                <th
                  className="p-4 text-left cursor-pointer hover:bg-blue-800/50 transition-colors"
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-medium">Date</span>
                    {sortConfig.key === "date" && (
                      <i
                        className={`ml-2 fas fa-sort-${
                          sortConfig.direction === "ascending" ? "up" : "down"
                        } text-yellow-500`}
                      />
                    )}
                  </div>
                </th>
                <th className="p-4 text-right text-yellow-500 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscriptions.map((subscription) => (
                <tr
                  key={subscription._id}
                  className="border-t border-blue-400/10 hover:bg-blue-800/30 transition-colors"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedSubscriptions.includes(subscription._id)}
                      onChange={() => toggleSelect(subscription._id)}
                      className="form-checkbox h-5 w-5 text-yellow-500 rounded border-yellow-500/30 bg-blue-800/50"
                    />
                  </td>
                  <td className="p-4 text-blue-100">{subscription.email}</td>
                  <td className="p-4 text-blue-300">
                    {new Date(subscription.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleDelete([subscription._id])}
                      className="text-red-300 hover:text-red-200 transition-colors"
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredSubscriptions.length === 0 && !loading && (
            <div className="text-center py-8 text-blue-300">
              No subscriptions found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailSignup;
