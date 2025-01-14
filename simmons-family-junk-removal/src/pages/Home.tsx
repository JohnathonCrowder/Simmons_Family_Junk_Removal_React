import React, { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

// Import HeroSection normally since it's above the fold
import HeroSection from "../components/HeroSection";

// Lazy load all other sections
const ServicesSection = lazy(
  () => import("../components/Home/ServicesSection")
);
const ProcessSection = lazy(() => import("../components/Home/ProcessSection"));
const FeaturedProjects = lazy(
  () => import("../components/Home/FeaturedProjects")
);
const TestimonialsSection = lazy(
  () => import("../components/Home/TestimonialsSection")
);
const CTASection = lazy(() => import("../components/CTASection"));

// Loading fallback with skeleton
const SectionSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-64" />
        ))}
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="home">
        {/* HeroSection loads immediately */}
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

        {/* Services Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>

        {/* Process Section - Moved before Featured Projects */}
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection />
        </Suspense>

        {/* Featured Projects - Moved after Process Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturedProjects />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <CTASection
            title="Ready to Reclaim Your Space?"
            description="Get started with a free, no-obligation quote today and experience the difference professional junk removal can make."
            primaryButtonText="Get Your Free Quote"
            primaryButtonLink="/contact"
            secondaryButtonText="Call (417) 425-2730"
            secondaryButtonLink="tel:+1234567890"
          />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default Home;
