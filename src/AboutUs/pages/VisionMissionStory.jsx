import React from "react";
import { motion } from "motion/react";
import { visionMissionStoryData } from "../data/data";

const VisionMissionStory = () => {
  return (
    <section className="w-full overflow-hidden bg-[var(--theme-bg)] px-4 py-10 transition-colors duration-300 md:px-8 md:py-14 lg:px-10 lg:py-[80px] xl:px-[120px]">
      
      {/* ================= 1. MOBILE VIEW (< md) ================= */}
      <div className="flex w-full max-w-md flex-col mx-auto md:hidden">
        {visionMissionStoryData.map((item, index) => {
          const stepOffset = 16;
          const leftOffset = index * stepOffset;
          const maxOffset = (visionMissionStoryData.length - 1) * stepOffset;
          const isFirst = index === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              style={{
                marginLeft: `${leftOffset}px`,
                width: `calc(100% - ${maxOffset}px)`,
                marginTop: isFirst ? "0px" : "-24px",
                zIndex: index + 10,
              }}
              className="relative rounded-xl border border-[var(--theme-vision-mission-story-border)] bg-[var(--theme-vision-mission-story-box)] p-6 shadow-lg transition-all duration-300 hover:border-[var(--theme-vision-mission-story-hover-border)] hover:bg-[var(--theme-vision-mission-story-hover-box)]"
            >
              <h2 className="text-[20px] font-medium text-[var(--theme-vision-mission-story)] mb-3 md:mb-4">
                {item.title}
              </h2>
              <p className="text-[12px] font-normal leading-[1.7] text-[var(--theme-vision-mission-story-description)] whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ================= 2. TABLET VIEW (md to lg) ================= */}
      <div className="mx-auto hidden w-full max-w-[760px] flex-col md:flex lg:hidden">
        {visionMissionStoryData.map((item, index) => {
          const stepOffset = 36;
          const leftOffset = index * stepOffset;
          const maxOffset = (visionMissionStoryData.length - 1) * stepOffset;
          const isFirst = index === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.15 }}
              style={{
                marginLeft: `${leftOffset}px`,
                width: `calc(100% - ${maxOffset}px)`,
                marginTop: isFirst ? "0px" : "-35px",
                zIndex: index + 10,
              }}
              className="relative flex items-start gap-8 rounded-md border border-[var(--theme-vision-mission-story-border)] bg-[var(--theme-vision-mission-story-box)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--theme-vision-mission-story-hover-border)] hover:bg-[var(--theme-vision-mission-story-hover-box)]"
            >
              <h2 className="w-[140px] xl:w-[180px] shrink-0 text-[24px] font-medium text-[var(--theme-bg-Testimonials-title-text)]">
                {item.title}
              </h2>
              <p className="flex-1 text-[14px] font-normal leading-relaxed text-[var(--theme-vision-mission-story-description)] whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ================= 3. LAPTOP / DESKTOP VIEW (lg+) ================= */}
      <div className="relative mx-auto hidden h-[760px] w-full max-w-[1200px] lg:block">
        {visionMissionStoryData.map((item, index) => {
          const stepOffset = 80;
          const leftOffset = index * stepOffset;
          const topOffset = index * 180;
          const maxOffset = (visionMissionStoryData.length - 1) * stepOffset;
          const extraSeparation = index * 40;

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60 + extraSeparation,
              }}
              whileInView={{
                opacity: [0, 1, 1],
                y: [60 + extraSeparation, extraSeparation, 0],
              }}
              transition={{
                duration: 1.3,
                delay: index * 0.2,
                times: [0, 0.45, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              style={{
                top: `${topOffset}px`,
                left: `${leftOffset}px`,
                width: `calc(100% - ${maxOffset}px)`,
                minHeight: index === 2 ? "260px" : "220px",
                zIndex: index + 10,
              }}
              className="absolute flex items-start rounded-md border border-[var(--theme-vision-mission-story-border)] bg-[var(--theme-vision-mission-story-box)] px-[32px] pt-[32px] pb-[36px] shadow-sm transition-all duration-300 hover:border-[var(--theme-vision-mission-story-hover-border)] hover:bg-[var(--theme-vision-mission-story-hover-box)]"
            >
              <div className="flex w-full items-start gap-8 xl:gap-14 2xl:gap-16">
                <h2 className="w-[140px] xl:w-[180px] shrink-0 text-[32px] font-medium text-[var(--theme-bg-Testimonials-title-text)]">
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