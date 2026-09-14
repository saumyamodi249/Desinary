import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { meetDesinary } from "../data/data";

function AnimatedStat({ value }) {
  const statRef = useRef(null);

  const isInView = useInView(statRef, {
    once: true,
    amount: 0.3,
  });

  const [count, setCount] = useState(0);

  // Value ko split karna:
  // 50K+  → 50 + K+
  // 125K+ → 125 + K+
  // 30+   → 30 + +
  const match = String(value).match(/^(\d+)(.*)$/);

  const number = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();

    let animationFrame;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(easedProgress * number);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(number);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, number]);

  return (
    <motion.p
      ref={statRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="text-center font-[Poppins] text-[32px] font-medium text-[var(--theme-bg-MeetDesinary)]"
    >
      {count}
      {suffix}
    </motion.p>
  );
}

export default function MeetDesinary() {
  return (
    <section className="meet-desinary-page w-full pb-12 md:pb-20 lg:pb-[108px]">
      <div className="px-4 md:px-4 lg:px-[120px] pt-12 md:pt-16 lg:pt-[108px] pb-8 md:pb-12 lg:pb-[60px]">
        {/* Top Content */}
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Heading */}
          <div className="flex w-full items-center justify-center mx-auto lg:max-w-[600px] lg:items-start lg:justify-start lg:mx-0">
            <h2 className="w-full text-center text-[24px] font-semibold text-[var(--theme-title-text)] mb-6 md:text-[36px] md:leading-[1.3] lg:max-w-[750px] lg:text-left lg:text-[48px] lg:leading-tight lg:-translate-x-16 lg:-translate-y-4">
              <span className="block">
                <span className="text-[var(--theme-accent-text)]">
                  {meetDesinary.titleHighlight}
                </span>{" "}
                <span className="text-[var(--theme-bg-MeetDesinary)]">
                  {meetDesinary.titleSuffix}
                </span>
              </span>

              <span className="block text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight2}
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[720px] mx-auto lg:mx-0 lg:max-w-[520px]">
            <div className="space-y-6 font-[Poppins] text-[13px] md:text-[12px] font-normal text-[var(--theme-bg-MeetDesinary-description)] text-center lg:text-left">
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto w-full max-w-[1270px] bg-transparent lg:bg-[var(--theme-bg-MeetDesinary-description)] px-4 md:px-10 lg:px-0">
        <div className="w-full rounded-xl md:rounded-lg lg:rounded-sm border border-[var(--theme-bg-MeetDesinary-border)] bg-[var(--theme-bg-MeetDesinary-box)] py-3 md:py-4 lg:py-[16px] px-3 md:px-6 lg:pl-[89px] lg:pr-[90px] shadow-sm">
          {/* Inner Container */}
          <div className="relative mx-auto grid grid-cols-2 md:flex max-w-[1140px] items-center justify-between gap-0">
            {/* Small screen '+' cross divider lines */}
            <div className="block md:hidden absolute top-2 bottom-2 left-1/2 w-[1px] -translate-x-1/2 bg-[var(--theme-divider-color)] opacity-70 pointer-events-none" />
            <div className="block md:hidden absolute left-2 right-2 top-1/2 h-[1px] -translate-y-1/2 bg-[var(--theme-divider-color)] opacity-70 pointer-events-none" />

            {meetDesinary.stats.map((s, index) => (
              <div
                key={s.label}
                className="flex flex-1 items-center justify-between py-4 px-2 md:py-4 md:px-4 lg:py-0 lg:px-0"
              >
                {/* Stat Content */}
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  {/* Animated Number */}
                  <AnimatedStat value={s.value} />

                  {/* Label */}
                  <p className="mt-1 text-center font-[Poppins] text-[14px] font-normal text-[var(--theme-bg-MeetDesinary-box-text)]">
                    {s.label}
                  </p>
                </div>

                {/* Vertical Divider */}
                {index !== meetDesinary.stats.length - 1 && (
                  <div className="hidden md:block h-14 w-[1px] bg-[var(--theme-divider-color)] opacity-70 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
