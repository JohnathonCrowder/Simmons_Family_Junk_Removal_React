import React from "react";
import { motion } from "framer-motion";

const MapSection: React.FC = () => {
  const serviceAreas = [
    { city: "Springfield", distance: "Local" },
    { city: "Nixa", distance: "10 miles" },
    { city: "Ozark", distance: "15 miles" },
    { city: "Republic", distance: "15 miles" },
    { city: "Willard", distance: "12 miles" },
    { city: "Rogersville", distance: "18 miles" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Service Area
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proudly Serving Springfield <br />
              <span className="text-blue-600">And Surrounding Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We cover a 30-mile radius around Springfield, ensuring reliable
              service to our neighboring communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203682.5355359285!2d-93.47017441675914!3d37.16452082694876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f745c8983f%3A0x6bfd6cb31e690da0!2sSpringfield%2C%20MO!5e0!3m2!1sen!2sus!4v1620764962985!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
                className="absolute inset-0"
              />
            </motion.div>

            {/* Service Areas List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Areas We Cover
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {area.city}
                      </div>
                      <div className="text-sm text-gray-600">
                        {area.distance}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Not sure if we serve your area?
                    </h4>
                    <p className="text-gray-600">
                      Give us a call - we're happy to help!
                    </p>
                  </div>
                  <a
                    href="tel:+14175550123"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <i className="fas fa-phone mr-2" />
                    (417) 555-0123
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: "clock",
                title: "Prompt Service",
                description: "We arrive on time, every time",
              },
              {
                icon: "truck",
                title: "Free Estimates",
                description: "Know your cost upfront",
              },
              {
                icon: "shield-alt",
                title: "Service Guarantee",
                description: "100% satisfaction guaranteed",
              },
            ].map((guarantee, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fas fa-${guarantee.icon} text-blue-600 text-xl`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {guarantee.title}
                    </h4>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
