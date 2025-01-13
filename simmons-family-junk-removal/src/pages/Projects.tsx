import React from "react";
import PageHero from "../components/PageHero";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import CTASection from "../components/CTASection";

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <PageHero
        title={
          <>
            Our Transformation <br />
            <span className="text-blue-300">Gallery</span>
          </>
        }
        subtitle="See the difference we make with our before and after transformations"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      <ProjectsGrid />
      <CTASection
        title="Ready to Transform Your Space?"
        description="Let us help you clear the clutter and create a clean, organized environment."
      />
    </div>
  );
};

export default Projects;
