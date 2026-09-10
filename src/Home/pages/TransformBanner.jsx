import { motion } from "motion/react";
import { transformBanner } from "../data/data";

export default function TransformBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Screen Image */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-[260px] md:h-[380px] lg:h-full w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10 lg:pl-[275px] lg:pr-[263px] lg:pt-[234px] lg:pb-[222px]">
        
        {/* Dark Box */}
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
          className="flex h-auto w-full max-w-[340px] md:max-w-[620px] lg:h-[128px] lg:w-[742px] items-center justify-center gap-[10px] rounded-lg lg:rounded bg-black/60 p-5 md:p-6 lg:p-4 text-center font-bold shadow-2xl backdrop-blur-sm"
        >
          <h2 className="text-center text-xl md:text-2xl lg:text-[32px] font-bold tracking-tight text-white capitalize">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              {transformBanner.titleLine1}
            </span>

            <span className="block whitespace-normal lg:whitespace-nowrap">
              {transformBanner.titleLine2}
            </span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}