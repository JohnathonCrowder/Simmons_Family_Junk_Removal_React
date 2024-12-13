import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary"
    >
      <div className="absolute -top-8 left-6 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
        {number}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <i className={`fas fa-${icon} text-4xl text-primary`}></i>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
