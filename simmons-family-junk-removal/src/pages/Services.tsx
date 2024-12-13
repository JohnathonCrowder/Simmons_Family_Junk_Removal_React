import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
  index: number;
}

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

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Junk Removal",
      description: "Professional removal of household items and debris.",
    },
    {
      icon: "building",
      title: "Commercial Services",
      description: "Efficient cleanouts for offices and construction sites.",
    },
    {
      icon: "couch",
      title: "Furniture Removal",
      description: "Safe disposal of old or unwanted furniture pieces.",
    },
    {
      icon: "truck-loading",
      title: "Appliance Disposal",
      description: "Proper handling and recycling of large appliances.",
    },
    {
      icon: "dumpster",
      title: "Construction Debris",
      description: "Quick removal of renovation and construction waste.",
    },
    {
      icon: "recycle",
      title: "Eco-Friendly Disposal",
      description: "Responsible recycling and donation of usable items.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="text-primary text-4xl mb-4">
            <i className={`fas fa-${service.icon}`}></i>
          </div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      title: "Small Load",
      price: "$99+",
      description: "Perfect for a few items",
      features: [
        "Up to 1/8 truck",
        "Ideal for 1-2 pieces of furniture",
        "Quick removal service",
        "Eco-friendly disposal",
      ],
    },
    {
      title: "Medium Load",
      price: "$199+",
      description: "Great for multiple room cleanouts",
      features: [
        "Up to 1/4 truck",
        "Multiple pieces of furniture",
        "Appliance removal included",
        "Same-day service available",
      ],
    },
    {
      title: "Large Load",
      price: "$299+",
      description: "Full home or office cleanouts",
      features: [
        "Up to 1/2 truck",
        "Ideal for estate cleanouts",
        "Construction debris removal",
        "Priority scheduling",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Our Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Transparent pricing for all your junk removal needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What items can you remove?",
      answer:
        "We can remove almost anything non-hazardous, including furniture, appliances, electronics, yard waste, and construction debris. However, we cannot accept items like paint, chemicals, or asbestos-containing materials.",
    },
    {
      question: "How do you calculate the price?",
      answer:
        "Our pricing is based on the volume of junk to be removed, which is measured by how much space it takes up in our truck. We offer free, no-obligation quotes before starting any work.",
    },
    {
      question: "Do you recycle?",
      answer:
        "Absolutely! We're committed to eco-friendly practices and recycle or donate as much as possible. We sort through the items we collect and ensure they're disposed of responsibly.",
    },
    {
      question: "How quickly can you provide service?",
      answer:
        "We offer same-day and next-day services in most areas. Our scheduling is flexible to meet your needs, and we always aim to provide the fastest possible service.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Got questions? We've got answers.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary"
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

const Services: React.FC = () => {
  const detailedServices = [
    {
      image: "residential.jpg",
      title: "Residential Junk Removal",
      description:
        "We help homeowners clear out unwanted items from houses, apartments, garages, and yards. Our team can handle everything from old furniture and appliances to general household clutter.",
      features: [
        "Full house cleanouts",
        "Garage and basement decluttering",
        "Yard waste removal",
        "Appliance and furniture disposal",
        "Same-day service available",
      ],
    },
    {
      image: "commercial.jpg",
      title: "Commercial Junk Removal",
      description:
        "Our commercial services are designed to meet the needs of businesses, contractors, and property managers. We offer efficient removal solutions that minimize disruption to your operations.",
      features: [
        "Office furniture removal",
        "Construction debris cleanup",
        "Equipment disposal",
        "Retail store cleanouts",
        "Regular scheduled pickups",
      ],
    },
    {
      image: "bulk-item.jpg",
      title: "Bulk Item Removal",
      description:
        "Need to get rid of large, heavy items? We specialize in removing and disposing of bulky items that are difficult to handle on your own, ensuring a hassle-free experience.",
      features: [
        "Furniture and appliance removal",
        "Hot tub and piano disposal",
        "Exercise equipment removal",
        "Safe handling of heavy items",
        "Donation of usable items",
      ],
    },
    {
      image: "estate-cleanout.jpg",
      title: "Estate Cleanouts",
      description:
        "We offer compassionate and efficient estate cleanout services to help families during difficult times. Our team will handle the removal of unwanted items with care and respect.",
      features: [
        "Full property cleanouts",
        "Sorting and organizing",
        "Donation coordination",
        "Sensitive document handling",
        "Flexible scheduling",
      ],
    },
  ];

  return (
    <div className="services-page">
      <HeroSection
        backgroundImage="/images/services-hero.jpg"
        title={
          <>
            Our Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Junk Removal Services
            </span>
          </>
        }
        subtitle="Comprehensive solutions for all your junk removal needs"
        primaryButtonText="Get a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:+1234567890"
      />

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-extrabold text-center mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Tailored junk removal solutions for every situation
            </p>
          </motion.div>
          <ServicesGrid />
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {detailedServices.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Clear Out the Clutter?"
        description="Contact us today for a free, no-obligation quote and experience our top-notch service."
      />
    </div>
  );
};

export default Services;
