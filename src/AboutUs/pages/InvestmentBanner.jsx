import { motion } from "motion/react";
import { investmentBannerData } from "../data/data";

export default function InvestmentBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Image */}
      <img
        src={investmentBannerData.Image}
        alt="Interior transformed with Desinary"
        className="h-[260px] md:h-[380px] lg:h-[520px] w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-0">
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
          className="flex h-auto w-full max-w-[340px] md:max-w-[720px] lg:max-w-[780px] items-center justify-center rounded-lg bg-black/60 text-center shadow-2xl backdrop-blur-sm"
        >
          <h2 className="text-center text-[20px] md:text-[24px] lg:text-[32px] font-bold tracking-tight text-white capitalize leading-snug lg:leading-tight">
            <span className="block py-4 md:py-6 lg:py-8 px-6 md:px-8 lg:px-12">
              {/* Desktop view (lg+) */}
              <span className="hidden lg:block">
                Build Tomorrow's World Now An
                <br />
                Investment Platform To Enable You
              </span>

              {/* Tablet view (md to < lg) */}
              <span className="hidden md:block lg:hidden">
                Build Tomorrow's World Now An Investment Platform To
                <br />
                Enable You
              </span>

              {/* Mobile view (< md) */}
              <span className="block md:hidden">
                {investmentBannerData.heading}
              </span>
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}