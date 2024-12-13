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

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: "map-marker-alt",
      label: "Address",
      value: "123 Main St, Springfield, MO 65801",
    },
    { icon: "phone", label: "Phone", value: "(123) 456-7890" },
    { icon: "envelope", label: "Email", value: "info@simmonsjunkremoval.com" },
    {
      icon: "clock",
      label: "Business Hours",
      value: (
        <>
          Mon-Fri: 8am-6pm
          <br />
          Sat: 9am-4pm
          <br />
          Sun: Closed
        </>
      ),
    },
  ];

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
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      {contactDetails.map((detail, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-start">
            <i className={`fas fa-${detail.icon} text-primary mr-4 mt-1`}></i>
            <div>
              <h3 className="font-semibold">{detail.label}</h3>
              <p className="text-gray-600">{detail.value}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
            (social, index) => (
              <a
                key={index}
                href="#"
                className="text-primary hover:text-primary-dark transition duration-300"
                aria-label={social.split("-")[0]}
              >
                <i className={`fab fa-${social} text-2xl`}></i>
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
