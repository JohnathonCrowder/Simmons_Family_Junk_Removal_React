// File: src/pages/ServiceDetail.tsx

import React, { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData"; // Update your import paths as needed
const CTASection = lazy(() => import("../components/CTASection"));
const TestimonialsSection = lazy(
  () => import("../components/Home/TestimonialsSection")
);
const ProcessSection = lazy(() => import("../components/Home/ProcessSection"));

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

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    // If slug doesn't match any service, show a not-found message
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">
          We couldn't find the service you're looking for. Please check our list
          of available services.
        </p>
        <Link
          to="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  // Animate on scroll variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="service-detail-page">
      {/* ===========================
          1. Page Hero Section
      ============================ */}
      <section className="relative bg-blue-900 text-white overflow-hidden py-32">
        {/* Hero Background Embellishments */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[25%] w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Discover how our specialized{" "}
            <span className="font-semibold">{service.title}</span> can transform
            your space—quickly, efficiently, and responsibly.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+14174252730"
              className="inline-block px-8 py-4 border-2 border-yellow-500 text-yellow-300 rounded-full hover:bg-yellow-50 hover:text-blue-900 transition-colors"
            >
              Call Now (417) 425-2730
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===========================
          2. Introduction
      ============================ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
            Why Choose Our {service.title}?
          </h2>
          <p className="text-lg text-gray-700">{service.longDescription}</p>
        </div>

        {/* Key Features in 2 Columns */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-lg shadow p-6"
            >
              <div className="mr-4">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-check"></i>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-1">{feature}</h4>
                <p className="text-gray-600">
                  {/* Demo text, you can elaborate on each feature if needed */}
                  Ensuring top-quality service and an exceptional customer
                  experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===========================
    4. Image / Gallery Section
============================ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Before/After Image Card */}
          <div className="group relative h-[500px] overflow-hidden bg-gray-100 rounded-xl shadow-lg">
            {/* After Image (Bottom Layer) */}
            <div className="absolute inset-0">
              <img
                src={`/slug-images/${service.slug}-after.jpg`}
                alt={`${service.title} - After`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Before Image Overlay (Top Layer) */}
            <div className="absolute inset-0 overflow-hidden group-hover:opacity-0 transition-opacity duration-500">
              <div className="relative h-full w-full">
                <img
                  src={`/slug-images/${service.slug}-before.jpg`}
                  alt={`${service.title} - Before`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              </div>
            </div>

            {/* Before/After Label */}
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
              <span className="bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                <i className="fas fa-sync-alt mr-2" />
                Hover to See Transformation
              </span>
            </div>
          </div>

          {/* Description Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              See {service.title} in Action
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our dedicated team ensures a seamless experience from start to
              finish. Whether you have a single bulky item or an entire property
              to clear, we're here to help.
            </p>
            <p className="text-lg text-gray-700">
              We transform cluttered spaces into clean, usable areas that let
              you breathe easier and live better.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Process Section - Moved before Featured Projects */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProcessSection />
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
  );
};

export default ServiceDetail;
