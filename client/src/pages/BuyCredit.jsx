import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, setShowLogin, backendUrl, loadCreditsData, token } =
    useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verify-razor`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    if (!user) return setShowLogin(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/pay-razor`,
        { planId },
        { headers: { token } }
      );
      if (data.success) initPay(data.order);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-20 px-6 md:px-16"
    >
      <button className="border border-white/20 px-10 py-2 rounded-full mb-6 text-white bg-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-300">
        Our Plans
      </button>

      <h1 className="text-4xl font-semibold mb-6 sm:mb-10 text-white">
        Choose Your Plan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center gap-4 p-10 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300"
          >
            <img width={50} src={assets.logo_icon} alt="logo" />
            <p className="mt-3 mb-1 font-semibold text-white text-lg">{item.id}</p>
            <p className="text-gray-400 text-sm">{item.desc}</p>

            <p className="mt-6 text-white text-2xl font-semibold">
              Rs. {item.price}{" "}
              <span className="text-gray-400 text-base font-medium">
                / {item.credits} credits
              </span>
            </p>

            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white mt-8 text-sm rounded-full py-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-500"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BuyCredit;
