import { meetDesinary } from "../data/data";

export default function MeetDesinary() {
  return (
    <section className="meet-desinary-page w-full">
      <div className="w-full px-6 py-12 md:px-12 md:py-16">
        {/* Top Content */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          {/* Heading */}
          <div className="flex w-full items-start justify-center">
            <h2
              className="
                max-w-[760px]
                font-['Poppins',sans-serif]
                text-[36px]
                font-bold
                leading-[1.2]
                tracking-[-1.5px]
                text-[var(--theme-title-text)]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight}
              </span>{" "}
              {meetDesinary.titleSuffix}
              <br />
              <span className="text-[var(--theme-accent-text)]">
                {meetDesinary.titleHighlight2}
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[520px]">
            <div
              className="
                space-y-4
                font-['Poppins',sans-serif]
                text-[14px]
                font-normal
                leading-[1.7]
                text-[var(--theme-body-text)]
                md:text-[15px]
              "
            >
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Small & Compact Centered Stats Box */}
        {/* Stretched Outer Box with Fixed/Stuck Inner Items */}
        <div className="mx-auto mt-12 w-full max-w-[1150px]">
          <div className="w-full rounded-2xl border border-[var(--theme-border-color)] bg-[var(--theme-card-bg)] px-4 py-5 shadow-sm sm:py-6">
            {/* Inner Container: Elements ki location locked rahegi */}
            <div className="mx-auto flex max-w-[850px] items-center justify-between">
              {meetDesinary.stats.map((s, index) => (
                <div
                  key={s.label}
                  className="flex flex-1 items-center justify-between"
                >
                  {/* Stat Content (Fixed size & alignment) */}
                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <p className="font-poppins text-[26px] font-bold tracking-tight text-[var(--theme-title-text)] md:text-[30px]">
                      {s.value}
                    </p>

                    <p className="mt-1 font-poppins text-[12px] font-medium text-[var(--theme-accent-text)] md:text-[13px]">
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
      </div>
    </section>
  );
}
