import React from "react";
import { heroData } from "../data/data";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full mx-auto px-2 pt-7 pb-5 lg:px-8 xl:px-[120px] lg:pt-[80px] lg:pb-[60px] flex flex-col items-center bg-[var(--theme-bg-baby-pink)] transition-colors duration-300">
      <div className="w-full max-w-[1200px] text-center mb-6 lg:mb-10">
        <h1 className="text-[24px] sm:text-[34px] lg:text-[40px] xl:text-[48px] font-semibold text-center mb-4 lg:mb-6 leading-[36px] lg:leading-[1.25] w-full">
          {/* Line 1 */}
          <span className="block">
            <span className="text-[var(--theme-title)]">{heroData.title[0]?.text}</span>
            <span className="text-[var(--theme-org)]">{heroData.title[1]?.text}</span>
          </span>

          {/* Line 2 (Desktop: single line | Mobile: breaks into 2 lines) */}
          <span className="block lg:whitespace-nowrap">
            <span className="text-[var(--theme-title)]">{heroData.title[2]?.text}</span>
            <br className="block lg:hidden" />
            <span className="text-[var(--theme-org)]">{heroData.title[3]?.text}</span>
            <span className="text-[var(--theme-title)]">{heroData.title[4]?.text}</span>
          </span>
        </h1>
        <p className="text-[var(--theme-description)] text-[12px] sm:text-[14px] font-normal leading-[24px] max-w-[350px] sm:max-w-xl mx-auto">
          {heroData.description}
        </p>
      </div>

      <div className="w-full max-w-[1040px] overflow-hidden rounded-xl lg:rounded-sm">
        <motion.img
          initial={{ scale: 1, y: 0 }}
          whileInView={{ scale: 1.05, y: 0 }}
          transition={{
            duration: 0.72,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          src="/AboutUs/1st.svg"
          alt="Desinary interior"
          className="w-full h-auto rounded-xl lg:rounded-sm block object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
