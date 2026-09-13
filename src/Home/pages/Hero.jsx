import { useEffect, useRef, useState } from "react";
import { PiPlusThin } from "react-icons/pi";
import { motion, useInView } from "motion/react";

export default function Hero() {
  const [clientCount, setClientCount] = useState(0);

  const countRef = useRef(null);

  const isCountInView = useInView(countRef, {
    once: true,
    amount: 0.2,
  });

  // ================= CLIENT COUNTER =================

  useEffect(() => {
    if (!isCountInView) return;

    const duration = 1400;
    const startTime = performance.now();

    let animationFrame;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

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
      className="
        relative
        h-full
        w-full
        overflow-hidden
        bg-cover
        bg-right
        bg-no-repeat
        md:bg-center
      "
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          w-full

          /* ================= MOBILE ================= */
          px-4
          pt-10
          pb-3

          /* ================= TABLET ================= */
          md:px-10
          md:pt-14
          md:pb-5

          /* ================= LAPTOP ================= */
          lg:w-[70%]
          lg:px-[120px]
          lg:pt-[93px]
          lg:pb-[207px]
        "
      >
        {/* =====================================================
            HEADING 1
        ====================================================== */}

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
          className="
            mx-auto
            max-w-full
            text-center
            font-[Poppins]
            font-semibold
            align-middle
            text-[#2a110d]

            /* MOBILE */
            text-[24px]
            leading-[1.2]

            /* TABLET */
            md:max-w-[650px]
            md:text-[36px]
            md:leading-[1.15]

            /* LAPTOP */
            lg:mx-0
            lg:max-w-2xl
            lg:text-left
            lg:text-[48px]
            lg:leading-tight
          "
        >
          Smarter Interiors Start
          <span className="hidden md:inline"> Here</span>
        </motion.h1>

        {/* =====================================================
            HEADING 2
        ====================================================== */}

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
          className="
            mx-auto
            max-w-full
            text-center
            font-[Poppins]
            font-semibold
            align-middle
            text-[#2a110d]

            /* MOBILE */
            mb-4
            text-[24px]
            leading-[1.2]

            /* TABLET */
            md:mb-5
            md:max-w-[650px]
            md:text-[36px]
            md:leading-[1.15]

            /* LAPTOP */
            lg:mx-0
            lg:mb-6
            lg:max-w-2xl
            lg:text-left
            lg:text-[48px]
            lg:leading-tight
          "
        >
          <span className="whitespace-nowrap">
            <span className="inline md:hidden">Here </span>— Welcome to
          </span>{" "}
          <span
            className="
              mt-1
              block
              text-[#D97967]

              md:mt-0
              md:inline
            "
          >
            Desinary
          </span>
        </motion.h1>

        {/* =====================================================
            DESCRIPTION + BUTTON
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            items-center

            /* MOBILE */
            mb-3

            /* TABLET */
            md:mb-5

            /* LAPTOP */
            lg:mb-16
            lg:items-start
          "
        >
          {/* ================= PARAGRAPH ================= */}

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
            className="
              mx-auto
              max-w-full
              text-center
              font-[Poppins]
              font-normal
              align-middle
              !text-[#656565]

              /* MOBILE */
              mb-4
              text-[13px]
              leading-[1.8]

              /* TABLET */
              md:mb-5
              md:max-w-[400px]
              md:text-[13px]
              md:leading-[1.75]

              /* LAPTOP */
              lg:mx-0
              lg:mb-8
              lg:max-w-2xl
              lg:text-left
              lg:text-[14px]
              lg:leading-normal
            "
          >
            Whether you prefer AI precision or hands-on control, Desinary lets
            you design interiors your way — smarter, faster, and beautifully
            tailored.
          </motion.p>

          {/* ================= BUTTON ================= */}

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
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-[var(--theme-btn-bg)]
              font-[Poppins]
              font-normal
              text-white

              /* MOBILE */
              px-5
              py-2.5
              text-[14px]

              /* TABLET */
              md:px-5
              md:py-2.5
              md:text-[14px]

              /* LAPTOP */
              lg:px-[10px]
              lg:py-[8px]
              lg:text-[14px]
            "
          >
            Start Designing

            <img
              src="/Home/1st/arrow.svg"
              alt="Arrow"
              className="
                h-3.5
                w-3.5
                translate-y-[1px]
              "
            />
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          CLIENTS SECTION
      ====================================================== */}

      <div className="relative mx-auto w-full">
        <div
          className="
            relative
            z-20
            flex
            w-full
            flex-col
            items-center

            /* MOBILE */
            px-4
            pb-3

            /* TABLET */
            md:px-10
            md:pb-5

            /* LAPTOP */
            lg:items-start
            lg:px-[118px]
            lg:pb-[103px]
          "
        >
          {/* =================================================
              CLIENT IMAGES
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-center

              lg:justify-start
            "
          >
            {/* ================= CLIENT 1 ================= */}

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
                amount: 0,
                margin: "0px 0px -50px 0px",
              }}
              src="/Home/1st/4th person.svg"
              alt="Client"
              className="
                relative
                z-10
                cursor-pointer
                rounded-full
                border-2
                border-[#D97967]
                object-cover

                /* MOBILE */
                h-[34px]
                w-[34px]

                /* TABLET - SMALL */
                md:h-[32px]
                md:w-[32px]

                /* LAPTOP */
                lg:h-[58px]
                lg:w-[58px]
                lg:border-[3px]
              "
            />

            {/* ================= CLIENT 2 ================= */}

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
                amount: 0,
                margin: "0px 0px -50px 0px",
              }}
              src="/Home/1st/3rd person.svg"
              alt="Client"
              className="
                relative
                z-20
                -ml-2
                cursor-pointer
                rounded-full
                border-2
                border-[#D97967]
                object-cover

                /* MOBILE */
                h-[34px]
                w-[34px]

                /* TABLET - SMALL */
                md:h-[32px]
                md:w-[32px]
                md:-ml-2

                /* LAPTOP */
                lg:h-[58px]
                lg:w-[58px]
                lg:-ml-4
                lg:border-[3px]
              "
            />

            {/* ================= CLIENT 3 ================= */}

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
                amount: 0,
                margin: "0px 0px -50px 0px",
              }}
              src="/Home/1st/2nd person.svg"
              alt="Client"
              className="
                relative
                z-30
                -ml-2
                cursor-pointer
                rounded-full
                border-2
                border-[#D97967]
                object-cover

                /* MOBILE */
                h-[34px]
                w-[34px]

                /* TABLET - SMALL */
                md:h-[32px]
                md:w-[32px]
                md:-ml-2

                /* LAPTOP */
                lg:h-[58px]
                lg:w-[58px]
                lg:-ml-4
                lg:border-[3px]
              "
            />

            {/* ================= CLIENT 4 ================= */}

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
                amount: 0,
                margin: "0px 0px -50px 0px",
              }}
              src="/Home/1st/1st person.svg"
              alt="Client"
              className="
                relative
                z-40
                -ml-2
                cursor-pointer
                rounded-full
                border-2
                border-[#D97967]
                object-cover

                /* MOBILE */
                h-[34px]
                w-[34px]

                /* TABLET - SMALL */
                md:h-[32px]
                md:w-[32px]
                md:-ml-2

                /* LAPTOP */
                lg:h-[58px]
                lg:w-[58px]
                lg:-ml-4
                lg:border-[3px]
              "
            />
          </div>

          {/* =================================================
              CLIENT COUNT
          ================================================== */}

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
              amount: 0,
              margin: "0px 0px -50px 0px",
            }}
            className="
              flex
              items-center
              justify-center
              gap-1

              /* MOBILE */
              mt-0

              /* TABLET */
              md:mt-0

              /* LAPTOP */
              lg:mt-[-3px]
              lg:justify-start
            "
          >
            {/* ================= NUMBER ================= */}

            <span
              className="
                flex
                items-center
                font-normal
                text-[var(--theme-black)]

                /* MOBILE */
                text-[20px]

                /* TABLET - SMALL */
                md:text-[20px]

                /* LAPTOP */
                lg:text-[36px]
              "
            >
              {clientCount}

              <PiPlusThin
                className="
                  h-4
                  w-4

                  /* TABLET - SMALL */
                  md:h-4
                  md:w-4

                  /* LAPTOP */
                  lg:h-6
                  lg:w-6
                "
              />
            </span>

            {/* ================= CLIENTS ================= */}

            <span
              className="
                font-normal
                text-[#D97967]

                /* MOBILE */
                text-[20px]

                /* TABLET - SMALL */
                md:text-[20px]

                /* LAPTOP */
                lg:text-[36px]
              "
            >
              Clients
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}