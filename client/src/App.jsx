import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex flex-col">
      {/* Toast notifications */}
      <ToastContainer 
        position="bottom-right" 
        theme="dark"
        autoClose={4000} 
        pauseOnHover 
        draggable 
      />

      {/* Navbar */}
      <Navbar />

      {/* Login Modal */}
      {showLogin && <Login />}

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
