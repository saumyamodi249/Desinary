import { useState } from "react";

import {
  portfolioCategories,
  portfolioHeading,
  portfolioData,
} from "../data/data";

const Portfolioshow = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-[var(--theme-Portfolio-bg)] pt-[89.81px] pl-[120px] pb-[108px] pr-[119px]">
      {/* ================= HEADING + DESCRIPTION ================= */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 ">
        {/* Heading */}
        <div className="max-w-xl">
         <h2 className="text-5xl font-semibold text-[var(--theme-Portfolio-title)] leading-tight mb-[64.19px]">
  {portfolioHeading.titleLine1}
  <br />
  {portfolioHeading.titleLine2Normal}
  <span className="text-[var(--theme-Portfolio-org)]">
    {portfolioHeading.titleLine2Highlight}
  </span>
  {portfolioHeading.titleLine2End}
</h2>
        </div>

        {/* Description */}
        <div className="max-w-xl">
          <p className="text-[var(--theme-Portfolio-description)] text-sm font-normal leading-relaxed">
            {portfolioHeading.description}
          </p>
        </div>
      </div>

      {/* ================= FILTER BUTTONS ================= */}
    {/* ================= FILTER BUTTONS ================= */}
<div className="flex gap-2 mb-8">
  {portfolioCategories.map((category) => (
    
   <button
  key={category}
  onClick={() => setActiveCategory(category)}
  className={`w-[130px] h-[36px] rounded-md border text-sm font-medium transition-colors duration-200 cursor-pointer ${
    activeCategory === category
      ? "bg-[var(--theme-Portfolio-org)] text-white border-[var(--theme-Portfolio-org)] hover:bg-[var(--theme-portfolio-btn-bg-hover)]"
      : "text-[var(--theme-body-text-color)] border-[var(--theme-about-us-border)] hover:border-[var(--theme-about-us-border-hover)] bg-[var(--theme-portfolio-btn-bg)]"
  }`}
>
  
      {category}
    </button>
  ))}
</div>

      {/* ================= IMAGE GRID ================= */}
      <div className="grid grid-cols-6 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={`w-full overflow-hidden rounded-md ${
              item.className || "col-span-2"
            }`}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolioshow;