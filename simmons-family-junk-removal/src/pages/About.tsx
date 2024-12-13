import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/images/about-us.jpg"
              alt="Simmons Family Junk Removal Team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Simmons Family Junk Removal was founded in 2005 by John Simmons, a
              Springfield native with a passion for helping people and a vision
              for a cleaner community. What started as a one-man operation with
              a single truck has grown into a full-service junk removal company,
              serving residential and commercial clients throughout Springfield
              and surrounding areas.
            </p>
            <p className="text-gray-600">
              Our commitment to exceptional service, environmental
              responsibility, and community involvement has been the cornerstone
              of our success. Today, we're proud to be Springfield's go-to
              solution for all junk removal needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ValueCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-primary text-4xl mb-4">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

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

const TeamMember: React.FC<{ image: string; name: string; role: string }> = ({
  image,
  name,
  role,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="text-center"
    >
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  );
};

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

const AchievementsSection: React.FC = () => {
  const achievements = [
    { number: "15K+", label: "Satisfied Customers" },
    { number: "2.5M+", label: "Pounds of Junk Removed" },
    { number: "75%", label: "Recycling Rate" },
    { number: "1000+", label: "Local Jobs Created" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                {achievement.number}
              </div>
              <div>{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <div className="about-page">
      <HeroSection
        backgroundImage="/images/about-hero.jpg"
        title={
          <>
            About Simmons Family <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Junk Removal
            </span>
          </>
        }
        subtitle="Your trusted partner in creating clean, clutter-free spaces since 2005"
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <AchievementsSection />
      <CTASection
        title="Ready to Experience the Simmons Difference?"
        description="Let our family take care of your junk removal needs. Contact us today for a free quote!"
      />
    </div>
  );
};

export default About;
