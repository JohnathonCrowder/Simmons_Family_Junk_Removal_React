import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection: React.FC = () => {
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
        "Absolutely! We're committed to environmentally responsible disposal. We sort through all collected items and ensure that as much as possible is recycled or donated. Only items that can't be recycled or reused are taken to licensed disposal facilities.",
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our junk removal services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="mb-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <i className="fas fa-chevron-down text-blue-600" />
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-blue-50 rounded-b-xl border-t border-blue-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Reach out to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <i className="fas fa-phone mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
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

export default FAQSection;
