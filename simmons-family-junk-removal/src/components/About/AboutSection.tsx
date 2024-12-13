import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/images/about-us.jpg"
              alt="Simmons Family Junk Removal Team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Simmons Family Junk Removal was founded in 2005 by John Simmons, a
              Springfield native with a passion for helping people and a vision
              for a cleaner community. What started as a one-man operation with
              a single truck has grown into a full-service junk removal company,
              serving residential and commercial clients throughout Springfield
              and surrounding areas.
            </p>
            <p className="text-gray-600">
              Our commitment to exceptional service, environmental
              responsibility, and community involvement has been the cornerstone
              of our success. Today, we're proud to be Springfield's go-to
              solution for all junk removal needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
