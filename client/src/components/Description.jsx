import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-6 md:px-20 lg:px-28 text-center"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Create AI Images
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        Turn your imagination into stunning visuals
      </p>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
      >
        {/* Floating Gradient Glow */}
        <span className="absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></span>
        <span className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></span>

        {/* Image */}
        <motion.img
          whileHover={{ scale: 1.03 }}
          className="w-80 xl:w-96 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-transform duration-300"
          src={assets.sample_img_1}
          alt="AI Generated Sample"
        />

        {/* Text Section */}
        <div className="text-left max-w-2xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Introducing the AI-Powered Text-to-Image Generator
          </h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Bring your ideas to life effortlessly with our advanced AI image
            generator. From stunning visuals to unique artwork, our tool turns
            your text prompts into captivating, high-quality images in seconds.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Just describe what you imagine — from product mockups to fantasy
            scenes — and watch as AI crafts it instantly. With our
            state-of-the-art model, your creativity truly has no limits.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Description;
