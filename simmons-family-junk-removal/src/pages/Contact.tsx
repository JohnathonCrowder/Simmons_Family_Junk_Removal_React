import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.form
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
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

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you provide a quote?",
      answer:
        "We offer same-day quotes in most cases. You can get an estimate over the phone or schedule a free on-site assessment for a more accurate quote.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We serve Springfield and surrounding areas within a 50-mile radius. Please check our service area map or contact us to confirm if we cover your location.",
    },
    {
      question: "Do you offer emergency junk removal services?",
      answer:
        "Yes, we provide emergency and same-day services for urgent junk removal needs. Additional fees may apply for after-hours service.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <HeroSection
        backgroundImage="/images/contact-hero.jpg"
        title={
          <>
            Get in Touch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              We're Here to Help
            </span>
          </>
        }
        subtitle="Have questions? Need a quote? We'd love to hear from you."
        primaryButtonText="Call Us Now"
        primaryButtonLink="tel:+1234567890"
        secondaryButtonText="Get a Quote"
        secondaryButtonLink="#contact-form"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <MapSection />

      <FAQSection />
    </div>
  );
};

export default Contact;
