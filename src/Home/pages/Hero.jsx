import { PiPlusThin } from "react-icons/pi";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[850px] h-[80vh] lg:h-[100vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full w-full items-start">
        {/* Main Container */}
        <div className="relative h-full w-full max-w-[1400px] px-6 md:px-10 lg:px-12 pt-24 lg:pt-12 translate-x-[20px]">

          {/* =========================
              HERO CONTENT
              Smart → Start Designing
          ========================== */}
          <div className="relative translate-y-10">
            
            {/* Heading 1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !font-semibold !mb-8 max-w-full md:max-w-xl lg:max-w-2xl lh-70 text-left">
              Smarter Interiors Start Here
            </h1>

            {/* Heading 2 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !font-semibold !mb-8 max-w-full md:max-w-xl lg:max-w-2xl lh-70 text-left">
              — Welcome to{" "}
              <span className="text-[#D97967]">Desinary</span>
            </h1>

            {/* Description */}
            <p className="text-xs lg:text-sm max-w-[100%] md:max-w-lg lg:max-w-md text-left !text-[#656565] !mb-8">
              Design your space the way you want with the power of AI and the
              freedom to personalize. Fast, intuitive, and beautifully
              intelligent - this is interior design, reimagined for you.
            </p>

            {/* Start Designing Button */}
            <div className="mt-4 lg:mt-8">
              <button
                type="button"
                className="text-sm lg:text-base rounded-md bg-[var(--theme-btn-bg)] px-[10px] sm:px-[14px] py-[8px] lg:py-[10px] !text-[var(--theme-bg-primary)] tracking-wide transition-all duration-300 ease-in-out hover:bg-[var(--theme-btn-bg-hover)] flex gap-2 items-center"
              >
                Start Designing

                <img
                  src="/Home/1st/arrow.svg"
                  alt="Arrow"
                  className="h-3.5 w-3.5 translate-y-[1px]"
                />
              </button>
            </div>
          </div>

          {/* =========================
              CLIENTS
              Fixed to Hero Bottom
          ========================== */}
          <div className="absolute bottom-6 left-6 md:left-10 lg:left-12 z-20">

            {/* Profile Images */}
            <div className="flex items-center">

              {/* 4th Person */}
              <div className="relative z-10">
                <img
                  src="/Home/1st/4th person.svg"
                  alt="Client"
                  className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
                />
              </div>

              {/* 3rd Person */}
              <div className="relative z-20 -ml-4">
                <img
                  src="/Home/1st/3rd person.svg"
                  alt="Client"
                  className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
                />
              </div>

              {/* 2nd Person */}
              <div className="relative z-30 -ml-4">
                <img
                  src="/Home/1st/2nd person.svg"
                  alt="Client"
                  className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
                />
              </div>

              {/* 1st Person */}
              <div className="relative z-40 -ml-4">
                <img
                  src="/Home/1st/1st person.svg"
                  alt="Client"
                  className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
                />
              </div>
            </div>

            {/* Client Count */}
            <div className="flex items-center mt-4">

              <span className="flex items-center text-center lg:text-left text-sm sm:text-base md:text-xl lg:text-3xl font-semibold text-[var(--theme-black)] whitespace-nowrap">
                200

                <PiPlusThin className="inline-block w-4 h-4 lg:w-6 lg:h-6" />
              </span>

              <span className="ml-1 text-sm sm:text-base md:text-xl lg:text-3xl font-semibold text-[#D97967] whitespace-nowrap">
                Clients
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}