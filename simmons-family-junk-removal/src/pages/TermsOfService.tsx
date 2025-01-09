import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type SectionContent = {
  text: string;
  items?: string[];
  subsections?: {
    title: string;
    content: string;
    items?: string[];
  }[];
};

type Section = {
  id: string;
  title: string;
  icon: string;
  content: SectionContent;
};

const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: "agreement",
      title: "Service Agreement",
      icon: "file-contract",
      content: {
        text: `By using our junk removal services, you agree to be bound by the following terms and conditions. Please read these terms carefully before engaging our services.`,
        items: [
          "This agreement is between you (the customer) and Simmons Family Junk Removal.",
          "These terms govern all services provided by our company.",
          "By booking our services, you accept these terms in full.",
        ],
      },
    },
    {
      id: "services",
      title: "Services Provided",
      icon: "truck",
      content: {
        text: "Simmons Family Junk Removal provides the following services:",
        items: [
          "Residential junk removal",
          "Commercial waste removal",
          "Estate cleanouts",
          "Construction debris removal",
          "Appliance and furniture removal",
        ],
        subsections: [
          {
            title: "Service Limitations",
            content: "We cannot remove:",
            items: [
              "Hazardous materials",
              "Chemicals and paint",
              "Medical waste",
              "Asbestos",
            ],
          },
        ],
      },
    },
    {
      id: "pricing",
      title: "Pricing & Payment",
      icon: "dollar-sign",
      content: {
        text: "Our pricing structure is based on the volume of items to be removed.",
        subsections: [
          {
            title: "Payment Terms",
            content: "Payment details:",
            items: [
              "Payment is due upon completion of service",
              "We accept cash, credit cards, and checks",
              "A deposit may be required for large jobs",
            ],
          },
          {
            title: "Estimates",
            content: "All estimates are:",
            items: [
              "Free of charge",
              "Non-binding until confirmed in writing",
              "Subject to change if actual job differs from description",
            ],
          },
        ],
      },
    },
    {
      id: "scheduling",
      title: "Scheduling & Cancellations",
      icon: "calendar",
      content: {
        text: "We strive to accommodate your scheduling needs while maintaining efficient operations.",
        subsections: [
          {
            title: "Appointments",
            content: "Scheduling policies:",
            items: [
              "24-hour notice required for scheduling",
              "We offer 2-hour arrival windows",
              "Same-day service available when possible",
            ],
          },
          {
            title: "Cancellations",
            content: "Cancellation policies:",
            items: [
              "24-hour notice required for cancellation",
              "$50 fee may apply for late cancellations",
              "No-shows may be charged a service fee",
            ],
          },
        ],
      },
    },
    {
      id: "liability",
      title: "Liability & Insurance",
      icon: "shield-alt",
      content: {
        text: "While we take every precaution to prevent damage, we have policies in place for such situations:",
        subsections: [
          {
            title: "Insurance Coverage",
            content: "We maintain:",
            items: [
              "General liability insurance",
              "Workers' compensation insurance",
              "Vehicle insurance",
            ],
          },
          {
            title: "Damage Claims",
            content: "In case of damage:",
            items: [
              "Report within 24 hours of service",
              "Provide photographic evidence",
              "Claims evaluated on a case-by-case basis",
            ],
          },
        ],
      },
    },
    {
      id: "termination",
      title: "Termination of Services",
      icon: "times-circle",
      content: {
        text: "We reserve the right to terminate services under certain circumstances:",
        items: [
          "Unsafe working conditions",
          "Illegal items or activities",
          "Abuse of our staff",
          "Non-payment for services",
        ],
      },
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: "sync",
      content: {
        text: "We may modify these terms at any time. Continued use of our services constitutes acceptance of new terms.",
        items: [
          "Changes effective upon posting",
          "Notifications may be sent for major updates",
          "Regular review of terms recommended",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully as they govern the services
            provided by Simmons Family Junk Removal.
          </p>
        </motion.div>

        {/* Navigation Sidebar and Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Navigation
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <i className={`fas fa-${section.icon} w-5`} />
                    <span className="ml-2">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-grow"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i
                        className={`fas fa-${section.icon} text-blue-600 text-xl`}
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 ml-4">
                      {section.title}
                    </h2>
                  </div>

                  <div className="prose prose-blue max-w-none">
                    <p>{section.content.text}</p>

                    {section.content.items && (
                      <ul className="mt-4">
                        {section.content.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <i className="fas fa-check text-blue-500 mt-1 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content.subsections && (
                      <div className="mt-6 space-y-6">
                        {section.content.subsections.map(
                          (subsection, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <h3 className="text-lg font-semibold mb-2">
                                {subsection.title}
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {subsection.content}
                              </p>
                              {subsection.items && (
                                <ul className="space-y-2">
                                  {subsection.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start"
                                    >
                                      <i className="fas fa-check text-green-500 mt-1 mr-2" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Last Updated */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last Updated: February 15, 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <i className="fas fa-arrow-left mr-2" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Questions? Contact Us
            <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
