import React from "react";
import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Book Online",
      description:
        "Choose your preferred date and time. We offer flexible scheduling to fit your needs.",
      icon: "calendar-check",
    },
    {
      number: "2",
      title: "We Arrive",
      description:
        "Our professional, uniformed team arrives on time with the right equipment.",
      icon: "truck",
    },
    {
      number: "3",
      title: "We Remove",
      description:
        "We handle all the heavy lifting, sorting, and loading. You don't lift a finger.",
      icon: "box-open",
    },
    {
      number: "4",
      title: "You Relax",
      description:
        "Enjoy your newly cleared space while we ensure responsible disposal of your items.",
      icon: "smile",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Four simple steps to a clutter-free space
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
