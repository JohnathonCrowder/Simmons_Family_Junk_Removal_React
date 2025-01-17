import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await axios.post(`${BASE_URL}/api/newsletter/subscribe`, { email });
      setStatus({
        type: "success",
        message: "Successfully subscribed to newsletter!",
      });
      setEmail("");
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to subscribe",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Junk Removal Tips
        </h2>
        <p className="text-blue-100 mb-8">
          Subscribe to our newsletter for expert advice on decluttering,
          eco-friendly disposal, and more!
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
        {status.type && (
          <div
            className={`mt-4 p-3 rounded ${
              status.type === "success"
                ? "bg-green-500/20 text-green-200"
                : "bg-red-500/20 text-red-200"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
