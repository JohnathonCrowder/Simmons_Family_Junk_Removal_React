import React from "react";
import { motion } from "framer-motion";

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Meet Your Hauler
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personal Service, <br />
            <span className="text-blue-600">Professional Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When you choose us, you're working directly with the owner. No
            middleman, just honest service from start to finish.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-full">
                  <img
                    src="/images/juan-working.jpg"
                    alt="Juan at work"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 text-sm mb-1">
                      <i className="fas fa-star text-yellow-400" />
                      <span className="font-semibold">
                        4.9/5 from 500+ customers
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Juan Simmons
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      Owner & Operator
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Every job gets my personal attention and care. From the
                    first call to the final sweep-up, you're getting experienced
                    service from someone who takes pride in doing things right.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        icon: "truck",
                        text: "Professional hauler with 5+ years experience",
                      },
                      {
                        icon: "handshake",
                        text: "Straightforward, honest pricing",
                      },
                      { icon: "clock", text: "Punctual and efficient service" },
                      {
                        icon: "leaf",
                        text: "Committed to responsible disposal",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className={`fas fa-${item.icon} text-blue-600`} />
                        </div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Why I Do This
                    </h4>
                    <p className="text-gray-600">
                      After seeing how challenging junk removal could be for
                      people, I started this business to provide our community
                      with a service they could trust. Every job is an
                      opportunity to make someone's day a little easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "comments",
                title: "Direct Communication",
                text: "Always talk directly with me - no phone tag or miscommunication",
              },
              {
                icon: "shield-alt",
                title: "Personal Accountability",
                text: "One person responsible for making sure you're completely satisfied",
              },
              {
                icon: "hand-holding-heart",
                title: "Dedicated Service",
                text: "Your project gets my full attention and commitment to quality",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <i
                    className={`fas fa-${advantage.icon} text-blue-600 text-xl`}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600">{advantage.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
