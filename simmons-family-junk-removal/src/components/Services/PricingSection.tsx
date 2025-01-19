import React, { useState } from "react";

const HighlightSection: React.FC = () => {
  // Track which card is currently hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const highlights = [
    {
      iconStatic: "maps.png",
      iconGif: "maps.gif",
      title: "Proudly Serving Springfield",
      description:
        "We’re rooted in Springfield, MO, and dedicated to helping our neighbors keep their homes and businesses clutter-free.",
    },
    {
      iconStatic: "hand.png",
      iconGif: "hand.gif",
      title: "Reliable & Professional",
      description:
        "From quick quotes to timely service, we pride ourselves on reliability and clear communication.",
    },
    {
      iconStatic: "dumpster.png",
      iconGif: "dumpster.gif",
      title: "Sustainable Solutions",
      description:
        "We go the extra mile to recycle and donate items, helping protect Springfield’s natural beauty.",
    },
    {
      iconStatic: "family.png",
      iconGif: "family.gif",
      title: "Family-Owned Values",
      description:
        "Simmons Family Junk Removal is built on honesty and respect—treating you like part of our family.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-700">
            Why Springfield Chooses Us
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Simmons Family Junk Removal is built on local pride and family
            values. Here’s why your Springfield neighbors trust us with their
            junk removal needs.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-yellow-500 shadow-lg p-8 text-center transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center mb-6">
                {/* Wrap the image in a container with fixed dimensions */}
                <div className="w-24 h-24">
                  <img
                    src={
                      hoveredCard === index
                        ? highlight.iconGif
                        : highlight.iconStatic
                    }
                    alt={highlight.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Combined Community Impact and CTA Section */}
        <div className="mt-20 relative bg-white rounded-3xl border-2 border-yellow-500 shadow-lg hover:shadow-[0_0_30px_10px_rgba(255,215,0,0.6)] transition-shadow duration-300">
          {/* Heart Icon Positioned Above Border */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-heart text-yellow-500 text-3xl"></i>
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 p-12">
            {/* Impact Stats */}
            <div className="text-center mb-8 mt-8">
              <h3 className="text-3xl font-bold text-blue-700">
                Making a Difference in Springfield
              </h3>
              <p className="text-lg mt-4 text-gray-600">
                We’re more than a junk removal service—we’re committed to making
                Springfield a cleaner, greener place for everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
              <div>
                <h4 className="text-4xl font-extrabold text-blue-700">350+</h4>
                <p className="text-lg text-gray-600">Local Families Served</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-blue-700">80%</h4>
                <p className="text-lg text-gray-600">
                  Items Recycled or Donated
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-blue-700">
                  12+ Years
                </h4>
                <p className="text-lg text-gray-600">Serving Springfield</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Ready to Declutter Your Space?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Contact Simmons Family Junk Removal today for a free quote. Let
                us handle the heavy lifting while you enjoy a cleaner space.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
