import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: "testimonial-1.jpg",
      name: "John Smith",
      title: "Homeowner",
      content:
        "The team was incredibly professional and efficient. They turned my cluttered garage into a usable space in just a few hours. Highly recommend!",
    },
    {
      image: "testimonial-2.jpg",
      name: "Sarah Johnson",
      title: "Business Owner",
      content:
        "Outstanding service for our office cleanout. They were punctual, thorough, and left the space spotless. Will definitely use again!",
    },
    {
      image: "testimonial-3.jpg",
      name: "Michael Brown",
      title: "Property Manager",
      content:
        "I manage multiple properties and always call Simmons for cleanouts between tenants. Their service is unparalleled and pricing is fair.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
