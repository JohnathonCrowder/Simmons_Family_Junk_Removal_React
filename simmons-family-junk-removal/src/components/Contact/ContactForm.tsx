import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

// A quick Tailwind-friendly "gold" could be a custom hex (#FFD700).
// We'll use Tailwind's built-in amber or yellow classes for convenience, too.
// Also changed the button gradient to from-blue-600 to-amber-500

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: "" });

    try {
      await axios.post(`${BASE_URL}/api/contact`, formState);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      // Reset form
      setFormState({
        name: "",
        email: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-xl p-8 bg-white border border-blue-200 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="topic"
            className="block font-medium text-gray-700 mb-1"
          >
            What's on your mind?
          </label>
          <select
            id="topic"
            name="topic"
            value={formState.topic}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Select a topic</option>
            <option value="tech-chat">Tech Discussion</option>
            <option value="collaboration">Collaboration Idea</option>
            <option value="question">Technical Question</option>
            <option value="other">Something Else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
            placeholder="I'd love to hear what you have in mind..."
          ></textarea>
        </div>

        {status.type && (
          <div
            className={`p-4 rounded-lg ${
              status.type === "success"
                ? "bg-emerald-50 border border-emerald-300 text-emerald-700"
                : "bg-red-50 border border-red-300 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className={`w-full rounded-lg px-6 py-3 font-medium 
            bg-gradient-to-r from-blue-600 to-amber-500 text-white 
            hover:from-blue-700 hover:to-amber-600 transition-all duration-300
            ${
              sending
                ? "opacity-75 cursor-not-allowed"
                : "shadow-md hover:shadow-lg"
            } relative overflow-hidden`}
        >
          {sending ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373
                       0 0 5.373 0 12h4zm2 5.291A7.962
                       7.962 0 014 12H0c0 3.042 1.135
                       5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Start Conversation"
          )}
        </button>

        <div className="text-sm text-gray-500 text-center mt-4">
          <p>
            Your message will be handled with care and you'll receive a response
            within 24-48 hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
