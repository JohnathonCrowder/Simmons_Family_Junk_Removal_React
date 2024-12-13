import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
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

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
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
      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="text-primary text-4xl mb-4">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
