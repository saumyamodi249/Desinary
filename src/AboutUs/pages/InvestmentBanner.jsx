import { motion } from "motion/react";
import { investmentBannerData } from "../data/data";

export default function InvestmentBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Image */}
      <img
        src={investmentBannerData.Image}
        alt="Interior transformed with Desinary"
        className="h-[260px] md:h-[380px] lg:h-screen w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10 lg:p-0">
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
          className="flex h-auto w-full max-w-[340px] md:max-w-xl lg:w-[742px] items-center justify-center rounded-lg lg:rounded bg-black/60 text-center shadow-2xl backdrop-blur-sm"
        >
          <h2 className="text-center text-[20px] md:text-[26px] lg:text-[32px] font-bold tracking-tight text-white capitalize leading-snug lg:leading-tight">
            <span className="block py-4 px-6 md:px-[60px]">
              {investmentBannerData.heading}
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}