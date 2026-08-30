import Hero from "../pages/Hero";
import MeetDesinary from "../pages/MeetDesinary";
import Journey from "../pages/Journey";
import Features from "../pages/Features";
import TransformBanner from "../pages/TransformBanner";
import Testimonials from "../pages/Testimonials";
import BeforeAfter from "../pages/BeforeAfter";
import FAQ from "../pages/FAQ";

// Home = image2 -> image9, in the same order as the reference design.
// Navbar (image1) and Footer (image10) are rendered once in App.jsx
// so they appear on every page.
export default function Home() {
  return (
    <>
      <Hero />
      <MeetDesinary />
      <Journey />
       <Features />
      <TransformBanner />
       <Testimonials />
        <BeforeAfter />
      <FAQ />
    </>
  );
}
