import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../utils/config";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  _id: string;
  name: string;
  review: string;
  city: string;
  reviewSite: string;
}

const ReviewManagement: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    city: "",
    reviewSite: "google",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(`${BASE_URL}/api/reviews`, {
        headers: { "x-auth-token": token },
      });
      setReviews(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch reviews");
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(`${BASE_URL}/api/reviews`, newReview, {
        headers: { "x-auth-token": token },
      });
      setNewReview({ name: "", review: "", city: "", reviewSite: "google" });
      setShowForm(false);
      fetchReviews();
    } catch (err) {
      setError("Failed to add review");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`${BASE_URL}/api/reviews/${id}`, {
          headers: { "x-auth-token": token },
        });
        fetchReviews();
      } catch (err) {
        setError("Failed to delete review");
      }
    }
  };

  const getStats = () => {
    return {
      total: reviews.length,
      platforms: {
        google: reviews.filter((r) => r.reviewSite === "google").length,
        yelp: reviews.filter((r) => r.reviewSite === "yelp").length,
        facebook: reviews.filter((r) => r.reviewSite === "facebook").length,
      },
      cities: Array.from(new Set(reviews.map((r) => r.city))),
      averageWords: Math.round(
        reviews.reduce((acc, rev) => acc + rev.review.split(" ").length, 0) /
          (reviews.length || 1)
      ),
    };
  };

  const getReviewSiteIcon = (site: string) => {
    switch (site) {
      case "google":
        return "fa-google";
      case "yelp":
        return "fa-yelp";
      case "facebook":
        return "fa-facebook";
      default:
        return "fa-star";
    }
  };

  const getReviewSiteColor = (site: string) => {
    switch (site) {
      case "google":
        return "text-green-500";
      case "yelp":
        return "text-red-500";
      case "facebook":
        return "text-blue-500";
      default:
        return "text-yellow-500";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Reviews Card */}
        <div className="bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-yellow-500 text-sm font-medium mb-1">
                Total Reviews
              </h3>
              <div className="text-3xl font-bold text-white">
                {getStats().total}
              </div>
            </div>
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <i className="fas fa-star text-yellow-500 text-2xl" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-800/50">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-200">Average Length:</span>
              <span className="text-white font-medium">
                {getStats().averageWords} words
              </span>
            </div>
          </div>
        </div>

        {/* Platform Distribution Card */}
        <div className="bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-yellow-500 text-sm font-medium">
              Platform Distribution
            </h3>
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <i className="fas fa-chart-pie text-yellow-500 text-2xl" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="fab fa-google text-blue-300 w-8" />
                <span className="text-blue-100">Google</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-medium">
                  {getStats().platforms.google}
                </span>
                <span className="text-blue-300 text-sm ml-2">
                  (
                  {Math.round(
                    (getStats().platforms.google / getStats().total) * 100
                  ) || 0}
                  %)
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="fab fa-yelp text-blue-300 w-8" />
                <span className="text-blue-100">Yelp</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-medium">
                  {getStats().platforms.yelp}
                </span>
                <span className="text-blue-300 text-sm ml-2">
                  (
                  {Math.round(
                    (getStats().platforms.yelp / getStats().total) * 100
                  ) || 0}
                  %)
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="fab fa-facebook text-blue-300 w-8" />
                <span className="text-blue-100">Facebook</span>
              </div>
              <div className="flex items-center">
                <span className="text-white font-medium">
                  {getStats().platforms.facebook}
                </span>
                <span className="text-blue-300 text-sm ml-2">
                  (
                  {Math.round(
                    (getStats().platforms.facebook / getStats().total) * 100
                  ) || 0}
                  %)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Coverage Card */}
        <div className="bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-yellow-500 text-sm font-medium">
                Geographic Coverage
              </h3>
              <p className="text-3xl font-bold text-white mt-1">
                {getStats().cities.length}
              </p>
              <p className="text-blue-300 text-sm mt-1">Cities covered</p>
            </div>
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <i className="fas fa-map-marker-alt text-yellow-500 text-2xl" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {getStats()
                .cities.slice(0, 3)
                .map((city, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-800/50 text-blue-100 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              {getStats().cities.length > 3 && (
                <span className="px-3 py-1 bg-blue-800/50 text-blue-100 rounded-full text-sm">
                  +{getStats().cities.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Review Button and Form */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-500">Customer Reviews</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-yellow-500 text-blue-900 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
        >
          <i className={`fas fa-${showForm ? "minus" : "plus"}`} />
          {showForm ? "Cancel" : "Add Review"}
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-yellow-500 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={newReview.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-yellow-500 mb-2">Review</label>
              <textarea
                name="review"
                value={newReview.review}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <label className="block text-yellow-500 mb-2">Review Site</label>
              <select
                name="reviewSite"
                value={newReview.reviewSite}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-blue-800/50 text-white rounded-lg border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
                required
              >
                <option value="google">Google</option>
                <option value="yelp">Yelp</option>
                <option value="facebook">Facebook</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-blue-900 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Submit Review
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <motion.div
            key={review._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-900/40 backdrop-blur-md rounded-xl border border-yellow-500/30 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {review.name}
                  </h3>
                  <p className="text-blue-300 flex items-center gap-2">
                    <i className="fas fa-map-marker-alt" />
                    {review.city}
                  </p>
                </div>
                <div
                  className={`text-2xl ${getReviewSiteColor(
                    review.reviewSite
                  )}`}
                >
                  <i
                    className={`fab ${getReviewSiteIcon(review.reviewSite)}`}
                  />
                </div>
              </div>
              <p className="text-blue-100">{review.review}</p>
            </div>
            <div className="bg-blue-900/60 px-6 py-4 border-t border-yellow-500/30 flex justify-end items-center">
              <button
                onClick={() => handleDelete(review._id)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 bg-blue-900/40 rounded-xl border border-yellow-500/30">
          <i className="fas fa-comments text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No reviews yet</h3>
          <p className="text-blue-300">Start by adding your first review</p>
        </div>
      )}
    </div>
  );
};

export default ReviewManagement;
