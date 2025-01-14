import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "Juan and his team went above and beyond. They transformed my cluttered garage into an organized space in just a couple of hours. Professional, efficient, and friendly!",
      author: "Sarah J.",
      location: "Springfield",
      rating: 5,
      platform: "Google",
      icon: "home",
    },
    {
      content:
        "Best decision I made was calling Simmons Family. They handled my estate cleanout with care and respect. Fair pricing and excellent communication throughout.",
      author: "Michael T.",
      location: "Nixa",
      rating: 5,
      platform: "Yelp",
      icon: "box",
    },
    {
      content:
        "I've used them multiple times for my rental properties. Always on time, professional, and they make sure everything is clean before they leave. Highly recommend!",
      author: "Emily R.",
      location: "Ozark",
      rating: 5,
      platform: "Facebook",
      icon: "building",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Customers <span className="text-blue-600">Love Our Work</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it — see what our satisfied customers
            have to say about our junk removal services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Service Icon and Platform Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <i
                    className={`fas fa-${testimonial.icon} text-blue-600 text-2xl`}
                  ></i>
                </div>
                <div
                  className={`flex items-center text-sm font-medium px-4 py-2 rounded-full 
                  ${
                    testimonial.platform === "Google"
                      ? "bg-red-50 text-red-600"
                      : testimonial.platform === "Yelp"
                      ? "bg-pink-50 text-pink-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <i
                    className={`fab fa-${testimonial.platform.toLowerCase()} mr-2`}
                  ></i>
                  {testimonial.platform}
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="flex-grow">
                <p className="text-gray-600 text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center border-t border-gray-100 pt-4 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 md:p-16 text-white shadow-xl overflow-hidden relative"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-32 -right-32 w-64 h-64 border-4 border-white rounded-full"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 border-4 border-white rounded-full"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-2">See More Reviews</h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Check us out on these platforms and see why we're Springfield's
                most trusted junk removal service.
              </p>
            </div>

            <div className="flex justify-center items-center gap-6 flex-wrap">
              {[
                {
                  name: "Google",
                  icon: "google",
                  url: "https://www.google.com/maps/place/Simmons+Family+Junk+Removal/@36.961589,-93.254587,10z/data=!4m8!3m7!1s0x6b1c641aa1fcb033:0xc77f7caeefdcbd0!8m2!3d36.961589!4d-93.254587!9m1!1b1!16s%2Fg%2F11ks490f2g?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
                },
                {
                  name: "Yelp",
                  icon: "yelp",
                  url: "https://www.yelp.com/biz/simmons-family-junk-removal-springfield",
                },
                {
                  name: "Facebook",
                  icon: "facebook-f",
                  url: "https://www.facebook.com/SimmonsFamily04/reviews",
                },
              ].map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 flex items-center px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className={`fab fa-${platform.icon} text-xl mr-3`}></i>
                  <span className="font-bold">{platform.name} Reviews</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
