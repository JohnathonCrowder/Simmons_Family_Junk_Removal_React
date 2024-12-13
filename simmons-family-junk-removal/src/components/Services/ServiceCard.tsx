import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
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
  image,
  title,
  description,
  features,
  reverse = false,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const orderClass = reverse ? "md:order-2" : "";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-xl"
    >
      <div className={`w-full md:w-1/2 ${orderClass}`}>
        <img
          src={`/images/${image}`}
          alt={title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <i className="fas fa-check text-primary mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300"
        >
          Get a Quote
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
