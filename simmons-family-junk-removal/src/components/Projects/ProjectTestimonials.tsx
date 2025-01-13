import React from "react";
import { motion } from "framer-motion";

const ProjectTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "They transformed my garage from a complete disaster to an organized space I can actually use. Incredible work!",
      author: "Sarah Johnson",
      location: "Springfield",
      rating: 5,
      image: "/images/testimonials/sarah.jpg",
      project: "Garage Cleanout",
    },
    {
      quote:
        "Professional, efficient, and so careful with everything. They made what seemed impossible totally manageable.",
      author: "Mike Thompson",
      location: "Nixa",
      rating: 5,
      image: "/images/testimonials/mike.jpg",
      project: "Estate Cleanout",
    },
    {
      quote:
        "Best decision I made was calling them. They handled everything with care and respect.",
      author: "Lisa Anderson",
      location: "Republic",
      rating: 5,
      image: "/images/testimonials/lisa.jpg",
      project: "Home Cleanout",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real customers about their transformation
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.location}
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <i key={i} className="fas fa-star text-sm" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm text-blue-600 font-semibold">
                Project: {testimonial.project}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTestimonials;
