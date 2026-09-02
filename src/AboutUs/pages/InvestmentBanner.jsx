import { investmentBannerData } from "../data/data";

export default function InvestmentBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Image */}
      <img
        src={investmentBannerData.Image}
        alt="Interior transformed with Desinary"
        className="h-screen w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pr-[263px] pt-[234px]  pl-[275px] pb-[222px]">
        <div className="flex h-[128px] w-[742px] items-center justify-center rounded bg-black/60 p-4 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-center text-[32px] font-bold tracking-tight text-white capitalize">
            <span className="block p-4">{investmentBannerData.heading}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
