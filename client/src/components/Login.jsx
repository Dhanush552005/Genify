import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [state, setState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else toast.error(data.message);
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (data.success) {
          toast.success("Registration successful. Please log in.");
          setState("Login");
          setEmail(""); 
          setPassword("");
          setName("");
        } else toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/70 flex justify-center items-center">
      {/* Floating Gradient Blobs */}
      <span className="absolute -top-24 -left-24 w-60 h-60 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></span>
      <span className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></span>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-[90%] max-w-md bg-gradient-to-br from-[#0f0f12] to-[#1a1a24] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.4)] p-8 sm:p-10 text-gray-300 backdrop-blur-xl overflow-hidden"
      >
        {/* Close Icon */}
        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          src={assets.cross_icon}
          alt="close"
        />

        {/* Heading */}
        <h1 className="text-center text-white text-3xl font-semibold mb-2">{state}</h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          {state === "Login" ? "Welcome back! Sign in to continue" : "Create your account to get started"}
        </p>

        {/* Name Field */}
        {state !== "Login" && (
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2.5 mt-3 focus-within:border-blue-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition">
            <img className="w-5 opacity-70" src={assets.profile_icon} alt="name" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500 text-white"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2.5 mt-4 focus-within:border-blue-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition">
          <img className="w-5 opacity-70" src={assets.email_icon} alt="email" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500 text-white"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2.5 mt-4 focus-within:border-blue-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition">
          <img className="w-5 opacity-70" src={assets.lock_icon} alt="password" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500 text-white"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* Forgot password */}
        <p className="text-sm text-blue-400 my-4 cursor-pointer hover:underline text-right">
          Forgot password?
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-2.5 rounded-full font-medium hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {/* Switch Auth Mode */}
        <p className="mt-5 text-center text-gray-400">
          {state === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setState("Sign Up")} className="text-blue-400 cursor-pointer hover:underline">
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setState("Login")} className="text-blue-400 cursor-pointer hover:underline">
                Login
              </span>
            </>
          )}
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
