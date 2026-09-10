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
    <section className="meet-desinary-page w-full pb-[108px] max-md:pb-8">
      <div className="px-[120px] pt-[108px] pb-[60px] max-md:px-4 max-md:pt-12 max-md:pb-6">
        {/* Top Content */}
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 md:grid-cols-[1.05fr_0.95fr] md:gap-14">

          {/* Heading */}
          <div className="flex w-full max-w-[600px] items-start max-md:items-center max-md:justify-center max-md:mx-auto">
            <h2 className="w-full max-w-[750px] -translate-x-16 -translate-y-4 text-[48px] font-semibold text-[var(--theme-title-text)] max-md:translate-x-0 max-md:translate-y-0 max-md:text-3xl max-md:text-center max-md:mb-6">
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
          <div className="w-full max-w-[520px] max-md:mx-auto">
            <div className="space-y-4 font-[Poppins] text-[15px] font-normal text-[var(--theme-bg-MeetDesinary-description)] max-md:text-center">
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto w-full max-w-[1270px] bg-[var(--theme-bg-MeetDesinary-description)] max-md:bg-transparent max-md:px-4">
        <div className="w-full rounded-sm border border-[var(--theme-bg-MeetDesinary-border)] bg-[var(--theme-bg-MeetDesinary-box)] py-[16px] pl-[89px] pr-[90px] shadow-sm max-md:px-3 max-md:py-3 max-md:rounded-xl">

          {/* Inner Container */}
          <div className="relative mx-auto flex max-w-[1140px] items-center justify-between max-md:grid max-md:grid-cols-2 max-md:gap-0">
            {/* Small screen '+' cross divider lines */}
            <div className="hidden max-md:block absolute top-2 bottom-2 left-1/2 w-[1px] -translate-x-1/2 bg-[var(--theme-divider-color)] opacity-70 pointer-events-none" />
            <div className="hidden max-md:block absolute left-2 right-2 top-1/2 h-[1px] -translate-y-1/2 bg-[var(--theme-divider-color)] opacity-70 pointer-events-none" />

            {meetDesinary.stats.map((s, index) => {
              // On mobile, match screenshot: 125k+ (top-left), 50k+ (top-right), 12+ (bottom-left), 30+ (bottom-right)
              const mobileOrder =
                index === 1
                  ? "max-md:order-1"
                  : index === 0
                  ? "max-md:order-2"
                  : index === 3
                  ? "max-md:order-3"
                  : "max-md:order-4";

              return (
                <div
                  key={s.label}
                  className={`flex flex-1 items-center justify-between max-md:py-5 max-md:px-2 ${mobileOrder}`}
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
                    <div className="hidden h-14 w-[1px] bg-[var(--theme-divider-color)] opacity-70 sm:block max-md:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}