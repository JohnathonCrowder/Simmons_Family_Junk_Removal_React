import React from "react";
import ValueCard from "./ValueCard";

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: "handshake",
      title: "Customer First",
      description:
        "We prioritize customer satisfaction in everything we do, ensuring a seamless and stress-free experience.",
    },
    {
      icon: "leaf",
      title: "Eco-Friendly",
      description:
        "We're committed to responsible disposal practices, recycling and donating items whenever possible.",
    },
    {
      icon: "users",
      title: "Community-Focused",
      description:
        "We actively participate in local initiatives and support our community through various outreach programs.",
    },
    {
      icon: "award",
      title: "Professional Excellence",
      description:
        "Our team is trained to deliver top-notch service with attention to detail and safety.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
