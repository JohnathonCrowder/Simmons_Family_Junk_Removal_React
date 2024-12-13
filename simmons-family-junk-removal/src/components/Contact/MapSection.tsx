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

const MapSection: React.FC = () => {
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
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203682.5355359285!2d-93.47017441675914!3d37.16452082694876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f745c8983f%3A0x6bfd6cb31e690da0!2sSpringfield%2C%20MO%2C%20USA!5e0!3m2!1sen!2s!4v1620764962985!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;
