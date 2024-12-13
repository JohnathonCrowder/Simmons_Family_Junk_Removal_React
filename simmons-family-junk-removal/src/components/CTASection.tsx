import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Reclaim Your Space?",
  description = "Get started with a free, no-obligation quote today and experience the difference professional junk removal can make.",
  primaryButtonText = "Get Your Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call (123) 456-7890",
  secondaryButtonLink = "tel:+1234567890",
}) => (
  <section className="py-24 bg-gradient-to-r from-primary to-blue-500 text-white relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/images/cta-pattern.svg"
        alt=""
        className="w-full h-full object-cover opacity-10"
      />
    </div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="container mx-auto px-4 text-center relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to={primaryButtonLink}
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          {primaryButtonText}
        </Link>
        <a
          href={secondaryButtonLink}
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition duration-300"
        >
          {secondaryButtonText}
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
