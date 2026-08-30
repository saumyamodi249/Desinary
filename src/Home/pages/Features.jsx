import { features } from "../data/data";

export default function Features() {
  return (
    <section className="w-full bg-[var(--theme-bg-primary)] px-[120px] py-[108px]">
      
      {/* Container */}
      <div className="mx-auto w-full max-w-[1480px]">
        
        {/* Main Header Wrapper */}
        <div className="flex flex-col justify-between md:flex-row md:items-start">
          
          {/* 1st Div: Title */}
          <div className="w-full font-poppins text-5xl font-semibold tracking-tight text-[var(--theme-Features-heading)]">
            
            <span className="block">
              {features.titleLine1}
            </span>
            <span className="whitespace-nowrap">
              {features.titleLine2Prefix}{" "}
              <span className="text-[var(--theme-accent-text)]">
                {features.titleHighlight}
              </span>
            </span>

          </div>

          {/* 2nd Div: Top Description */}
          <div className="w-full gap-[10px] md:w-[38%] md:shrink-0 md:pt-2">
            <p className="pb-[19px] font-lato text-base text-[var(--theme-Features-text-right)] align-middle">
              {features.description}
            </p>
          </div>

        </div>

        {/* Feature Items List */}
        <div className="mt-[60px]">
          
          {features.items.map((item, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col justify-between  border-b border-[var(--theme-border-color)] py-6 transition-colors duration-300 hover:border-[#D97967] md:flex-row md:items-center md:py-8"
            >
              
              {/* 1st Div: Image + Title */}
              <div className="flex w-full items-center gap-6 sm:gap-8 md:w-[52%]">
                
                {/* Image */}
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-sm sm:h-20 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>

                {/* Title */}
                <h3 className="mr-[17rem] font-poppins text-[20px] font-medium text-[var(--theme-Features-img-text-left)] transition-colors duration-300 group-hover:text-[#D05741]">
                  {item.title}
                </h3>

              </div>

              {/* 2nd Div: Heading + Description */}
              <div className="w-full md:w-[38%] md:shrink-0">
                
                <h3 className="font-poppins text-xl font-medium leading-[1.3] text-[var(--theme-title-text)] transition-colors duration-300 group-hover:text-[#D05741]">
                  {item.heading}
                </h3>

                <p className="mt-1 font-poppins text-[14px] font-normal leading-relaxed text-[var(--theme-body-text)] align-middle">
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