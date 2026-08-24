import { meetDesinary } from "../data/data";

export default function MeetDesinary() {
  return (
<section className="meet-desinary-page w-full">
        <div className="w-full px-10 py-16 md:px-12 md:py-20 lg:px-4 lg:py-16">
        {/* Top Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Heading */}
          <div className="flex w-full items-start justify-center lg:translate-x-20 lg:translate-y-12">
            <h2
              className="
                max-w-[760px]
                font-['Poppins',sans-serif]
                text-[48px]
                font-bold
                leading-[1.2]
                tracking-[-1.8px]
                text-[var(--theme-title-text)]
                md:text-[52px]
                lg:text-[50px]
                lg:leading-[1.5]
                
              "
            >
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight}
              </span>

              {meetDesinary.titleSuffix}
              <br />
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight2}
              </span>
            </h2>
          </div>

          {/* Description */}
        <div className="w-full max-w-[560px] pt-1 lg:mr-24 lg:pt-0">
            <div
              className="
                space-y-7
                font-['Poppins',sans-serif]
                text-[16px]
                font-normal
                leading-[1.75]
                text-[var(--theme-body-text)]
                md:text-[17px]
                lg:text-[13px]
                lg:leading-[2.25]
                translate-y-4
                translate-x-1
              "
            >
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[4px]
            border
            border-[var(--theme-border-color)]
            bg-[var(--theme-card-bg)]
            md:mt-20
            lg:mt-24
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {meetDesinary.stats.map((s, index) => (
              <div
                key={s.label}
                className={`
                  flex
                  min-h-[115px]
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-6
                  text-center

                  ${index !== 0 ? "border-l border-[var(--theme-divider-color)]" : ""}

                  ${
                    index === 1 || index === 2 || index === 3
                      ? "border-t border-[var(--theme-divider-color)] md:border-t-0"
                      : ""
                  }
                `}
              >
                <p
                  className="
                    font-['Poppins',sans-serif]
                    text-[34px]
                    font-semibold
                    leading-none
                    tracking-[-1px]
                    text-[var(--theme-title-text)]
                    md:text-[36px]
                  "
                >
                  {s.value}
                </p>

                <p
                  className="
                    mt-3
                    font-['Poppins',sans-serif]
                    text-[14px]
                    font-normal
                    text-[var(--theme-accent-text)]
                    md:text-[15px]
                  "
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
