import { motion } from "motion/react";
import { features } from "../data/data";

export default function Features() {
  return (
    <section className="w-full bg-[var(--theme-bg-primary)] px-4 md:px-10 lg:px-[120px] py-12 md:py-16 lg:py-[108px]">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1480px]">

        {/* Main Header Wrapper */}
        <div className="flex flex-col justify-between items-center lg:items-start text-center lg:text-left lg:flex-row gap-4 lg:gap-8">

          {/* 1st Div: Title - NO ANIMATION */}
          <div className="w-full font-poppins text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--theme-Features-heading)] mb-2 md:mb-4 lg:mb-0 text-center lg:text-left">

            <span className="inline lg:block">
              {features.titleLine1}{" "}
              <span className="inline lg:hidden">{features.titleLine2Prefix}</span>
            </span>

            <span className="block md:inline lg:block">
              <span className="hidden lg:inline">{features.titleLine2Prefix}{" "}</span>
              <span className="hidden md:inline lg:hidden">{" "}</span>
              <span className="text-[var(--theme-accent-text)]">
                {features.titleHighlight}
              </span>
            </span>

          </div>

          {/* 2nd Div: Top Description - NO ANIMATION */}
          <div className="w-full max-w-[720px] lg:max-w-none lg:w-[38%] lg:shrink-0 lg:pt-2 mx-auto lg:mx-0">
            <p className="pb-4 md:pb-6 lg:pb-[19px] font-lato text-sm lg:text-base align-middle text-[var(--theme-Features-text-right)] text-center lg:text-left">
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
              className="group flex cursor-pointer flex-col lg:flex-row items-center justify-between border-b border-[var(--theme-border-color)] py-6 md:py-8 transition-colors duration-300 hover:border-[#D97967] text-center lg:text-left"
            >

              {/* 1st Div: Image + Title */}
              <div className="flex w-full flex-col lg:flex-row items-center gap-3 md:gap-4 lg:gap-8 lg:w-[52%] mb-2 md:mb-3 lg:mb-0">

                {/* Image */}
                <div className="h-24 w-36 md:h-28 md:w-44 lg:h-20 lg:w-32 shrink-0 overflow-hidden rounded-md md:rounded-lg mx-auto lg:mx-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>

                {/* Title */}
                <h3 className="mr-0 lg:mr-4 font-poppins text-base md:text-base lg:text-xl font-medium text-[var(--theme-Features-img-text-left)] transition-colors duration-300 group-hover:text-[#D05741] text-center lg:text-left">
                  {(item.title)}
                </h3>

              </div>

              {/* 2nd Div: Heading + Description */}
              <div className="w-full max-w-[680px] lg:max-w-none lg:w-[38%] lg:shrink-0 mt-1 md:mt-2 lg:mt-0 text-center lg:text-left mx-auto lg:mx-0">

                <h3 className="font-poppins text-sm md:text-sm lg:text-base font-medium leading-[1.3] text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741] text-center lg:text-left">
                  {item.heading}
                </h3>

                <p className="mt-1 md:mt-1.5 font-poppins text-xs md:text-xs lg:text-sm font-normal leading-relaxed text-[var(--theme-title-text)] text-center lg:text-left">
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