import Hero from "../Hero";
import MeetDesinary from "../MeetDesinary";
import Journey from "../Journey";
import Features from "../Features";
import TransformBanner from "../TransformBanner";
import Testimonials from "../Testimonials";
import BeforeAfter from "../BeforeAfter";
import FAQ from "../FAQ";

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
