import React from "react";
import { heroData } from "../data/data";

const Hero = () => {
  return (
    <section className="w-full mx-auto px-[120px] pt-[80px] pb-[60px] flex flex-col items-center bg-[var(--theme-bg-baby-pink)] transition-colors duration-300">
<div className="w-full max-w-[1000px] text-center mb-10">      
    <h1 className="text-[48px] font-semibold leading-[1.25] mb-6">
  {heroData.title.map((part, i) => (
    <React.Fragment key={i}>
      <span
        className={
          part.variant === "org"
            ? "text-[var(--theme-org)]"
            : "text-[var(--theme-title)]"
        }
      >
        {part.text}
      </span>

      {i === 1 && <br />}
    </React.Fragment>
  ))}
</h1>
        <p className="text-[var(--theme-description)] text-[14px] font-normal">
  {heroData.description.split("transforms").map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i === 0 && (
        <>
          transforms
          <br />
        </>
      )}
    </React.Fragment>
  ))}
</p>
      </div>

      <div className="w-full max-w-[1040px]">
        <img
          src="AboutUs/1st.svg"
          alt="Desinary interior"
          className="aspect-[3.05%] w-full rounded-sm block object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
