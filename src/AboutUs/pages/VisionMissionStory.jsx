import React from "react";
import { motion } from "motion/react";
import { visionMissionStoryData } from "../data/data";

const VisionMissionStory = () => {
  return (
    <section className="w-full bg-[var(--theme-bg)] px-[120px] py-[80px] transition-colors duration-300">
      <div className="relative mx-auto h-[680px] w-full max-w-[1200px]">

        {visionMissionStoryData.map((item, index) => {
          const leftOffset = index * 200;
          const topOffset = index * 215;

          return (
            <motion.div
              key={item.id}

              /* Smoothly comes from below */
              initial={{
                opacity: 0,
                y: 170,
              }}

              /* Settles into its original position */
              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1.1,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              className="
                absolute
                flex
                items-start
                gap-[137px]
                rounded-md
                border
                border-[var(--theme-vision-mission-story-border)]
                bg-[var(--theme-vision-mission-story-box)]
                px-[32px]
                pt-[32px]
                pb-[50px]
                transition-all
                duration-300
                hover:bg-[var(--theme-vision-mission-story-hover-box)]
                hover:border-[var(--theme-vision-mission-story-hover-border)]
              "

              style={{
                top: `${topOffset}px`,
                left: `${leftOffset}px`,
                width: `calc(100% - ${leftOffset}px)`,
                height: "240px",
              }}
            >
              {/* Title + Description */}
              <div className="flex items-start gap-[137px]">

                <h2 className="w-[180px] shrink-0 text-[32px] text-[var(--theme-bg-Testimonials-title-text)]">
                  {item.title}
                </h2>

                <p className="w-[450px] text-[14px] font-normal leading-relaxed text-[var(--theme-vision-mission-story-description)]">
                  {item.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default VisionMissionStory;