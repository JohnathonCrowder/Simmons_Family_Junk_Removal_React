import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/CTASection";

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection
        title={
          <>
            Professional Junk Removal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Made Simple
            </span>
          </>
        }
        subtitle="Efficient, eco-friendly junk removal services for your home and business."
        backgroundImage="/images/hero-bg.jpg"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonLink="tel:+1234567890"
      />

      <ServicesSection />

      <FeaturedProjects />

      <ProcessSection />

      <TestimonialsSection />

      <CTASection
        title="Ready to Reclaim Your Space?"
        description="Get started with a free, no-obligation quote today and experience the difference professional junk removal can make."
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (123) 456-7890"
        secondaryButtonLink="tel:+1234567890"
      />
    </div>
  );
};

export default Home;
