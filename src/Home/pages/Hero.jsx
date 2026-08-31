import { PiPlusThin } from "react-icons/pi";

export default function Hero() {
  return (
    <section
      className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* Main Container */}
      <div className="relative w-full lg:w-[70%]  px-[120px] pt-[93px] pb-[207px]">
        <h1 className="font-[Poppins] font-semibold text-[48px] align-middle max-w-full  lg:max-w-2xl text-left">
          Smarter Interiors Start Here
        </h1>

        <h1 className="font-[Poppins] font-semibold text-[48px]  align-middle mb-8 max-w-full lg:max-w-2xl text-left">
          — Welcome to <span className="text-[#D97967]">Desinary</span>
        </h1>

        <div className="mb-16">
          <p className="max-w-2xl !mb-8 text-left font-[Poppins] text-[14px] font-normal align-middle !text-[#656565]">
            Whether you prefer AI precision or hands-on control, Desinary lets
            you design interiors your way — smarter, faster, and beautifully
            tailored.
          </p>

          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-[var(--theme-btn-bg)] px-[10px] py-[8px] font-[Poppins] text-[14px] font-normal text-white transition-all duration-300 ease-in-out hover:bg-[var(--theme-btn-bg-hover)]"
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

      <div className="relative w-full mx-auto">
        {/* Clients */}
      {/* Clients */}
<div className="relative z-20 w-full px-[118px] pb-[103px]">
  {/* Client Images */}
  <div className="flex items-center">
    <img
      src="/Home/1st/4th person.svg"
      alt="Client"
      className="relative z-10 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
    />

    <img
      src="/Home/1st/3rd person.svg"
      alt="Client"
      className="relative z-20 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
    />

    <img
      src="/Home/1st/2nd person.svg"
      alt="Client"
      className="relative z-30 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
    />

    <img
      src="/Home/1st/1st person.svg"
      alt="Client"
      className="relative z-40 -ml-4 h-[58px] w-[58px] rounded-full border-[3px] border-[#D97967] object-cover"
    />
  </div>

  {/* Client Count */}
  <div className="mt-2 flex items-center gap-1">
    <span className="flex items-center text-[36px] font-normal text-[var(--theme-black)]">
      200
      <PiPlusThin className="h-6 w-6" />
    </span>

    <span className="text-[36px] font-normal text-[#D97967]">
      Clients
    </span>
  </div>
</div>      </div>
    </section>
  );
}
  