import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
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
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-32 text-center relative overflow-hidden"
    >
      {/* Floating Blobs for Visual Effect */}
      <span className="absolute -top-16 -left-16 w-36 h-36 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></span>
      <span className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></span>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        See the Magic — Try it Now ✨
      </h1>

      {/* Generate Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center gap-3 px-14 py-4 rounded-full 
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
          text-white font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-500"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Stars" />
      </motion.button>
    </motion.section>
  );
};

export default GenerateBtn;
