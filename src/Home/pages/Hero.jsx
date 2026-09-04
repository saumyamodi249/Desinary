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
      className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* Main Container */}
      <div className="relative w-full lg:w-[70%] px-[120px] pt-[93px] pb-[207px]">

        {/* Heading 1 */}
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
          className="font-[Poppins] font-semibold text-[48px] align-middle max-w-full lg:max-w-2xl text-left"
        >
          Smarter Interiors Start Here
        </motion.h1>

        {/* Heading 2 */}
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
          className="font-[Poppins] font-semibold text-[48px] align-middle mb-8 max-w-full lg:max-w-2xl text-left"
        >
          — Welcome to <span className="text-[#D97967]">Desinary</span>
        </motion.h1>

        <div className="mb-16">

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
            className="max-w-2xl !mb-8 text-left font-[Poppins] text-[14px] font-normal align-middle !text-[#656565]"
          >
            Whether you prefer AI precision or hands-on control, Desinary lets
            you design interiors your way — smarter, faster, and beautifully
            tailored.
          </motion.p>

          {/* Button */}
         <motion.button
  type="button"
  initial={{ opacity: 0, y: 30}}
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
  className="flex items-center gap-2 rounded-md bg-[var(--theme-btn-bg)] px-[10px] py-[8px] font-[Poppins] text-[14px] font-normal text-white"
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

      {/* Clients Section */}
      <div className="relative w-full mx-auto">
        <div className="relative z-20 w-full px-[118px] pb-[103px]">

          {/* Client Images */}
          <div className="flex items-center">

            {/* Client 1 */}
            <motion.img
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              src="/Home/1st/4th person.svg"
              alt="Client"
              className="relative z-10 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
            />

            {/* Client 2 */}
            <motion.img
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              src="/Home/1st/3rd person.svg"
              alt="Client"
              className="relative z-20 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
            />

            {/* Client 3 */}
            <motion.img
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              src="/Home/1st/2nd person.svg"
              alt="Client"
              className="relative z-30 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
            />

            {/* Client 4 */}
            <motion.img
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              src="/Home/1st/1st person.svg"
              alt="Client"
              className="relative z-40 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
            />
          </div>

          {/* Client Count */}
          <motion.div
            ref={countRef}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-2 flex items-center gap-1"
          >
            <span className="flex items-center text-[36px] font-normal text-[var(--theme-black)]">
              {clientCount}
              <PiPlusThin className="h-6 w-6" />
            </span>

            <span className="text-[36px] font-normal text-[#D97967]">
              Clients
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}