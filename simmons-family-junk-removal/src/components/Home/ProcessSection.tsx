import React from "react";
import { motion } from "framer-motion";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Appointment",
      description:
        "Schedule online or call us for a free, no-obligation estimate. We offer flexible timing to meet your needs.",
      icon: "calendar-check",
      color: "blue",
      features: [
        "Online booking available",
        "Same-day estimates",
        "Flexible scheduling",
      ],
    },
    {
      number: "02",
      title: "We Arrive & Assess",
      description:
        "Our uniformed team arrives on time, evaluates the job, and provides an upfront, all-inclusive price.",
      icon: "truck",
      color: "indigo",
      features: [
        "On-time arrival",
        "Transparent pricing",
        "Professional assessment",
      ],
    },
    {
      number: "03",
      title: "Quick & Clean Removal",
      description:
        "We quickly and carefully remove your items, ensuring your space is left clean and tidy.",
      icon: "box",
      color: "blue",
      features: ["Efficient removal", "Clean-up included", "Careful handling"],
    },
    {
      number: "04",
      title: "Responsible Disposal",
      description:
        "We properly dispose of your items, recycling and donating whenever possible.",
      icon: "recycle",
      color: "indigo",
      features: [
        "Eco-friendly practices",
        "Items donated when possible",
        "Proper disposal guaranteed",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've simplified junk removal to make your life easier. Four simple
            steps to a clutter-free space.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-200" />
                </div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div
                  className={`w-16 h-16 rounded-xl bg-${step.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i
                    className={`fas fa-${step.icon} text-2xl text-${step.color}-600`}
                  />
                </div>

                <span
                  className={`text-4xl font-bold text-${step.color}-600/20 absolute top-4 right-4`}
                >
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <i
                        className={`fas fa-check text-${step.color}-600 mr-2`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Satisfaction Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg text-center"
        >
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-star text-2xl text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            100% Satisfaction Guaranteed
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're committed to providing the best service possible. If you're
            not completely satisfied, we'll make it right.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
