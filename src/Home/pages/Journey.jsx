import { journey } from "../data/data";

export default function Journey() {
  return (
    <section className="w-full bg-[var(--theme-bg-journey)] py-[108px] ">
      {/* Heading */}
      <div className="mb-[60px] flex flex-col items-center gap-6 text-center">
        <h2 className="text-5xl font-semibold text-[var(--theme-title-text)] ">
          {journey.titlePrefix}{" "}
          <span className="text-[var(--theme-bg-bg-box-hover)]">
            {journey.titleHighlight}
          </span>
          <span> {journey.titlePostfix}</span>
        </h2>

        <p className="mx-auto mt-4 px-10  max-w-[650px] text-sm text-[var(--theme-journey-text-small)]">
          {journey.subtitle}
        </p>
      </div>

      {/* Journey Cards */}
<div className="w-full mx-auto px-[120px] ">
          <div className="space-y-10 rounded-lg  bg-[var(--theme-bg-journey)] pl-9 pb-7 pt-[29px]">
          {journey.steps.map((step, i) => (
            <div
              key={step.number}
              className={`group flex w-full flex-col items-center  rounded-lg border border-[var(--theme-border-color)] bg-[var(--theme-bg-primary)] transition-all duration-300 hover:border-[var(--theme-bg-bg-box-hover)] hover:shadow-xl sm:p-8 lg:flex-row lg:gap-10 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full shrink-0 overflow-hidden rounded-lg lg:w-[48%]">
                <img
                  src={step.image}
                  alt={step.title}
                  className=" h-[362px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex w-full flex-col justify-center gap-4 space-y-4 px-2 lg:w-[46%] lg:px-6">
                <span className="text-xl font-medium  text-[var(--theme-journey-number)] ">
                  {step.number}
                </span>

                <h3 className="text-xl font-medium mr-52 text-[var(--theme-journey-title)]">
                  {step.title}
                </h3>

                <p className="text-sm font-normal  text-[var(--theme-journey-description)] ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* ================= RESULT SECTION ================= */}
          <div className="group flex w-full flex-col items-center rounded-lg border border-[var(--theme-border-color)] bg-[var(--theme-bg-primary)] p-6 transition-all duration-300 hover:shadow-xl sm:p-8 lg:flex-row lg:gap-x-8  ">
            {/* Result Image - LEFT */}
            <div className="w-full shrink-0 overflow-hidden rounded-lg lg:w-[48%] ">
              <img
                src={journey.result.image}
                alt="The Result"
                className="w-full aspect-[7.67%] object-cover  transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Result Content - RIGHT */}
            <div className="flex w-full flex-col justify-center space-y-4 w-[50%] px-8 py-[100px]">
              <h3
                className="text-[20px] font-medium tracking-tight text-[var(--theme-journey-title) ] 
              
              "
              >
                {journey.result.titlePrefix}{" "}
                <span className="text-coral-500">
                  {journey.result.titleHighlight}
                </span>
                {journey.result.titlePostfix}
              </h3>

              <div className="space-y-5">
                {journey.result.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0">
                      <img
                        src="/Home/2nd/double right.svg"
                        alt=""
                        className="h-5 w-5 mx-1 object-contain"
                      />
                    </span>

                    <p className="text-normal  leading-relaxed text-[var(--theme-journey-description)] ">
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
