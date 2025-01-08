import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "The team was professional and efficient. They cleared out my garage in no time and even swept up afterwards. Really appreciated their attention to detail.",
      author: "Sarah J.",
      location: "Springfield",
      service: "Garage Cleanout",
      date: "Last month",
    },
    {
      content:
        "I manage several properties and have used Simmons for all my cleanouts. They're always reliable, on time, and their pricing is fair. Makes my job much easier.",
      author: "Michael C.",
      location: "North Springfield",
      service: "Property Cleanout",
      date: "2 months ago",
    },
    {
      content:
        "They helped clear out my parents' home, and were so respectful and understanding during a difficult time. They took care of everything without any hassle.",
      author: "Emily R.",
      location: "East Springfield",
      service: "Estate Cleanout",
      date: "3 months ago",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read about real experiences from our customers in Springfield
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
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                <i className="fas fa-quote-left text-xl opacity-50" />
              </div>

              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{testimonial.service}</span>
                <span>{testimonial.date}</span>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Verified Customer
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Review Platform Mentions */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Find more customer reviews on:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {["Google", "Yelp", "HomeAdvisor"].map((platform, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <i
                  className={`fab fa-${platform.toLowerCase()} text-xl mr-2`}
                />
                <span>{platform}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
