import React from "react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import MapSection from "../components/Contact/MapSection";
import FAQSection from "../components/Contact/FAQSection";
import CTASection from "../components/CTASection";

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
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <MapSection />
        </div>
      </section>

      <FAQSection />

      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free, no-obligation quote and experience our top-notch service."
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="#contact-form"
        secondaryButtonText="Call (123) 456-7890"
        secondaryButtonLink="tel:+1234567890"
      />
    </div>
  );
};

export default Contact;
