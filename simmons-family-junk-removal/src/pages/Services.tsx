import React from "react";
import PageHero from "../components/PageHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import PricingSection from "../components/Services/PricingSection";
import FAQSection from "../components/Services/FAQSection";
import CTASection from "../components/CTASection";

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <PageHero
        title={
          <>
            Our Professional <br />
            <span className="text-blue-300">Junk Removal Services</span>
          </>
        }
        subtitle="Comprehensive solutions for all your junk removal needs. Fast, reliable, and eco-friendly service guaranteed."
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Now"
        secondaryButtonLink="tel:+1234567890"
      />

      {/* What We Offer Section */}
      <ServicesGrid />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <CTASection
        title="Ready to Clear the Clutter?"
        description="Get started with a free, no-obligation quote today and experience the difference professional junk removal can make."
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />
    </div>
  );
};

export default Services;
