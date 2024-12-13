import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  content: string;
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

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  title,
  content,
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
      className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary"
    >
      <div className="flex items-center mb-6">
        <img
          src={`/images/${image}`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <blockquote className="text-gray-700">"{content}"</blockquote>
      <div className="flex text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
