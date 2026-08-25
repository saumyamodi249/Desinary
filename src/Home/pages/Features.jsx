import { features } from "../data/data";

export default function Features() {
  const line1 = features?.titleLine1 || features?.titlePrefix || "Trusted Choice for";
  const line2Prefix = features?.titleLine2Prefix || "Interior";
  const highlight = features?.titleHighlight || "Innovation";

  return (
    <section className="w-full bg-[var(--theme-bg-primary)] pt-12 pb-16 md:pt-16 md:pb-20">
      {/* Container */}
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        
        {/* Main Header Wrapper */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          
          {/* 1st Div: Title */}
          <div className="w-full md:w-[59%] font-poppins text-[32px] font-semibold leading-[1.2] tracking-tight text-[var(--theme-title-text)] sm:text-[38px] lg:text-[48px]">
              <span className="block">{line1}</span>
              <span className="whitespace-nowrap">
                {line2Prefix}{" "}
                <span className="text-[var(--theme-accent-text)]">
                  {highlight}
                </span>
              </span>
            
          </div>

          {/* 2nd Div: Top Description */}
          <div className="w-full md:w-[38%] md:shrink-0 md:pt-2">
            <p className="font-lato text-[16px] font-normal leading-[170%] text-[var(--theme-Features-text-right)] align-middle">
              {features.description}
            </p>
          </div>

        </div>

        {/* Feature Items List */}
        <div className="mt-14">
          {features.items.map((item, index) => {
            const headingText = item.heading || item.title || `Feature ${index + 1}`;

            return (
              <div
                key={headingText + index}
                className="group flex cursor-pointer flex-col justify-between gap-8 border-b border-[var(--theme-border-color)] py-6 transition-colors duration-300 hover:border-[#D97967] md:flex-row md:items-center md:py-8"
              >
                {/* 1st Div: Compact Box + Heading */}
                <div className="flex w-full items-center gap-6 sm:gap-8 md:w-[52%]">
                  
                  {/* Compact Outer Box (Frame static rahega) */}
                 <div className="h-16 w-24 shrink-0 overflow-hidden rounded-sm sm:h-20 sm:w-32">
  <img
    src={item.image}
    alt={headingText}
    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
  />
</div>          

                  {/* Heading Text */}
                  <h3 className="font-poppins text-[20px] font-medium text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741]">
                    {headingText}
                  </h3>
                </div>

                {/* 2nd Div: Row Description */}
                <div className="w-full md:w-[38%] md:shrink-0">
  <h3 className="font-poppins text-xl font-medium leading-[1.3] text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741]">
    {item.heading}
  </h3>

  <p className="mt-1 font-poppins text-[14px] font-normal leading-relaxed text-[var(--theme-body-text)] align-middle">
    {item.description}
  </p>
</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}