import { useEffect, useRef, useState } from "react";
import { PiPlusThin } from "react-icons/pi";
import { motion, useInView } from "motion/react";

export default function Hero() {
  const [clientCount, setClientCount] = useState(0);

  // Counter ko viewport ke saath trigger karne ke liye
  const countRef = useRef(null);

  const isCountInView = useInView(countRef, {
    once: true,
    amount: 0.2,
  });

  // 0 → 200 counter
  useEffect(() => {
    if (!isCountInView) return;

    const duration = 1400;
    const startTime = performance.now();
    let animationFrame;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(easedProgress * 200);

      setClientCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setClientCount(200);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isCountInView]);

  return (
    <section
      className="relative h-full w-full overflow-hidden bg-cover bg-right bg-no-repeat md:bg-center"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative w-full px-4 pb-6 pt-10 md:px-10 md:pb-12 md:pt-16 lg:w-[70%] lg:px-[120px] lg:pb-[207px] lg:pt-[93px]">

        {/* ================= HEADING 1 ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 170 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="mx-auto max-w-full text-center font-[Poppins] text-[26px] font-semibold leading-tight align-middle md:mx-0 md:text-left md:text-[36px] lg:max-w-2xl lg:text-[48px]"
        >
          Smarter Interiors Start
          <span className="hidden md:inline"> Here</span>
        </motion.h1>

        {/* ================= HEADING 2 ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 170 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="mx-auto mb-6 max-w-full text-center font-[Poppins] text-[26px] font-semibold leading-tight align-middle md:mx-0 md:mb-8 md:text-left md:text-[36px] lg:max-w-2xl lg:text-[48px]"
        >
          <span className="whitespace-nowrap">
            <span className="inline md:hidden">Here </span>— Welcome to
          </span>{" "}
          <span className="mt-1 block text-[#D97967] md:mt-0 md:inline">
            Desinary
          </span>
        </motion.h1>

        {/* ================= DESCRIPTION + BUTTON ================= */}
        <div className="mb-6 flex flex-col items-center md:mb-12 md:items-start lg:mb-16">

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 170 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            viewport={{
              amount: 0.2,
              once: true,
            }}
            className="mx-auto mb-6 max-w-2xl text-center font-[Poppins] text-[13px] font-normal align-middle !text-[#656565] md:mx-0 md:mb-8 md:text-left md:text-[14px]"
          >
            Whether you prefer AI precision or hands-on control, Desinary lets
            you design interiors your way — smarter, faster, and beautifully
            tailored.
          </motion.p>

          {/* Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeInOut",
            }}
            viewport={{
              amount: 0.2,
              once: true,
            }}
            className="flex items-center gap-2 rounded-md bg-[var(--theme-btn-bg)] px-5 py-2.5 font-[Poppins] text-[14px] font-normal text-white md:px-[10px] md:py-[8px]"
          >
            Start Designing

            <img
              src="/Home/1st/arrow.svg"
              alt="Arrow"
              className="h-3.5 w-3.5 translate-y-[1px]"
            />
          </motion.button>
        </div>
      </div>

      {/* ================= CLIENTS SECTION ================= */}
      <div className="relative mx-auto w-full">
        <div className="relative z-20 flex w-full flex-col items-center px-4 pb-12 md:items-start md:px-10 md:pb-16 lg:px-[118px] lg:pb-[103px]">

          {/* ================= CLIENT IMAGES ================= */}
          <div className="flex items-center justify-center md:justify-start">

            {/* Client 1 */}
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src="/Home/1st/4th person.svg"
              alt="Client"
              className="relative z-10 h-[38px] w-[38px] cursor-pointer rounded-full border-2 border-[#D97967] object-cover md:h-[58px] md:w-[58px] md:border-[3px]"
            />

            {/* Client 2 */}
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src="/Home/1st/3rd person.svg"
              alt="Client"
              className="relative z-20 -ml-2.5 h-[38px] w-[38px] cursor-pointer rounded-full border-2 border-[#D97967] object-cover md:-ml-4 md:h-[58px] md:w-[58px] md:border-[3px]"
            />

            {/* Client 3 */}
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src="/Home/1st/2nd person.svg"
              alt="Client"
              className="relative z-30 -ml-2.5 h-[38px] w-[38px] cursor-pointer rounded-full border-2 border-[#D97967] object-cover md:-ml-4 md:h-[58px] md:w-[58px] md:border-[3px]"
            />

            {/* Client 4 */}
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src="/Home/1st/1st person.svg"
              alt="Client"
              className="relative z-40 -ml-2.5 h-[38px] w-[38px] cursor-pointer rounded-full border-2 border-[#D97967] object-cover md:-ml-4 md:h-[58px] md:w-[58px] md:border-[3px]"
            />
          </div>

          {/* ================= CLIENT COUNT ================= */}
          <motion.div
            ref={countRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            className="mt-1 flex items-center justify-center gap-1 md:mt-2 md:justify-start"
          >
            <span className="flex items-center text-[20px] font-normal text-[var(--theme-black)] md:text-[36px]">
              {clientCount}
              <PiPlusThin className="h-4 w-4 md:h-6 md:w-6" />
            </span>

            <span className="text-[20px] font-normal text-[#D97967] md:text-[36px]">
              Clients
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}