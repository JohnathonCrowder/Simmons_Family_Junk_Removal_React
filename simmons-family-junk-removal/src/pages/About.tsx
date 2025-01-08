import React from "react";
import AboutSection from "../components/About/AboutSection";
import ValuesSection from "../components/About/ValuesSection";
import TeamSection from "../components/About/TeamSection";
import AchievementsSection from "../components/About/AchievementsSection";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <PageHero
        backgroundImage="/images/about-hero.jpg"
        title={
          <>
            About Simmons Family <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              Junk Removal
            </span>
          </>
        }
        subtitle="Your trusted partner in creating clean, clutter-free spaces since 2005"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <AchievementsSection />
      <CTASection
        title="Ready to Experience the Simmons Difference?"
        description="Let our family take care of your junk removal needs. Contact us today for a free quote!"
      />
    </div>
  );
};

export default About;
