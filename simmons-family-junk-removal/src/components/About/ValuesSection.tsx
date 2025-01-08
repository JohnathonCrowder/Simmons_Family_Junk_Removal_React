import React from "react";
import { motion } from "framer-motion";

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: "handshake",
      title: "Trust & Reliability",
      description:
        "When we say we'll be there, we'll be there. No hidden fees, no surprises - just honest, straightforward service every time.",
    },
    {
      icon: "leaf",
      title: "Eco-Friendly Practices",
      description:
        "We don't just haul stuff away. We make sure everything that can be recycled or donated finds its proper place.",
    },
    {
      icon: "home",
      title: "Respect for Your Space",
      description:
        "Your property is sacred ground to us. We're careful, clean, and always treat your space with the utmost respect.",
    },
    {
      icon: "heart",
      title: "Community First",
      description:
        "We're not just working in the community - we're part of it. Every job we do is another way to help make Springfield better.",
    },
  ];

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
            What Matters To Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Values That <br />
            <span className="text-blue-600">Define Our Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sure, we haul junk - but it's how we do it that makes the
            difference. Here's what you can expect when you work with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas fa-${value.icon} text-white text-2xl`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Simple Promise</h3>
            <p className="text-xl leading-relaxed">
              We'll show up on time, treat your property with respect, and
              handle your items responsibly - all with a friendly smile and at a
              fair price. It's not complicated, but it's the way we believe
              things should be done.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "clock", text: "On-Time Service" },
                { icon: "smile", text: "Friendly Team" },
                { icon: "shield-alt", text: "Fair & Honest Pricing" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <i className={`fas fa-${item.icon} mr-2`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
