import { motion } from "motion/react";
import { transformBanner } from "../data/data";

export default function TransformBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Background Hall Image - fully visible */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-[280px] md:h-[400px] lg:h-[540px] w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-12">
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
          className="flex h-auto w-full max-w-[340px] md:max-w-[620px] lg:max-w-[780px] items-center justify-center rounded-xl bg-black/60 px-6 sm:px-10 md:px-16 lg:px-20 py-4 md:py-7 lg:py-8 text-center font-bold shadow-2xl backdrop-blur-md border border-white/10"
        >
          <h2 className="text-center text-xl md:text-2xl lg:text-[32px] font-bold tracking-tight text-white capitalize">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              {transformBanner.title}
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
