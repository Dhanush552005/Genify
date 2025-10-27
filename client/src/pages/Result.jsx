import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(assets.sample_img_2);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    setLoading(true);
    const generated = await generateImage(input);
    if (generated) {
      setImage(generated);
      setIsImageLoaded(true);
    }
    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col min-h-[90vh] justify-center items-center px-6 text-center"
    >
      {/* Image Display */}
      <div className="relative w-full max-w-md">
        <motion.img
          key={image}
          src={image}
          alt="Generated"
          className="rounded-2xl border border-white/20 shadow-lg w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {loading && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded animate-[progress_10s_linear]"></div>
        )}
      </div>
      {loading && <p className="mt-4 text-gray-400 text-sm">Generating Image...</p>}

      {/* Input Section */}
      {!isImageLoaded && (
        <motion.form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none px-6 py-3 text-white placeholder-gray-400 rounded-l-full"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 sm:px-12 py-3 rounded-r-full font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-500"
          >
            Generate
          </button>
        </motion.form>
      )}

      {/* Post-generation Actions */}
      {isImageLoaded && (
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full cursor-pointer hover:scale-[1.05] transition-all duration-300 text-gray-200"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-10 py-3 rounded-full cursor-pointer font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-500"
          >
            Download
          </a>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Result;
