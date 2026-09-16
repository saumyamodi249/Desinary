import { motion } from "motion/react";
import { transformBanner } from "../data/data";

export default function TransformBanner() {
  const title =
    transformBanner.title ||
    `${transformBanner.titleLine1 || ""} ${transformBanner.titleLine2 || ""}`.trim();

  // Split into 2 lines at "With" so it doesn't overflow onto 1 giant line on lg
  const breakWord = "With";
  const breakIndex = title.indexOf(breakWord);
  const line1 =
    breakIndex !== -1 ? title.slice(0, breakIndex).trimEnd() : title;
  const line2 = breakIndex !== -1 ? title.slice(breakIndex) : "";

  return (
    <section className="relative overflow-hidden">
      {/* Full Background Hall Image */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-[260px] md:h-[380px] lg:h-full w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:pr-[263px] lg:pl-[275px] lg:pt-[234px] lg:pb-[222px]">
        {/* 60% Transparent Box Banner */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex h-auto w-full max-w-[340px] md:max-w-[620px] lg:max-w-[780px] items-center justify-center rounded-xl bg-black/60 px-6  lg:px-20 py-4  lg:py-8 text-center font-bold shadow-2xl backdrop-blur-md border border-white/10"
        >
          <h2 className="text-center text-xl md:text-2xl lg:text-[32px] font-bold tracking-tight text-white capitalize">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              {line1}
            </span>
            {line2 && (
              <span className="block whitespace-normal lg:whitespace-nowrap  lg:mt-[10px]">
                {line2}
              </span>
            )}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
