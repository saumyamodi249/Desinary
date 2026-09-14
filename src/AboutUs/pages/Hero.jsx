import React from "react";
import { heroData } from "../data/data";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full mx-auto px-4 md:px-10 lg:px-[120px] pt-7 md:pt-14 lg:pt-[80px] pb-6 md:pb-10 lg:pb-[60px] flex flex-col items-center bg-[var(--theme-bg-baby-pink)] transition-colors duration-300">
      <div className="w-full max-w-[1200px] text-center mb-6 md:mb-8 lg:mb-10">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-semibold text-center mb-4 md:mb-5 lg:mb-6 leading-[34px] md:leading-[1.25] lg:leading-[1.25] w-full">
          {/* Line 1 */}
          <span className="block">
            <span className="text-[var(--theme-title)]">{heroData.title[0]?.text}</span>
            <span className="text-[var(--theme-org)]">{heroData.title[1]?.text}</span>
          </span>

          {/* Line 2+ (Desktop: single line | Tablet: 2 lines | Mobile: 3 lines) */}
          <span className="block lg:whitespace-nowrap">
            <span className="text-[var(--theme-title)]">{heroData.title[2]?.text}</span>
            <br className="block md:hidden" />
            <span className="text-[var(--theme-title)]">{heroData.title[3]?.text}</span>
            <span className="text-[var(--theme-org)]">{heroData.title[4]?.text}</span>
            <br className="hidden md:block lg:hidden" />
            <span className="text-[var(--theme-title)]">{heroData.title[5]?.text}</span>
            <br className="block md:hidden" />
            <span className="text-[var(--theme-title)]">{heroData.title[6]?.text}</span>
          </span>
        </h1>
        <p className="text-[var(--theme-description)] text-[12px] md:text-[14px] font-normal leading-[22px] md:leading-[24px] max-w-[325px] md:max-w-[700px] lg:max-w-xl mx-auto">
          {heroData.description}
        </p>
      </div>

      <div className="w-full max-w-[1040px] overflow-hidden rounded-xl lg:rounded-md">
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
          className="w-full h-auto rounded-xl lg:rounded-md block object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
