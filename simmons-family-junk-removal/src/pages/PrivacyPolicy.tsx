import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type StringContent = {
  text: string;
  details?: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
};

type CategoryContent = {
  intro: string;
  categories: {
    title: string;
    items: string[];
  }[];
};

type PurposeContent = {
  intro: string;
  purposes: {
    title: string;
    description: string;
    examples: string[];
  }[];
};

type MeasureContent = {
  measures: {
    title: string;
    points: string[];
  }[];
};

type RightsContent = {
  intro: string;
  rights: {
    title: string;
    description: string;
  }[];
};

type SectionContent =
  | string
  | CategoryContent
  | PurposeContent
  | MeasureContent
  | RightsContent
  | StringContent;

type Section = {
  id: string;
  title: string;
  icon: string;
  content: SectionContent;
  lastUpdated?: string;
};

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to check content type
  const isCategory = (content: SectionContent): content is CategoryContent =>
    typeof content === "object" &&
    content !== null &&
    "categories" in content &&
    Array.isArray((content as CategoryContent).categories);

  const isPurpose = (content: SectionContent): content is PurposeContent =>
    typeof content === "object" &&
    content !== null &&
    "purposes" in content &&
    Array.isArray((content as PurposeContent).purposes);

  const isMeasure = (content: SectionContent): content is MeasureContent =>
    typeof content === "object" &&
    content !== null &&
    "measures" in content &&
    Array.isArray((content as MeasureContent).measures);

  const isRights = (content: SectionContent): content is RightsContent =>
    typeof content === "object" &&
    content !== null &&
    "rights" in content &&
    Array.isArray((content as RightsContent).rights);

  const isStringContent = (content: SectionContent): content is StringContent =>
    typeof content === "object" &&
    content !== null &&
    "text" in content &&
    typeof (content as StringContent).text === "string";

  const sections: Section[] = [
    {
      id: "overview",
      title: "Overview",
      icon: "shield-alt",
      content: `At Simmons Family Junk Removal, protecting your privacy is a top priority. 
      We believe in being transparent about how we collect, use, and protect your information. 
      This policy outlines our practices and your rights regarding personal data.`,
      lastUpdated: "February 15, 2024",
    },
    {
      id: "collection",
      title: "Information We Collect",
      icon: "database",
      content: {
        intro:
          "We collect various types of information to provide and improve our services:",
        categories: [
          {
            title: "Personal Information",
            items: [
              "Name and contact details",
              "Service addresses",
              "Phone numbers",
              "Email addresses",
              "Payment information",
            ],
          },
          {
            title: "Service Information",
            items: [
              "Service history",
              "Appointment preferences",
              "Special handling instructions",
              "Property access details",
            ],
          },
          {
            title: "Technical Information",
            items: [
              "IP address",
              "Device information",
              "Browser type",
              "Usage data",
            ],
          },
        ],
      } as CategoryContent,
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: "user-shield",
      content: {
        intro: "Your information helps us provide and improve our services:",
        purposes: [
          {
            title: "Service Delivery",
            description:
              "To provide junk removal services and customer support",
            examples: [
              "Scheduling appointments",
              "Service coordination",
              "Follow-up communication",
            ],
          },
          {
            title: "Business Operations",
            description: "To maintain and improve our services",
            examples: [
              "Quality control",
              "Service optimization",
              "Customer feedback",
            ],
          },
          {
            title: "Communication",
            description: "To keep you informed about our services",
            examples: ["Service updates", "Promotional offers", "Company news"],
          },
        ],
      } as PurposeContent,
    },
    {
      id: "protection",
      title: "How We Protect Your Data",
      icon: "lock",
      content: {
        measures: [
          {
            title: "Security Measures",
            points: [
              "Encrypted data transmission",
              "Secure data storage",
              "Regular security audits",
              "Employee training on data protection",
            ],
          },
          {
            title: "Access Controls",
            points: [
              "Limited staff access",
              "Strict authentication requirements",
              "Regular access reviews",
            ],
          },
        ],
      } as MeasureContent,
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: "user-check",
      content: {
        intro: "You have several rights regarding your personal data:",
        rights: [
          {
            title: "Access",
            description: "Request access to your personal data",
          },
          {
            title: "Correction",
            description: "Request correction of inaccurate data",
          },
          {
            title: "Deletion",
            description: "Request deletion of your data",
          },
          {
            title: "Objection",
            description: "Object to certain data processing",
          },
        ],
      } as RightsContent,
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: "envelope",
      content: {
        text: "If you have questions about our privacy practices or would like to exercise your rights, please contact us:",
        details: {
          email: "privacy@simmonsjunkremoval.com",
          phone: "(417) 555-0123",
          address: "123 Main Street, Springfield, MO 65806",
          hours: "Monday - Friday: 9:00 AM - 5:00 PM CST",
        },
      } as StringContent,
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
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
                    {typeof section.content === "string" ? (
                      <p>{section.content}</p>
                    ) : (
                      <div>
                        {/* Collection Section */}
                        {isCategory(section.content) && (
                          <div>
                            <p>{section.content.intro}</p>
                            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                              {section.content.categories.map(
                                (category, index) => (
                                  <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6"
                                  >
                                    <h3 className="text-lg font-semibold mb-4">
                                      {category.title}
                                    </h3>
                                    <ul className="space-y-2">
                                      {category.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="flex items-start"
                                        >
                                          <i className="fas fa-check text-green-500 mt-1 mr-2" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Usage Section */}
                        {isPurpose(section.content) && (
                          <div>
                            <p>{section.content.intro}</p>
                            <div className="mt-6 space-y-6">
                              {section.content.purposes.map(
                                (purpose, index) => (
                                  <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6"
                                  >
                                    <h3 className="text-lg font-semibold mb-2">
                                      {purpose.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                      {purpose.description}
                                    </p>
                                    <div className="grid gap-2 md:grid-cols-2">
                                      {purpose.examples.map(
                                        (example, exampleIndex) => (
                                          <div
                                            key={exampleIndex}
                                            className="flex items-center bg-white px-4 py-2 rounded-lg"
                                          >
                                            <i className="fas fa-check text-green-500 mr-2" />
                                            {example}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Protection Section */}
                        {isMeasure(section.content) && (
                          <div className="grid gap-6 md:grid-cols-2">
                            {section.content.measures.map((measure, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6"
                              >
                                <h3 className="text-lg font-semibold mb-4">
                                  {measure.title}
                                </h3>
                                <ul className="space-y-2">
                                  {measure.points.map((point, pointIndex) => (
                                    <li
                                      key={pointIndex}
                                      className="flex items-start"
                                    >
                                      <i className="fas fa-shield-alt text-blue-500 mt-1 mr-2" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Rights Section */}
                        {isRights(section.content) && (
                          <div>
                            <p>{section.content.intro}</p>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                              {section.content.rights.map((right, index) => (
                                <div
                                  key={index}
                                  className="bg-gray-50 rounded-xl p-4"
                                >
                                  <h3 className="font-semibold mb-2">
                                    {right.title}
                                  </h3>
                                  <p className="text-gray-600">
                                    {right.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Contact Section */}
                        {isStringContent(section.content) &&
                          section.content.details && (
                            <div>
                              <p className="mb-6">{section.content.text}</p>
                              <div className="bg-gray-50 rounded-xl p-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                  <div className="flex items-start">
                                    <i className="fas fa-envelope text-blue-500 mt-1 mr-3" />
                                    <div>
                                      <div className="font-semibold">Email</div>
                                      <a
                                        href={`mailto:${section.content.details.email}`}
                                        className="text-blue-600 hover:text-blue-800"
                                      >
                                        {section.content.details.email}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <i className="fas fa-phone text-blue-500 mt-1 mr-3" />
                                    <div>
                                      <div className="font-semibold">Phone</div>
                                      <a
                                        href={`tel:${section.content.details.phone}`}
                                        className="text-blue-600 hover:text-blue-800"
                                      >
                                        {section.content.details.phone}
                                      </a>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3" />
                                    <div>
                                      <div className="font-semibold">
                                        Address
                                      </div>
                                      <div>
                                        {section.content.details.address}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <i className="fas fa-clock text-blue-500 mt-1 mr-3" />
                                    <div>
                                      <div className="font-semibold">Hours</div>
                                      <div>{section.content.details.hours}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default PrivacyPolicy;
