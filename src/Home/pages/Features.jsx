import { motion } from "motion/react";
import { features } from "../data/data";

export default function Features() {
  return (
    <section className="w-full bg-[var(--theme-bg-primary)] px-[120px] py-[108px] max-md:px-4 max-md:py-12">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1480px]">

        {/* Main Header Wrapper */}
        <div className="flex flex-col justify-between md:flex-row md:items-start max-md:items-center max-md:text-center">

          {/* 1st Div: Title - NO ANIMATION */}
          <div className="w-full font-poppins text-5xl font-semibold tracking-tight text-[var(--theme-Features-heading)] max-md:text-3xl mb-[15px]">

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
          <div className="w-full gap-[10px] md:w-[38%] md:shrink-0 md:pt-2">
            <p className="pb-[19px] font-lato text-base align-middle text-[var(--theme-Features-text-right)] max-md:text-sm max-md:pb-4 ">
              {features.description}
            </p>
          </div>

        </div>

        {/* Feature Items List */}
        <div className="mt-[60px] max-md:mt-8">

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
              className="group flex cursor-pointer flex-col justify-between border-b border-[var(--theme-border-color)] py-6 transition-colors duration-300 hover:border-[#D97967] md:flex-row md:items-center md:py-8 max-md:items-center max-md:text-center"
            >

              {/* 1st Div: Image + Title */}
              <div className="flex w-full items-center gap-6 sm:gap-8 md:w-[52%] max-md:flex-col max-md:gap-3 max-md:mb-3">

                {/* Image */}
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-sm sm:h-20 sm:w-32 max-md:h-28 max-md:w-44 max-md:rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>

                {/* Title */}
                <h3 className="mr-[17rem] font-poppins text-[20px] font-medium text-[var(--theme-Features-img-text-left)] transition-colors duration-300 group-hover:text-[#D05741] max-md:mr-0 max-md:text-lg">
                  {item.title}
                </h3>

              </div>

              {/* 2nd Div: Heading + Description */}
              <div className="w-full md:w-[38%] md:shrink-0 max-md:mt-2">

                <h3 className="font-poppins text-xl font-medium leading-[1.3] text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741] max-md:text-base">
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