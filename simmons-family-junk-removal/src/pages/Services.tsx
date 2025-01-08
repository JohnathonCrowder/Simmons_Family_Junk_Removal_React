import React from "react";
import PageHero from "../components/PageHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import ServiceCard from "../components/Services/ServiceCard";
import PricingSection from "../components/Services/PricingSection";
import FAQSection from "../components/Services/FAQSection";
import CTASection from "../components/CTASection";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
    // Add other detailed services here
  ];

  return (
    <div className="services-page">
      <PageHero
        title={
          <>
            Our Professional <br />
            <span className="text-blue-300">Junk Removal Services</span>
          </>
        }
        subtitle="Comprehensive solutions for all your junk removal needs"
        primaryButtonText="Get a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:+1234567890"
      />

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

      <PricingSection />
      <FAQSection />

      <CTASection
        title="Ready to Clear Out the Clutter?"
        description="Contact us today for a free, no-obligation quote and experience our top-notch service."
      />
    </div>
  );
};

export default Services;
