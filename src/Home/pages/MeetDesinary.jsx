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
    <section className="meet-desinary-page w-full pb-[108px]">
      <div className="px-[120px] pt-[108px] pb-[60px]">
        {/* Top Content */}
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          
          {/* Heading */}
          <div className="flex w-full max-w-[600px] items-start">
            <h2 className="w-full max-w-[750px] -translate-x-16 -translate-y-4 text-[48px] font-semibold text-[var(--theme-title-text)]">
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight}
              </span>{" "}
              <span className="text-[var(--theme-bg-MeetDesinary)]">
                {meetDesinary.titleSuffix}
              </span>
              <br />
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight2}
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[520px]">
            <div className="space-y-4 font-[Poppins] text-[14px] font-normal text-[var(--theme-bg-MeetDesinary-description)]">
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto w-full max-w-[1270px] bg-[var(--theme-bg-MeetDesinary-description)]">
        <div className="w-full rounded-sm border border-[var(--theme-bg-MeetDesinary-border)] bg-[var(--theme-bg-MeetDesinary-box)] py-[16px] pl-[89px] pr-[90px] shadow-sm">
          
          {/* Inner Container */}
          <div className="mx-auto flex max-w-[1140px] items-center justify-between">
            {meetDesinary.stats.map((s, index) => (
              <div
                key={s.label}
                className="flex flex-1 items-center justify-between"
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
                  <div className="hidden h-14 w-[1px] bg-[var(--theme-divider-color)] opacity-70 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}