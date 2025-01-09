import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
  icon: string;
  highlight: string;
  items?: string[];
  steps?: string[];
  pricingTiers?: string[];
};

type FAQCategories = {
  [key: string]: FAQ[];
};

const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: "general", label: "General", icon: "info-circle" },
    { id: "services", label: "Services", icon: "truck" },
    { id: "pricing", label: "Pricing", icon: "dollar-sign" },
    { id: "process", label: "Process", icon: "clipboard-list" },
  ];

  const faqs: FAQCategories = {
    general: [
      {
        question: "How quickly can you provide service?",
        answer:
          "We pride ourselves on rapid response times! In most cases, we offer same-day or next-day service. Our scheduling is flexible to accommodate both urgent needs and planned cleanouts.",
        icon: "clock",
        highlight: "Same-day service available!",
      },
      {
        question: "What areas do you service?",
        answer:
          "We serve Springfield and surrounding communities within a 50-mile radius. This includes Nixa, Ozark, Republic, Bolivar, and more.",
        icon: "map-marker-alt",
        highlight: "50-mile service radius",
      },
    ],
    services: [
      {
        question: "What items do you accept?",
        answer:
          "We handle most non-hazardous items including furniture, appliances, electronics, yard waste, and construction debris. For specialty items or unique situations, just ask!",
        icon: "box",
        highlight: "Most items accepted",
        items: [
          "Furniture & Appliances",
          "Construction Debris",
          "Yard Waste",
          "Electronics",
          "Office Equipment",
          "General Junk",
        ],
      },
      {
        question: "Are there any items you don't accept?",
        answer:
          "For safety and environmental reasons, we cannot accept hazardous materials such as paint, chemicals, batteries, or asbestos.",
        icon: "exclamation-triangle",
        highlight: "Safety first",
      },
    ],
    pricing: [
      {
        question: "How do you determine pricing?",
        answer:
          "Our pricing is straightforward and based on the volume your items occupy in our truck. We provide free, upfront estimates with no hidden fees or surprises.",
        icon: "calculator",
        highlight: "Transparent pricing",
        pricingTiers: [
          "1/8 Truck: Perfect for small cleanouts",
          "1/4 Truck: Ideal for single room",
          "1/2 Truck: Great for multiple rooms",
          "Full Truck: Complete cleanouts",
        ],
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Absolutely! We provide free, no-obligation estimates for all jobs. We can give quick quotes over the phone for standard items, or schedule an in-person assessment for larger projects.",
        icon: "hand-holding-usd",
        highlight: "Free estimates",
      },
    ],
    process: [
      {
        question: "What's your junk removal process?",
        answer:
          "Our process is simple and efficient. First, we provide a free estimate. Once approved, our professional team arrives on schedule, carefully removes your items, cleans the area, and ensures proper disposal or recycling.",
        icon: "tasks",
        highlight: "Simple 4-step process",
        steps: [
          "Schedule & Estimate",
          "Professional Removal",
          "Clean Up",
          "Proper Disposal",
        ],
      },
      {
        question: "How do you handle recycling?",
        answer:
          "Environmental responsibility is a core value. We sort all items and ensure maximum recycling and donation of suitable materials. Our goal is to minimize landfill impact.",
        icon: "recycle",
        highlight: "Eco-friendly disposal",
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Have Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our junk removal
            services, process, and pricing
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow"
                }`}
              >
                <i className={`fas fa-${category.icon} mr-2`} />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {faqs[selectedCategory].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left"
                  >
                    <div className="p-6 flex items-start justify-between">
                      <div className="flex items-start pr-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                          <i
                            className={`fas fa-${faq.icon} text-blue-600 text-xl`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {faq.question}
                          </h3>
                          {faq.highlight && (
                            <span className="inline-block mt-1 text-sm font-medium text-blue-600">
                              {faq.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <i className="fas fa-chevron-down text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 bg-gray-50">
                          <p className="text-gray-600 mb-4">{faq.answer}</p>

                          {/* Conditional Lists */}
                          {faq.items && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                What we accept:
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {faq.items.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center text-gray-600"
                                  >
                                    <i className="fas fa-check text-green-500 mr-2" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {faq.steps && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Our Process:
                              </h4>
                              <div className="flex flex-wrap gap-4">
                                {faq.steps.map((step, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center bg-white px-4 py-2 rounded-lg"
                                  >
                                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mr-2">
                                      {i + 1}
                                    </span>
                                    {step}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {faq.pricingTiers && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Pricing Tiers:
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {faq.pricingTiers.map((tier, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center bg-white px-4 py-2 rounded-lg"
                                  >
                                    <i className="fas fa-truck text-blue-600 mr-2" />
                                    {tier}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-blue-100 mb-8">
                Our team is here to help! Contact us directly for personalized
                assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <i className="fas fa-phone mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:info@example.com"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
