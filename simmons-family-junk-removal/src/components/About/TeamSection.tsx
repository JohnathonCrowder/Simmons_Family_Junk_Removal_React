import React from "react";
import TeamMember from "./TeamMember";

const TeamSection: React.FC = () => {
  const teamMembers = [
    { image: "john-simmons.jpg", name: "John Simmons", role: "Founder & CEO" },
    {
      image: "sarah-simmons.jpg",
      name: "Sarah Simmons",
      role: "Operations Manager",
    },
    {
      image: "mike-johnson.jpg",
      name: "Mike Johnson",
      role: "Lead Technician",
    },
    { image: "emily-chen.jpg", name: "Emily Chen", role: "Customer Relations" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
