export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[650px] h-[80vh] lg:h-[85vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Home/1st/bed.svg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-start">
        <div className="w-full max-w-[1400px] px-6 md:px-10 lg:px-12 pt-24 lg:pt-28 translate-x-[20px]">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !font-semibold !mb-8 max-w-full md:max-w-xl lg:max-w-2xl lh-70 text-left">
            Smarter Interiors Start Here
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !font-semibold !mb-8 max-w-full md:max-w-xl lg:max-w-2xl lh-70 text-left">
            — Welcome to <span className="text-[#D97967]">Desinary</span>
          </h1>

          {/* Description */}
          <p className="text-xs lg:text-sm max-w-[100%] md:max-w-lg lg:max-w-md text-left !text-[var(--theme-banner-description-color)] !mb-8">
            <p className="text-[#656565]">
            Design your space the way you want with the power of AI and the
            freedom to personalize. Fast, intuitive, and beautifully intelligent
            - this is interior design, reimagined for you.
          </p></p>

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
      </div>
    </section>
  );
}
