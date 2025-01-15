import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section id="newsletter" className="mt-20">
      <div className="relative bg-cyber-darker border border-neon-purple/20 rounded-xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10"></div>
        <div className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest tech insights and
              tutorials.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-cyber-darker border border-neon-blue/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-neon-purple text-white rounded-lg hover:bg-neon-purple/80 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
