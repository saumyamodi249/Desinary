import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import Home from "./Home/flow/Home";
import AboutUs from "./AboutUs/flow/AboutUs";
import Contact from "./Contact/flow/Contact";
import Portfolio from "./Portfolio/flow/Portfolio";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#121212] dark:text-white">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />

    </div>
  );
}