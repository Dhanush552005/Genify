import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative mt-24 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-t-3xl bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_25px_rgba(0,0,0,0.4)] overflow-hidden">
      
      {/* Floating Gradient Accents */}
      <span className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></span>
      <span className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></span>

      {/* Logo */}
     <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
  <img src={assets.logo_icon} className="w-10 sm:w-12" alt="Genify Logo" />
  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
  Genify
</p>
</div>
      {/* Copyright */}
      <p className="text-gray-400 text-sm border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 text-center md:text-left">
        © 2025 <span className="text-white font-semibold">Genify</span> — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
