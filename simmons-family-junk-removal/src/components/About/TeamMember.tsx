import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="text-center"
    >
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  );
};

export default TeamMember;
