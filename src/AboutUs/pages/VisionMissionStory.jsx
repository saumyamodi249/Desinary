import React from "react";
import { motion } from "motion/react";
import { visionMissionStoryData } from "../data/data";

const VisionMissionStory = () => {
  return (
    <section className="w-full overflow-hidden bg-[var(--theme-bg)] px-4 md:px-8 lg:px-10 xl:px-[120px] py-10 md:py-14 lg:py-[80px] transition-colors duration-300">
      {/* ================= MOBILE & TABLET VIEW (< lg) ================= */}
      <div className="flex flex-col gap-3 lg:hidden w-full max-w-4xl mx-auto">
        {visionMissionStoryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-xl border border-[var(--theme-vision-mission-story-border)] bg-[var(--theme-vision-mission-story-box)] p-6 md:p-8 transition-all duration-300 hover:bg-[var(--theme-vision-mission-story-hover-box)] hover:border-[var(--theme-vision-mission-story-hover-border)]"
          >
            <h2 className="text-[20px] font-medium text-[var(--theme-vision-mission-story)] mb-3 md:mb-4">
              {item.title}
            </h2>
            <p className="text-[12px] font-normal leading-[1.7] text-[var(--theme-vision-mission-story-description)] whitespace-pre-line">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP VIEW (lg+) ================= */}
      <div className="relative mx-auto hidden h-[760px] w-full max-w-[1200px] lg:block">
        {visionMissionStoryData.map((item, index) => {
          const stepOffset = 80;
          const leftOffset = index * stepOffset;
          const topOffset = index * 230;
          const maxOffset = (visionMissionStoryData.length - 1) * stepOffset; // 160px

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 170,
              }}
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
                rounded-md
                border
                border-[var(--theme-vision-mission-story-border)]
                bg-[var(--theme-vision-mission-story-box)]
                px-[32px]
                pt-[32px]
                pb-[36px]
                transition-all
                duration-300
                hover:bg-[var(--theme-vision-mission-story-hover-box)]
                hover:border-[var(--theme-vision-mission-story-hover-border)]
                shadow-sm
              "
              style={{
                top: `${topOffset}px`,
                left: `${leftOffset}px`,
                width: `calc(100% - ${maxOffset}px)`,
                minHeight: index === 2 ? "260px" : "220px",
              }}
            >
              {/* Title + Description */}
              <div className="flex items-start gap-8 xl:gap-14 2xl:gap-16 w-full">
                <h2 className="w-[140px] xl:w-[180px] shrink-0 text-[32px] text-[var(--theme-bg-Testimonials-title-text)]">
                  {item.title}
                </h2>

                <p className="flex-1 text-[14px] font-normal leading-relaxed text-[var(--theme-vision-mission-story-description)] whitespace-pre-line">
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