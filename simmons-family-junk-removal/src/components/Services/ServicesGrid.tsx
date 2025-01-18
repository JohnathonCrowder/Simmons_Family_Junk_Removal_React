import React from "react";
import { motion } from "framer-motion";

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Junk Removal",
      description:
        "Our team handles everything from single-item pickups to full house cleanouts. We work around your schedule to efficiently remove unwanted items, ensuring minimal disruption to your daily routine.",
      features: [
        "Entire home cleanouts",
        "Garage & attic clearing",
        "Safe appliance removal",
        "Flexible scheduling options",
      ],
    },
    {
      icon: "building",
      title: "Commercial Junk Removal",
      description:
        "Keep your Springfield-area business clutter-free with our fast commercial junk removal. We handle office equipment, retail fixtures, and construction debris, so you can focus on running your enterprise.",
      features: [
        "Office & retail cleanouts",
        "Restaurant & warehouse haul-offs",
        "Construction site debris removal",
        "Timely service to minimize downtime",
      ],
    },
    {
      icon: "couch",
      title: "Furniture Removal",
      description:
        "Eliminate the hassle of moving heavy furniture. Our friendly team ensures proper handling and disposal, often donating usable pieces to local charities, reducing waste in Springfield’s landfills.",
      features: [
        "All types of furniture",
        "Donation coordination",
        "Eco-friendly disposal",
        "White-glove removal approach",
      ],
    },
    {
      icon: "truck-loading",
      title: "Appliance Disposal",
      description:
        "From refrigerators and washers to dishwashers and dryers, we safely disconnect and haul away large appliances, following EPA regulations for recycling or disposal.",
      features: [
        "Professional disconnection",
        "EPA-compliant recycling",
        "Pickup of all appliance types",
        "Preventive leak & spill measures",
      ],
    },
    {
      icon: "hard-hat",
      title: "Construction Debris Removal",
      description:
        "Renovating your property? We swiftly remove leftover drywall, lumber, and other building materials. Our crew ensures your workspace remains safe and clear of tripping hazards.",
      features: [
        "Same-day debris pickup",
        "Removal of wood, metal, & more",
        "Loading & hauling included",
        "Licensed & insured professionals",
      ],
    },
    {
      icon: "leaf",
      title: "Yard Waste Cleanup",
      description:
        "Reclaim your outdoor space by removing branches, leaves, soil, and storm debris. Our yard waste service is perfect for landscaping overhauls or seasonal cleanups in Springfield’s variable climate.",
      features: [
        "Storm debris collection",
        "Landscaping & seasonal waste",
        "Safe disposal of natural materials",
        "Service for residential & commercial",
      ],
    },
    {
      icon: "bed",
      title: "Mattress & Box Spring Removal",
      description:
        "Don’t struggle with bulky mattresses or box springs. We ensure proper disposal or donation of gently used bedding, keeping your home clutter-free and comfortable.",
      features: [
        "All mattress sizes",
        "Sanitary handling protocols",
        "Donation for gently used items",
        "Quick & efficient pickup",
      ],
    },
    {
      icon: "trash-alt",
      title: "Estate Cleanouts",
      description:
        "Manage sensitive estate transitions smoothly with our supportive team. We handle sorting, donating, and hauling away unwanted items, allowing you to focus on what matters most.",
      features: [
        "Compassionate, discreet service",
        "Sorting & donation coordination",
        "Full-property cleanout solutions",
        "Free on-site estimates",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
            Junk Removal Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From small pickups to major cleanouts, Simmons Family Junk Removal
            offers a variety of junk removal services for Springfield, MO,
            ensuring a clutter-free life for homeowners, businesses, and more.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl border-2 border-yellow-500 shadow-lg p-8 transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i
                    className={`fas fa-${service.icon} text-2xl`}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-blue-700 mt-8 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <i className="fas fa-check text-blue-600 mr-2 text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Informative Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-blue-50 rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            Trusted by Springfield & Beyond
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Our commitment to eco-friendly solutions, transparent pricing, and
            prompt service has made us a top choice in the region. Join the
            countless residential and commercial clients who have benefited from
            a clutter-free environment.
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Have a unique situation? Our team is flexible and ready to discuss
            custom junk removal plans. Reach out to learn more about our process
            and how we can assist you in achieving a cleaner, more organized
            space.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
