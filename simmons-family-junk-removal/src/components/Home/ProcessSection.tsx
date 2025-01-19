// File: ProcessSection.tsx
// Path: simmons-family-junk-removal/src/components/Home/ProcessSection.tsx

import React from "react";
import { motion } from "framer-motion";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Appointment",
      description:
        "Reach out to Simmons Family Junk Removal online or by phone. We’ll provide a free, no-obligation quote and flexible scheduling to suit your needs.",
      icon: "calendar-check",
    },
    {
      number: "02",
      title: "We Arrive & Assess",
      description:
        "Our friendly team shows up on time in uniform, evaluates the job, and gives you an upfront, all-inclusive price. No surprises—just honest service.",
      icon: "clipboard-check",
    },
    {
      number: "03",
      title: "Quick & Clean Removal",
      description:
        "Sit back and relax while we carefully remove your items. We’ll leave your space spotless and handle all the heavy lifting for you.",
      icon: "trash-alt",
    },
    {
      number: "04",
      title: "Sustainable Solutions",
      description:
        "We recycle, donate, or responsibly dispose of your items to reduce waste and help our community thrive. A clutter-free space, the eco-friendly way.",
      icon: "seedling",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
      aria-labelledby="process-section-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-1/3 left-1/4"></div>
        <div className="absolute w-80 h-80 bg-blue-200/20 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="process-section-heading"
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            How We Make Junk Removal Easy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Simmons Family Junk Removal, we believe in a stress-free process
            that puts your needs first. Here's how we do it in four simple
            steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white p-8 rounded-xl shadow-lg 
                         border-t-4 border-yellow-500 
                         hover:shadow-[0_0_10px_2px_rgba(255,215,0,0.5)] 
                         transition-shadow duration-300 text-center"
            >
              {/* Icon in a Circle */}
              <div
                className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white 
                           flex items-center justify-center mb-4 shadow-sm"
                aria-hidden="true"
              >
                <i className={`fas fa-${step.icon} text-2xl`}></i>
              </div>

              {/* Step Number */}
              <span
                className="block text-3xl font-extrabold text-blue-500/80 mb-2"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA Section: Friendly and Simmons-Focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-blue-600 rounded-xl p-12 text-center text-white shadow-lg hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.6)] transition-shadow duration-300"
        >
          <h3 className="text-3xl font-bold mb-4">
            Simmons Family Junk Removal Is Here to Help
          </h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you’re clearing out your home, decluttering your business,
            or managing a big move, our family-owned team is ready to lend a
            hand. Reach out to get started!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold 
                       hover:bg-blue-100 transition-all duration-300 shadow-md"
          >
            Contact Us Today
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
