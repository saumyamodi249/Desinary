import { motion } from "motion/react";
import { features } from "../data/data";

export default function Features() {
  return (
    <section className="w-full bg-[var(--theme-bg-primary)] px-4 md:px-10 lg:px-[120px] py-12 md:py-16 lg:py-[108px]">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1480px]">

        {/* Main Header Wrapper */}
        <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left md:flex-row gap-4 md:gap-8">

          {/* 1st Div: Title - NO ANIMATION */}
          <div className="w-full font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--theme-Features-heading)] mb-4 md:mb-0">

            <span className="block">
              {features.titleLine1}
            </span>

            <span className="whitespace-nowrap">
              {features.titleLine2Prefix}{" "}
              <span className="text-[var(--theme-accent-text)]">
                {features.titleHighlight}
              </span>
            </span>

          </div>

          {/* 2nd Div: Top Description - NO ANIMATION */}
          <div className="w-full md:w-[38%] md:shrink-0 md:pt-2">
            <p className="pb-4 md:pb-[19px] font-lato text-sm md:text-base align-middle text-[var(--theme-Features-text-right)]">
              {features.description}
            </p>
          </div>

        </div>

        {/* Feature Items List */}
        <div className="mt-8 md:mt-12 lg:mt-[60px]">

          {features.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="group flex cursor-pointer flex-col md:flex-row items-center justify-between border-b border-[var(--theme-border-color)] py-6 md:py-8 transition-colors duration-300 hover:border-[#D97967] text-center md:text-left"
            >

              {/* 1st Div: Image + Title */}
              <div className="flex w-full flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-8 md:w-[52%] mb-3 md:mb-0">

                {/* Image */}
                <div className="h-24 w-36 md:h-16 md:w-24 lg:h-20 lg:w-32 shrink-0 overflow-hidden rounded-md md:rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>

                {/* Title */}
                <h3 className="mr-0 md:mr-4 lg:mr-[17rem] font-poppins text-lg md:text-[20px] font-medium text-[var(--theme-Features-img-text-left)] transition-colors duration-300 group-hover:text-[#D05741]">
                  {item.title}
                </h3>

              </div>

              {/* 2nd Div: Heading + Description */}
              <div className="w-full md:w-[38%] md:shrink-0 mt-2 md:mt-0">

                <h3 className="font-poppins text-base md:text-xl font-medium leading-[1.3] text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741]">
                  {item.heading}
                </h3>

                <p className="mt-1 font-poppins text-[14px] font-normal leading-relaxed text-[var(--theme-body-text)] align-middle">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}