import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between px-6 sm:px-10 py-3 rounded-full bg-zinc-900/70 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.6)] relative"
    >
      {/* Logo */}
<Link to={"/"} className="flex items-center gap-2">
  <img src={assets.logo_icon} className="w-10 sm:w-12" alt="Genify Logo" />
 <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
  Genify
</p>

</Link>






      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        {user ? (
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Credits Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-500/30 border border-white/10 hover:from-blue-600/40 hover:to-indigo-500/40 transition-all duration-300"
              onClick={() => navigate("/buy")}
            >
              <img src={assets.credit_star} className="w-5" alt="Credits" />
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                Credits: <span className="text-white font-semibold">{credit}</span>
              </p>
            </motion.button>

            {/* User Greeting */}
            <p className="hidden sm:block text-gray-300">Hi, {user.name}</p>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border border-white/10 bg-zinc-800 hover:scale-105 transition-transform duration-300"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-12 hidden group-hover:flex flex-col bg-zinc-900 text-gray-100 rounded-md border border-zinc-700 shadow-lg z-20 min-w-[120px]"
              >
                <ul className="py-2 text-sm">
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-zinc-800 cursor-pointer transition-colors duration-200"
                  >
                    Logout
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        ) : (
          <>
            <p
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-2 rounded-full hover:opacity-90 transition-all duration-300"
              onClick={() => setShowLogin(true)}
            >
              Login
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
