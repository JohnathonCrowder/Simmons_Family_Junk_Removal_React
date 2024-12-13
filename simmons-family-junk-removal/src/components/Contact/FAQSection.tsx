import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you provide a quote?",
      answer:
        "We offer same-day quotes in most cases. You can get an estimate over the phone or schedule a free on-site assessment for a more accurate quote.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We serve Springfield and surrounding areas within a 50-mile radius. Please check our service area map or contact us to confirm if we cover your location.",
    },
    {
      question: "Do you offer emergency junk removal services?",
      answer:
        "Yes, we provide emergency and same-day services for urgent junk removal needs. Additional fees may apply for after-hours service.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
