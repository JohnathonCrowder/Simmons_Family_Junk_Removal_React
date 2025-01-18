import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RadicalFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of items do you accept?",
      answer:
        "We accept most non-hazardous items including furniture, appliances, electronics, yard waste, construction debris, and general household junk. However, we cannot take hazardous materials like paint, chemicals, asbestos, or certain electronics. If you're unsure about an item, just give us a call and we'll be happy to help.",
    },
    {
      question: "How do you determine the price?",
      answer:
        "Our pricing is based on the volume of space your items take up in our truck. We provide free, no-obligation estimates, and our prices include all labor, disposal fees, and cleanup. You'll always know the exact price before we begin any work.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes! We often have same-day availability. While we recommend booking in advance when possible, we understand that sometimes junk removal can't wait. Give us a call, and we'll do our best to accommodate your schedule.",
    },
    {
      question: "Are you eco-friendly? What happens to my junk?",
      answer:
        "Absolutely! We're committed to environmentally responsible disposal. We sort through all collected items and ensure that as much as possible is recycled or donated. Only items that can't be reused or recycled are taken to licensed disposal facilities.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Springfield and surrounding areas within a 50-mile radius. This includes [List specific nearby towns]. Not sure if you're in our service area? Give us a call, and we'll let you know.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed and insured. Our team is professionally trained, and we carry comprehensive insurance coverage to protect both our workers and your property during the junk removal process.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-blue-50 via-blue-100 to-white">
        <div className="absolute w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-blue-100/20 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Heading & Intro: Two-Column Layout */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16"
        >
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
              Questions & Answers
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about our junk removal services. Click any question for
              an expanded explanation.
            </p>
          </div>

          {/* Icon Instead of Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-question text-blue-700 text-5xl" />
            </div>
          </div>
        </motion.div>

        {/* FAQ Cards in a Masonry-Like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl border-2 border-yellow-500 p-6 shadow-lg transform hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-shadow duration-300"
            >
              {/* Question Title */}
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-blue-700 pr-6">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow-500"
                >
                  <i className="fas fa-chevron-down" />
                </motion.div>
              </div>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-yellow-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* "Still Have Questions?" Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: faqs.length * 0.1 }}
          className="mt-16 mx-auto max-w-2xl bg-blue-50 rounded-3xl border-2 border-yellow-500 p-8 shadow-lg hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-shadow duration-300 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Not seeing what you need? Our team is here to help. Reach out for
            more information!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-phone mr-2" />
              Call Us
            </a>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              <i className="fas fa-envelope mr-2" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RadicalFAQSection;
