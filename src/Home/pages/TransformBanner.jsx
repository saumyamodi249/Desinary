import { transformBanner } from "../data/data";

export default function TransformBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Screen Image */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-full w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pl-[275px] pr-[263px] pt-[234px] pb-[222px]">
        {/* Dark Box with wider max-width taaki 'Masterpiece' 1st line mein rahe */}
<div className="w-[742px] h-[128px] gap-[10px] rounded bg-black/60 p-4 text-center font-bold shadow-2xl backdrop-blur-xs">
          <h2 className="text-[32px] font-bold tracking-tight text-white text-center capitalize">
            <span className="block whitespace-nowrap">
              {transformBanner.titleLine1}
            </span>
            <span className="block whitespace-nowrap">
              {transformBanner.titleLine2}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}