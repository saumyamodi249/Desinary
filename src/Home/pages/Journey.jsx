import { motion } from "motion/react";
import { journey } from "../data/data";

export default function Journey() {
  return (
    <section className="w-full bg-[var(--theme-bg-journey)] py-12 md:py-16 lg:py-[108px]">
      {/* Heading */}
      <div className="mb-8 md:mb-12 lg:mb-[60px] flex flex-col items-center gap-4 md:gap-6 text-center px-4 md:px-10 lg:px-0">
        <h2 className="text-[24px] md:text-4xl lg:text-5xl font-semibold text-[var(--theme-journey-title)]">
          {journey.titlePrefix}{" "}
          <span className="text-[var(--theme-bg-bg-box-hover)]">
            {journey.titleHighlight}
          </span>
          <span> {journey.titlePostfix}</span>
        </h2>

        <p className="mx-auto mt-2 md:mt-4 max-w-[650px] px-2 md:px-10 text-[12px] lg:text-sm text-[var(--theme-journey-text-small)]">
          {journey.subtitle}
        </p>
      </div>

      {/* Journey Cards */}
      <div className="mx-auto w-full px-4 md:px-10 lg:px-[120px]">
        <div className="space-y-6 md:space-y-8 lg:space-y-10 rounded-lg bg-transparent lg:bg-[var(--theme-bg-journey)] p-0 lg:pb-7 lg:pl-9 lg:pt-[29px]">
          {journey.steps.map((step, i) => (
            <div
              key={step.number}
              className={`group flex w-full flex-col lg:flex-row items-center rounded-2xl border border-[var(--theme-border-color)] bg-[var(--theme-bg-primary)] p-3.5 sm:p-5 md:p-8 lg:gap-10 transition-all duration-300 hover:border-[var(--theme-bg-bg-box-hover)] hover:shadow-xl ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className="w-full md:max-w-[360px] lg:max-w-none lg:w-[48%] shrink-0 overflow-hidden rounded-xl mx-auto lg:mx-0 mb-4 md:mb-6 lg:mb-0">
                <motion.img
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.08 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  src={step.image}
                  alt={step.title}
                  className="h-[160px] md:h-[210px] lg:h-[362px] w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex w-full flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2 md:gap-3 px-1 sm:px-3 md:px-4 lg:w-[46%] lg:px-6">
                <span className="text-[16px] md:text-base lg:text-xl font-medium text-[var(--theme-journey-number)] text-center lg:text-left">
                  {step.number}
                </span>

                <h3 className="text-base md:text-base lg:text-xl font-medium text-[var(--theme-journey-title)] text-center lg:text-left">
                  {step.title}
                </h3>

                <p className="text-xs md:text-xs lg:text-sm  font-normal text-[var(--theme-journey-description)] text-left leading-relaxed w-full">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* ================= RESULT SECTION ================= */}
          <div className="group flex w-full flex-col lg:flex-row items-center rounded-2xl border border-[var(--theme-border-color)] bg-[var(--theme-bg-primary)] p-3.5 sm:p-5 md:p-8 lg:gap-10 transition-all duration-300 hover:border-[var(--theme-bg-bg-box-hover)] hover:shadow-xl">


            {/* Result Image - LEFT */}
            <div className="w-full md:max-w-[360px] lg:max-w-none lg:w-[48%] shrink-0 overflow-hidden rounded-xl mx-auto lg:mx-0 mb-4 md:mb-6 lg:mb-0">
              <motion.img
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.08 }}
                whileHover={{ scale: 1.12 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                src={journey.result.image}
                alt="The Result"
                className="h-[160px] md:h-[210px] lg:h-[362px] w-full object-cover"
              />
            </div>

            {/* Result Content - RIGHT */}
            <div className="flex w-full flex-col justify-center items-center lg:items-start text-center lg:text-left gap-3 md:gap-4 px-1 sm:px-3 md:px-4 lg:w-[46%] lg:px-6">

              <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-[var(--theme-journey-title)] text-center lg:text-left">
                {journey.result.titlePrefix}{" "}
                <span className="text-coral-500">
                  {journey.result.titleHighlight}
                </span>
                {journey.result.titlePostfix}
              </h3>

              <div className="space-y-3 md:space-y-4 text-left w-full">
                {journey.result.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 shrink-0">
                      <img
                        src="/Home/2nd/double right.svg"
                        alt=""
                        className="mx-1 h-5 w-5 object-contain"
                      />
                    </span>

                    <p className="text-[13px] md:text-sm leading-relaxed text-[var(--theme-journey-description)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}