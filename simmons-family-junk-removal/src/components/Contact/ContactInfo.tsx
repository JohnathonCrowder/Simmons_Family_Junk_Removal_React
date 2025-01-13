import React from "react";
import { motion } from "framer-motion";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Primary Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100">
                Choose how you'd like to connect with us
              </p>
            </div>
            <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center">
              <i className="fas fa-headset text-2xl text-white" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone Contact */}
            <a
              href="tel:+14175550123"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white text-xl group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white mb-1">
                    Call Us
                  </div>
                  <div className="text-2xl font-bold text-blue-100">
                    (417) 425-2730
                  </div>
                </div>
              </div>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:info@simmonsjunk.com"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-xl group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white mb-1">
                    Email Us
                  </div>
                  <div className="text-lg text-blue-100">
                    info@simmonsjunk.com
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Business Hours Bar */}
        <div className="bg-blue-800/50 px-8 py-4">
          <div className="flex items-center justify-between text-blue-100">
            <div className="flex items-center space-x-2">
              <i className="fas fa-clock" />
              <span className="font-semibold">Business Hours:</span>
            </div>
            <div>Mon-Sat: 7AM-7PM</div>
          </div>
        </div>
      </motion.div>

      {/* Service Area Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="fas fa-map-marker-alt text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Service Area
            </h3>
            <p className="text-gray-600 mb-4">
              We serve Springfield and surrounding areas within a 30-mile
              radius. Not sure if you're in our service area? Give us a call!
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {["Springfield", "Nixa", "Ozark", "Republic"].map(
                (city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fas fa-check text-blue-600" />
                    <span>{city}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gray-50 rounded-2xl p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Common Questions
        </h3>
        <div className="space-y-4">
          {[
            {
              q: "How quickly can you come out?",
              a: "We often offer same-day service. Just give us a call to check availability.",
            },
            {
              q: "Do you provide free estimates?",
              a: "Yes! We always provide free, no-obligation estimates for all jobs.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          { icon: "shield-alt", text: "Licensed & Insured" },
          { icon: "dollar-sign", text: "Upfront Pricing" },
          { icon: "recycle", text: "Eco-Friendly Disposal" },
        ].map((badge, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-blue-600 mb-2">
              <i className={`fas fa-${badge.icon} text-xl`} />
            </div>
            <div className="text-sm font-medium text-gray-900">
              {badge.text}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactInfo;
