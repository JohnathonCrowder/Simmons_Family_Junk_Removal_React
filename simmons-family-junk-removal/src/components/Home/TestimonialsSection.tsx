// File: TestimonialsSection.tsx
// Path: simmons-family-junk-removal/src/components/Home/TestimonialsSection.tsx

import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "Simmons Family Junk Removal went above and beyond! They turned my cluttered garage into an organized space in just a couple of hours. Professional, efficient, and friendly!",
      author: "Sarah J.",
      location: "Springfield, MO",
      platform: "Google",
      rating: 5,
    },
    {
      content:
        "Best decision I made was calling Simmons Family. They handled my estate cleanout with care and respect. Fair pricing and excellent communication throughout.",
      author: "Michael T.",
      location: "Nixa, MO",
      platform: "Yelp",
      rating: 5,
    },
    {
      content:
        "I’ve used Simmons Family multiple times for my rental properties. Always on time, professional, and they leave the space spotless. Highly recommend!",
      author: "Emily R.",
      location: "Ozark, MO",
      platform: "Facebook",
      rating: 5,
    },
  ];

  const reviewLinks = [
    {
      name: "Google",
      url: "https://www.google.com/maps/place/Simmons+Family+Junk+Removal",
      icon: "google",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com/biz/simmons-family-junk-removal-springfield",
      icon: "yelp",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/SimmonsFamily04/reviews",
      icon: "facebook-f",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
      aria-labelledby="testimonials-section-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="testimonials-section-heading"
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Our Customers <span className="text-blue-600">Love Our Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don’t just take our word for it—see what our happy customers have to
            say about Simmons Family Junk Removal!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-t-4 border-yellow-500 rounded-xl p-8 shadow-lg hover:shadow-[0_0_10px_2px_rgba(255,215,0,0.5)] transition-shadow duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i
                    key={i}
                    className="fas fa-star text-yellow-500 text-lg mr-1"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i
                    className="fas fa-user text-blue-600 text-2xl"
                    aria-hidden="true"
                  ></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Platform Badge */}
              <div
                className={`mt-4 inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                  testimonial.platform === "Google"
                    ? "bg-red-50 text-red-600"
                    : testimonial.platform === "Yelp"
                    ? "bg-pink-50 text-pink-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {testimonial.platform}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            Want to See More Reviews?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit these platforms to read more testimonials and see why Simmons
            Family Junk Removal is trusted across Springfield and beyond!
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {reviewLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <i
                  className={`fab fa-${link.icon} text-2xl text-blue-600 mr-3`}
                  aria-hidden="true"
                ></i>
                <span className="font-bold">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
