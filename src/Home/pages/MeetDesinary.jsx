import { meetDesinary } from "../data/data";

export default function MeetDesinary() {
  return (
    <section className="meet-desinary-page w-full">
      <div className=" px-[120px] pt-[108px] pb-[60px]">
        {/* Top Content */}
        <div className="mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] md:gap-14 ">
          {/* Heading */}
          <div className="flex w-full max-w-[600px] items-start">
            <h2 className="w-full max-w-[750px] text-[48px] font-semibold   text-[var(--theme-title-text)] -translate-y-4 -translate-x-16 ">
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
            <div className="space-y-4 font-[Poppins] text-[14px] font-normal  text-[var(--theme-bg-MeetDesinary-description)]">
              {meetDesinary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

    <div className="mx-auto mb-[108px] w-full max-w-[1270px]">
  <div className="w-full border rounded border-[var(--theme-bg-MeetDesinary-border)] bg-[var(--theme-bg-MeetDesinary-box)] py-[16px]  pl-[89px] pr-[90px] shadow-sm">
    {/* Inner Container */}
    <div className="mx-auto flex max-w-[1140px] items-center justify-between">
      {meetDesinary.stats.map((s, index) => (
        <div
          key={s.label}
          className="flex flex-1 items-center justify-between"
        >
          {/* Stat Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="font-[Poppins] text-center text-[32px] font-medium text-[var(--theme-bg-MeetDesinary)]">
              {s.value}
            </p>

            <p className="mt-1 font-[Poppins] text-center text-[14px] font-normal text-[var(--theme-bg-MeetDesinary-box-text)]">
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
