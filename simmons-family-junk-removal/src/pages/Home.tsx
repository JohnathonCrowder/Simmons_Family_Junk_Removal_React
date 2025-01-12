import React, { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";

// Lazy load components
const ServicesSection = lazy(
  () => import("../components/Home/ServicesSection")
);
const FeaturedProjects = lazy(
  () => import("../components/Home/FeaturedProjects")
);
const ProcessSection = lazy(() => import("../components/Home/ProcessSection"));
const TestimonialsSection = lazy(
  () => import("../components/Home/TestimonialsSection")
);
const CTASection = lazy(() => import("../components/CTASection"));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="flex items-center space-x-3">
      <div
        className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* HeroSection is not lazy loaded as it's above the fold */}
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

      {/* Wrap lazy loaded components in Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <FeaturedProjects />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <CTASection
          title="Ready to Reclaim Your Space?"
          description="Get started with a free, no-obligation quote today and experience the difference professional junk removal can make."
          primaryButtonText="Get Your Free Quote"
          primaryButtonLink="/contact"
          secondaryButtonText="Call (123) 456-7890"
          secondaryButtonLink="tel:+1234567890"
        />
      </Suspense>
    </div>
  );
};

export default Home;
