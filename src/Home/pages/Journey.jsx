import { journey } from "../data/data";

export default function Journey() {
  return (
    <section className="w-full bg-[var(--theme-bg-journey)] py-16 md:py-24">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-extrabold text-[var(--theme-title-text)] md:text-5xl">
          {journey.titlePrefix}{" "}
          <span className="text-coral-500">{journey.titleHighlight}</span>
          <span> {journey.titlePostfix}</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--theme-body-text)] md:text-base">
          {journey.subtitle}
        </p>
      </div>

      {/* Main Outer Box */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="space-y-10 rounded-[36px] bg-[var(--theme-bg-journey)] p-6 md:p-10">
          {journey.steps.map((step, i) => (
            /* Inside Card Box */
            <div
  key={step.number}
  className={`group flex w-full flex-col items-center gap-8 rounded-[30px] border border-[var(--theme-border-color)] bg-[var(--theme-bg-primary)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--theme-bg-bg-box-hover)] hover:shadow-xl sm:p-8 lg:flex-row lg:gap-14 lg:p-10
     ${
    i % 2 === 1 ? "lg:flex-row-reverse" : ""
  }`}
>
              {/* Wide Rectangle Image */}
              <div className="w-full shrink-0 overflow-hidden rounded-[20px] lg:w-[54%]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="aspect-[16/11] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex w-full flex-col justify-center space-y-4 px-2 lg:w-[46%] lg:px-4">
                <span className="text-xl font-bold text-[var(--theme-divider-color)] md:text-2xl">
                  {step.number}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-[var(--theme-title-text)] md:text-4xl">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--theme-body-text)] md:text-[17px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}