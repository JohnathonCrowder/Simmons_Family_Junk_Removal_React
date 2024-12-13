import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What items can you remove?",
      answer:
        "We can remove almost anything non-hazardous, including furniture, appliances, electronics, yard waste, and construction debris. However, we cannot accept items like paint, chemicals, or asbestos-containing materials.",
    },
    {
      question: "How do you calculate the price?",
      answer:
        "Our pricing is based on the volume of junk to be removed, which is measured by how much space it takes up in our truck. We offer free, no-obligation quotes before starting any work.",
    },
    {
      question: "Do you recycle?",
      answer:
        "Absolutely! We're committed to eco-friendly practices and recycle or donate as much as possible. We sort through the items we collect and ensure they're disposed of responsibly.",
    },
    {
      question: "How quickly can you provide service?",
      answer:
        "We offer same-day and next-day services in most areas. Our scheduling is flexible to meet your needs, and we always aim to provide the fastest possible service.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Got questions? We've got answers.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary"
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
