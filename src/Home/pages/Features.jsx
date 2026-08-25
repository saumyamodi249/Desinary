import { features } from "../data/data";

export default function Features() {
  return (
    <section className="w-full bg-[var(--theme-bg-primary)] pt-4 pb-16 md:pt-6 md:pb-20">
  {/* Container */}
  <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
    
    {/* Main Header Wrapper - Aligned to Top (items-start) */}
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
      
      {/* 1st Div: Title */}
      <div className="w-full md:w-[59%]">
        <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-tight text-[var(--theme-title-text)] sm:text-[38px] lg:text-[60px]">
          <span className="block">{features.titleLine1}</span>
          <span className="whitespace-nowrap">
            {features.titleLine2Prefix}{" "}
            <span className="text-[var(--theme-accent-text)]">
              {features.titleHighlight}
            </span>
          </span>
        </h2>
      </div>

      {/* 2nd Div: Top Description (Top Aligned with subtle margin for baseline balance) */}
      <div className="w-full md:w-[38%] md:shrink-0 md:pt-2">
        <p className="font-lato text-[15px] font-normal leading-[170%] text-[var(--theme-Features-text-right)] md:text-[16px]">
          {features.description}
        </p>
      </div>

    </div>

        {/* Feature Items List (Added border-b for bottom divider) */}
        <div className="mt-14 divide-y divide-[var(--theme-border-color)] border-b border-[var(--theme-border-color)]">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-8 py-7 md:flex-row md:items-center md:py-9"
            >
              {/* 1st Div: Big Rectangle Image + Title */}
              <div className="flex w-full items-center gap-6 sm:gap-8 md:w-[52%]">
                {/* Landscape Rectangle Image Container */}
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-sm bg-transparent sm:h-20 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-poppins text-base font-semibold text-[var(--theme-title-text)] sm:text-lg md:text-[20px]">
                  {item.title}
                </h3>
              </div>

              {/* 2nd Div: Row Description */}
              <div className="w-full md:w-[38%] md:shrink-0">
                <p className="font-lato text-[14px] font-normal leading-relaxed text-[var(--theme-body-text)] md:text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}