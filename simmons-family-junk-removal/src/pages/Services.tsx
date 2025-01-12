import React, { lazy, Suspense } from "react";
import PageHero from "../components/PageHero";

// Lazy load components
const ServicesGrid = lazy(() => import("../components/Services/ServicesGrid"));
const PricingSection = lazy(
  () => import("../components/Services/PricingSection")
);
const FAQSection = lazy(() => import("../components/Services/FAQSection"));
const CTASection = lazy(() => import("../components/CTASection"));

// Loading skeleton components
const ServicesGridSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <div className="animate-pulse">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-64 bg-gray-200 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PricingSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-blue-900">
    <div className="animate-pulse">
      <div className="text-center mb-12">
        <div className="h-8 bg-blue-800 rounded w-1/2 mx-auto mb-4" />
        <div className="h-4 bg-blue-800 rounded w-2/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="h-40 bg-blue-800/20 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-6 bg-blue-800/20 rounded w-3/4" />
              <div className="h-4 bg-blue-800/20 rounded w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FAQSkeleton: React.FC = () => (
  <div className="w-full max-w-3xl mx-auto px-4 py-12">
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      ))}
    </div>
  </div>
);

const CTASkeleton: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto px-4 py-12">
    <div className="animate-pulse text-center">
      <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
      <div className="h-12 bg-gray-200 rounded-lg w-48 mx-auto" />
    </div>
  </div>
);

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
      <Suspense fallback={<ServicesGridSkeleton />}>
        <ServicesGrid />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<PricingSkeleton />}>
        <PricingSection />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<FAQSkeleton />}>
        <FAQSection />
      </Suspense>

      {/* Final CTA Section */}
      <Suspense fallback={<CTASkeleton />}>
        <CTASection
          title="Ready to Clear the Clutter?"
          description="Get started with a free, no-obligation quote today and experience the difference professional junk removal can make."
          primaryButtonText="Get Your Free Quote"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="#services"
        />
      </Suspense>
    </div>
  );
};

export default Services;
