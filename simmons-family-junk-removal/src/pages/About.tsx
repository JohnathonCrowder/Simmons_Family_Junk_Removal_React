import React, { lazy, Suspense } from "react";
import PageHero from "../components/PageHero";

// Lazy load all section components
const AboutSection = lazy(() => import("../components/About/AboutSection"));
const ValuesSection = lazy(() => import("../components/About/ValuesSection"));
const TeamSection = lazy(() => import("../components/About/TeamSection"));
const AchievementsSection = lazy(
  () => import("../components/About/AchievementsSection")
);
const CTASection = lazy(() => import("../components/CTASection"));

// Loading fallback component
const SectionSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg h-64" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
);

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

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ValuesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CTASection
          title="Ready to Experience the Simmons Difference?"
          description="Let our family take care of your junk removal needs. Contact us today for a free quote!"
        />
      </Suspense>
    </div>
  );
};

export default About;
