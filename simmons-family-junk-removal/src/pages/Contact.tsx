import React, { lazy, Suspense } from "react";
import PageHero from "../components/PageHero";

// Lazy load components
const ContactForm = lazy(() => import("../components/Contact/ContactForm"));
const ContactInfo = lazy(() => import("../components/Contact/ContactInfo"));
const MapSection = lazy(() => import("../components/Contact/MapSection"));
const FAQSection = lazy(() => import("../components/Contact/FAQSection"));
const CTASection = lazy(() => import("../components/CTASection"));

// Loading skeleton components
const ContactFormSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
    <div className="mb-8">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i}>
            <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
            <div className="h-12 bg-gray-200 rounded w-full" />
          </div>
        ))}
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
        <div className="h-12 bg-gray-200 rounded w-full" />
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
        <div className="h-12 bg-gray-200 rounded w-full" />
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-40 mb-2" />
        <div className="h-32 bg-gray-200 rounded w-full" />
      </div>
      <div className="h-12 bg-blue-200 rounded w-full" />
    </div>
  </div>
);

const ContactInfoSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-8">
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8">
      <div className="h-8 bg-white/20 rounded w-2/3 mb-4" />
      <div className="h-4 bg-white/20 rounded w-1/2 mb-8" />
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white/10 rounded-xl p-6">
            <div className="h-6 bg-white/20 rounded w-3/4 mb-2" />
            <div className="h-4 bg-white/20 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MapSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-4 mx-auto" />
    <div className="h-[400px] bg-gray-200 rounded-2xl" />
  </div>
);

const FAQSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-6">
    <div className="text-center">
      <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      ))}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <PageHero
        title={
          <>
            Get in Touch <br />
            <span className="text-blue-300">We're Here to Help</span>
          </>
        }
        subtitle="Have questions? Need a quote? We'd love to hear from you."
        primaryButtonText="Call Us Now"
        primaryButtonLink="tel:+1234567890"
        secondaryButtonText="Get a Quote"
        secondaryButtonLink="#contact-form"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>

            {/* Contact Info */}
            <Suspense fallback={<ContactInfoSkeleton />}>
              <ContactInfo />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <Suspense fallback={<MapSkeleton />}>
            <MapSection />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<FAQSkeleton />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 bg-gray-50" />}>
        <CTASection
          title="Ready to Get Started?"
          description="Contact us today for a free, no-obligation quote and experience our top-notch service."
          primaryButtonText="Get Your Free Quote"
          primaryButtonLink="#contact-form"
          secondaryButtonText="Call (123) 456-7890"
          secondaryButtonLink="tel:+1234567890"
        />
      </Suspense>
    </div>
  );
};

export default Contact;
