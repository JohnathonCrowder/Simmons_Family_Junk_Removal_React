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

const AchievementsSection: React.FC = () => {
  const achievements = [
    { number: "15K+", label: "Satisfied Customers" },
    { number: "2.5M+", label: "Pounds of Junk Removed" },
    { number: "75%", label: "Recycling Rate" },
    { number: "1000+", label: "Local Jobs Created" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                {achievement.number}
              </div>
              <div>{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
