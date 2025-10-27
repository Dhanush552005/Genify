import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";

const Home = () => {
  return (
    <main className="relative bg-gradient-to-b from-gray-900 via-indigo-950 to-black min-h-screen text-white overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-indigo-700/30 rounded-full animate-blob top-[-5%] left-[-10%]"></div>
        <div className="absolute w-96 h-96 bg-purple-700/20 rounded-full animate-blob animation-delay-2000 top-1/2 left-3/4"></div>
        <div className="absolute w-64 h-64 bg-pink-600/20 rounded-full animate-blob animation-delay-4000 bottom-10 right-10"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-28">
        <Header />
        <Steps />
        <Description />
        <Testimonials />
        <GenerateBtn />
      </div>
    </main>
  );
};

export default Home;
