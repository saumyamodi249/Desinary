import { useState } from "react";
import { motion } from "motion/react";

import {
  portfolioCategories,
  portfolioHeading,
  portfolioData,
} from "../data/data";

const getResponsiveSpan = (className) => {
  switch (className) {
    case "col-span-4":
      return "col-span-1 md:col-span-1 lg:col-span-4";
    case "col-span-2":
      return "col-span-1 md:col-span-1 lg:col-span-2";
    case "col-span-3":
      return "col-span-1 md:col-span-1 lg:col-span-3";
    case "col-span-6":
      return "col-span-1 md:col-span-2 lg:col-span-6";
    case "col-span-6 row-span-2":
      return "col-span-1 md:col-span-2 lg:col-span-6 lg:row-span-2";
    default:
      return "col-span-1 md:col-span-1 lg:col-span-2";
  }
};

const Portfolioshow = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-[var(--theme-Portfolio-bg)] px-4 md:px-10 lg:px-[120px] pt-8 md:pt-14 lg:pt-[89.81px] pb-12 md:pb-16 lg:pb-[108px]">
      {/* ================= HEADING + DESCRIPTION ================= */}
      <div className="flex flex-col items-center md:items-start lg:flex-row lg:justify-between gap-4 lg:gap-8">
        {/* Heading */}
        <div className="max-w-xl">
          <h2 className="text-center md:text-left text-[24px] md:text-[36px] lg:text-5xl font-semibold text-[var(--theme-Portfolio-title)] leading-tight mb-4 md:mb-6 lg:mb-[64.19px]">
            {portfolioHeading.titleLine1}
            <br className="hidden lg:block" />{" "}
            {portfolioHeading.titleLine2Normal}
            <br className="block lg:hidden" />
            <span className="text-[var(--theme-Portfolio-org)]">
              {portfolioHeading.titleLine2Highlight}
            </span>
            {portfolioHeading.titleLine2End}
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-xl mx-auto md:mx-0">
          <p className="text-center md:text-left text-[12px] md:text-sm font-normal leading-relaxed text-[var(--theme-Portfolio-description)] mb-6 md:mb-8 lg:mb-0">
            {portfolioHeading.description}
          </p>
        </div>
      </div>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-2 max-w-[320px] md:max-w-none mx-auto md:mx-0 mb-8">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-full md:w-[130px] h-[40px] md:h-[36px] rounded-md border text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center ${activeCategory === category
              ? "bg-[var(--theme-Portfolio-org)] text-white border-[var(--theme-Portfolio-org)] hover:bg-[var(--theme-portfolio-btn-bg-hover)]"
              : "text-[var(--theme-body-text-color)] border-[var(--theme-about-us-border)] hover:border-[var(--theme-about-us-border-hover)] bg-[var(--theme-portfolio-btn-bg)]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
        {filteredData.map((item) => (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            key={item.id}
            className={`w-full overflow-hidden rounded-xl lg:rounded-md ${getResponsiveSpan(
              item.className
            )}`}
          >
            <img
              src={item.image.startsWith("/") ? item.image : `/${item.image}`}
              alt={item.category}
              className="w-full h-auto lg:h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolioshow;
