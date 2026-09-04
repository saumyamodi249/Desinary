import { motion } from "motion/react";
import { transformBanner } from "../data/data";

export default function TransformBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Screen Image */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-full w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pl-[275px] pr-[263px] pt-[234px] pb-[222px]">
        
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
          className="flex h-[128px] w-[742px] items-center justify-center gap-[10px] rounded bg-black/60 p-4 text-center font-bold shadow-2xl backdrop-blur-xs"
        >
          <h2 className="text-center text-[32px] font-bold tracking-tight text-white capitalize">
            <span className="block whitespace-nowrap">
              {transformBanner.titleLine1}
            </span>

            <span className="block whitespace-nowrap">
              {transformBanner.titleLine2}
            </span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}