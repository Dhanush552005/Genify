import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12 px-6 md:px-16"
    >
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-white text-center">
        Customer Testimonials
      </h1>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        Hear from our users who turned ideas into stunning visuals with ease.
      </p>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300"
          >
            <img
              className="rounded-full w-16 h-16 border-2 border-white/20 shadow-sm"
              src={item.image}
              alt={item.name}
            />
            <h2 className="text-xl font-semibold text-white">{item.name}</h2>
            <p className="text-gray-400 text-sm">{item.role}</p>
            <div className="flex mb-4 gap-1">
              {Array(item.stars)
                .fill()
                .map((_, idx) => (
                  <img
                    src={assets.rating_star}
                    key={idx}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>
            <p className="text-center text-sm text-gray-400 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
