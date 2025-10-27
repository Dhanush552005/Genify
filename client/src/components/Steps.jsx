import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-6 md:px-16"
    >
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-white text-center">
        How it works
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        Transform Words Into Stunning Images — effortless, fast, and creative.
      </p>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-start gap-4 p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-md">
              <img className="w-7 h-7" src={item.icon} alt={item.title} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">{item.title}</h2>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Steps;
