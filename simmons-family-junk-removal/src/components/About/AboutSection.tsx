import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image and decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img
                src="/images/owner-portrait.jpg"
                alt="Owner with service truck"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />
          </motion.div>

          {/* Right side - Story content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More Than Just Junk Removal, <br />
              <span className="text-blue-600">We're Your Neighbors</span>
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Like many great ideas, this one started with a simple act of
                kindness. While helping an elderly neighbor declutter her home
                in early 2019, we discovered a real need in our community.
                People needed more than just a junk removal service – they
                needed a trustworthy partner who would treat their homes with
                respect and their belongings with care.
              </p>
              <p>
                Drawing from years of construction experience, we started small
                – just a pickup truck, a willingness to work hard, and a
                commitment to doing things the right way. Word spread quickly
                through Springfield as neighbors told neighbors about our
                reliable service and respectful approach. What began as weekend
                jobs soon grew into something more.
              </p>
              <p>
                Four years later, we're still guided by those same principles,
                just with an extra truck and a few more helping hands. We've
                grown from handling small residential cleanouts to taking on
                commercial projects and estate cleanouts, all while maintaining
                our commitment to exceptional service and environmental
                responsibility.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: "500+", label: "Happy Customers" },
                { number: "90%", label: "Recycle Rate" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="italic border-l-4 border-blue-600 pl-4 text-gray-600">
              "At the end of the day, this business isn't about junk – it's
              about people. Every item has a story, and every customer becomes
              part of ours. That's what makes this work meaningful."
              <footer className="mt-2 font-semibold text-gray-900">
                - Juan S. , Simmons Family Junk Removal
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
