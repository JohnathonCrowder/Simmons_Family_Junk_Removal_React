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
        title={
          <>
            About Simmons Family <br />
            <span className="text-blue-300">Junk Removal</span>
          </>
        }
        subtitle="Your trusted partner in creating clean, clutter-free spaces since 2005"
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
