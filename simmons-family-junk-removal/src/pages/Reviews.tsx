import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import { BASE_URL } from "../utils/config";

interface Review {
  _id: string;
  name: string;
  review: string;
  city: string;
  reviewSite: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [visibleReviews, setVisibleReviews] = useState(9);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/reviews`);
      setReviews(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load reviews");
      setLoading(false);
    }
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
        return "text-[#4285F4]";
      case "yelp":
        return "text-[#FF1A1A]";
      case "facebook":
        return "text-[#1877F2]";
      default:
        return "text-yellow-500";
    }
  };

  const filteredReviews = reviews
    .filter((review) => filter === "all" || review.reviewSite === filter)
    .slice(0, visibleReviews);

  const reviewSites = ["all", ...new Set(reviews.map((r) => r.reviewSite))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <PageHero
        title={
          <span>
            Our Customer Reviews
            <span className="block text-2xl mt-2 text-yellow-400">
              See what our clients have to say about us
            </span>
          </span>
        }
        subtitle="We take pride in delivering exceptional service to our community in Springfield, MO"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Simple Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {reviewSites.map((site) => (
            <button
              key={site}
              onClick={() => setFilter(site)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === site
                  ? "bg-yellow-500 text-blue-900 shadow-lg shadow-yellow-500/20"
                  : "bg-white/90 text-blue-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20"
              }`}
            >
              {site === "all" ? (
                "All Reviews"
              ) : (
                <>
                  <i className={`fab ${getReviewSiteIcon(site)} mr-2`} />
                  {site.charAt(0).toUpperCase() + site.slice(1)}
                </>
              )}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        <i className="fas fa-map-marker-alt mr-2" />
                        {review.city}
                      </p>
                    </div>
                    <div
                      className={`${getReviewSiteColor(
                        review.reviewSite
                      )} text-xl`}
                    >
                      <i
                        className={`fab ${getReviewSiteIcon(
                          review.reviewSite
                        )}`}
                      />
                    </div>
                  </div>
                  <div className="text-yellow-500 mb-3">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{review.review}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleReviews < reviews.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleReviews((prev) => prev + 9)}
              className="px-8 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/20"
            >
              Show More Reviews
              <i className="fas fa-chevron-down ml-2" />
            </button>
          </div>
        )}

        {reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-xl">No reviews yet.</p>
          </div>
        )}

        {/* Simple Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/20"
          >
            Get Your Free Quote
            <i className="fas fa-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
