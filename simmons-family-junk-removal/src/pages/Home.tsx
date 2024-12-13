import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

<HeroSection
  title="Professional Junk Removal Made Simple"
  subtitle="Efficient, eco-friendly junk removal services for your home and business."
  backgroundImage="/images/hero-bg.jpg"
  primaryButtonText="Get a Free Quote"
  primaryButtonLink="/contact"
  secondaryButtonText="Call Us Now"
  secondaryButtonLink="tel:+1234567890"
/>;

const ServiceCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  link: string;
  index: number;
}> = ({ icon, title, description, link, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary"
    >
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <i className={`fas fa-${icon} text-primary text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-primary font-semibold hover:underline group"
      >
        Learn More
        <svg
          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Removal",
      description:
        "From single items to full house cleanouts, we handle it all with care and efficiency.",
      link: "/services",
    },
    {
      icon: "building",
      title: "Commercial Services",
      description:
        "Professional solutions for businesses, including office cleanouts and construction debris removal.",
      link: "/services",
    },
    {
      icon: "recycle",
      title: "Eco-Friendly Disposal",
      description:
        "Responsible disposal methods with a strong focus on recycling and donation whenever possible.",
      link: "/about",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Tailored solutions for all your junk removal needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      image: "before-after-1.jpg",
      title: "Residential Cleanout",
      description: "Complete home decluttering and removal service",
      stats: "2 tons removed in 4 hours",
    },
    {
      image: "before-after-2.jpg",
      title: "Office Renovation",
      description: "Commercial space clearing for major renovations",
      stats: "Entire floor cleared in 2 days",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            See the transformation for yourself
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl"
            >
              <img
                src={`/images/${project.image}`}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 flex flex-col justify-end p-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-gray-900 text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <p className="text-primary font-semibold">{project.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep: React.FC<{
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}> = ({ number, title, description, icon, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary"
    >
      <div className="absolute -top-8 left-6 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
        {number}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <i className={`fas fa-${icon} text-4xl text-primary`}></i>
      </div>
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Book Online",
      description:
        "Choose your preferred date and time. We offer flexible scheduling to fit your needs.",
      icon: "calendar-check",
    },
    {
      number: "2",
      title: "We Arrive",
      description:
        "Our professional, uniformed team arrives on time with the right equipment.",
      icon: "truck",
    },
    {
      number: "3",
      title: "We Remove",
      description:
        "We handle all the heavy lifting, sorting, and loading. You don't lift a finger.",
      icon: "box-open",
    },
    {
      number: "4",
      title: "You Relax",
      description:
        "Enjoy your newly cleared space while we ensure responsible disposal of your items.",
      icon: "smile",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Four simple steps to a clutter-free space
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{
  image: string;
  name: string;
  title: string;
  content: string;
  index: number;
}> = ({ image, name, title, content, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary"
    >
      <div className="flex items-center mb-6">
        <img
          src={`/images/${image}`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <blockquote className="text-gray-700">"{content}"</blockquote>
      <div className="flex text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: "testimonial-1.jpg",
      name: "John Smith",
      title: "Homeowner",
      content:
        "The team was incredibly professional and efficient. They turned my cluttered garage into a usable space in just a few hours. Highly recommend!",
    },
    {
      image: "testimonial-2.jpg",
      name: "Sarah Johnson",
      title: "Business Owner",
      content:
        "Outstanding service for our office cleanout. They were punctual, thorough, and left the space spotless. Will definitely use again!",
    },
    {
      image: "testimonial-3.jpg",
      name: "Michael Brown",
      title: "Property Manager",
      content:
        "I manage multiple properties and always call Simmons for cleanouts between tenants. Their service is unparalleled and pricing is fair.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

<CTASection />;

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
