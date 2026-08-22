import { Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import Home from "./Home/flow/Home";
import Portfolio from "./Portfolio/flow/Portfolio";
import AboutUs from "./AboutUs/flow/AboutUs";
import Contact from "./Contact/flow/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-blue font-sans text-ink-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
