import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const handleClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center my-32 px-6 overflow-hidden"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Floating Gradient Blobs */}
      <span className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></span>
      <span className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></span>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-6 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-sm text-gray-300 shadow-md"
      >
        <p>Best Text-to-Image Generator</p>
        <img src={assets.star_icon} alt="Star" className="w-4" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold max-w-[700px] mx-auto mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight relative"
      >
        Turn Text Into Stunning <br /> <span className="text-white">AI Images</span> in Seconds.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed"
      >
        Unleash your creativity with AI — transform imagination into visuals instantly.
        Type your prompt, and watch the magic unfold in seconds.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={handleClick}
        className="mt-10 px-14 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center gap-3 transition-all duration-500 relative z-10"
      >
        Generate Images
        <img className="w-6" src={assets.star_group} alt="Stars" />
      </motion.button>

      {/* Generated Image Thumbnails */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-3 relative z-10"
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              key={index}
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              className="rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer max-sm:w-10 shadow-lg"
              width={80}
              alt="Generated sample"
            />
          ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-4 text-gray-500 relative z-10"
      >
        Generated images from <span className="text-white font-semibold">Genify</span>
      </motion.p>
    </motion.section>
  );
};

export default Header;
