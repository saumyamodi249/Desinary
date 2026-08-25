import { PiPlusThin } from "react-icons/pi";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[850px] h-[80vh] lg:h-[100vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* Main Container */}
      <div className="relative h-full w-full max-w-[1400px] px-6 md:px-10 lg:px-12 pt-24 lg:pt-12 translate-x-[20px] translate-y-10">

          <h1 className="font-[Poppins] font-semibold text-[48px] align-middle max-w-full md:max-w-xl lg:max-w-2xl text-left">
            Smarter Interiors Start Here
          </h1>

          <h1 className="font-[Poppins] font-semibold text-[48px]  align-middle mb-8 max-w-full md:max-w-xl lg:max-w-2xl text-left">
            — Welcome to{" "}
            <span className="text-[#D97967]">Desinary</span>
          </h1>

          <p className="font-[Poppins] font-normal text-[14px]  tracking-[0%] align-middle max-w-[100%] md:max-w-lg lg:max-w-md text-left !text-[#656565] !mb-8">
            Design your space the way you want with the power of AI and the
            freedom to personalize. Fast, intuitive, and beautifully
            intelligent - this is interior design, reimagined for you.
          </p>

          <button
            type="button"
            className="mt-4 lg:mt-8 flex items-center gap-2 rounded-md bg-[var(--theme-btn-bg)] px-[10px] py-[8px] font-[Poppins] font-normal text-[14px]     tracking-[0%] align-middle text-white transition-all duration-300 ease-in-out hover:bg-[var(--theme-btn-bg-hover)] sm:px-[14px] lg:py-[10px]"
          >
            Start Designing

            <img
              src="/Home/1st/arrow.svg"
              alt="Arrow"
              className="h-3.5 w-3.5 translate-y-[1px]"
            />
          </button>
        </div>

        {/* Clients */}
        <div className="absolute bottom-6 left-6 md:left-10 lg:left-12 z-20">

          <div className="flex items-center">
            <img
              src="/Home/1st/4th person.svg"
              alt="Client"
              className="relative z-10 w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
            />

            <img
              src="/Home/1st/3rd person.svg"
              alt="Client"
              className="relative z-20 -ml-4 w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
            />

            <img
              src="/Home/1st/2nd person.svg"
              alt="Client"
              className="relative z-30 -ml-4 w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
            />

            <img
              src="/Home/1st/1st person.svg"
              alt="Client"
              className="relative z-40 -ml-4 w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-[3px] border-[#D97967]"
            />
          </div>

          <div className="flex items-center mt-2 gap-1">
            <span className="flex items-center text-center lg:text-left font-normal text-[24px] text-[var(--theme-black)] whitespace-nowrap">
              200
              <PiPlusThin className="inline-block w-4 h-4 lg:w-6 lg:h-6  font-normal text-[24px] text-[var(--theme-black)]" />
            </span>

            <span className="ml-1 text-sm sm:text-base md:text-xl lg:text-3xl font-normal text-[24px] text-[#D97967] whitespace-nowrap">
              Clients
            </span>
          </div>

        </div>
      
    </section>
  );
}