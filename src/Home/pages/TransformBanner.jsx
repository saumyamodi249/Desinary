import { transformBanner } from "../data/data";

export default function TransformBanner() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Full Screen Image */}
      <img
        src={transformBanner.image}
        alt="Interior transformed with Desinary"
        className="h-full w-full object-cover"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Dark Box with wider max-width taaki 'Masterpiece' 1st line mein rahe */}
        <div className="max-w-[950px] rounded-xl bg-black/65 px-8 py-8 text-center shadow-2xl backdrop-blur-xs sm:px-12 sm:py-10 md:px-16 md:py-12">
          <h2 className="font-poppins text-[22px] font-bold leading-[1.35] tracking-tight text-white sm:text-[28px] md:text-[36px] lg:text-[42px]">
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