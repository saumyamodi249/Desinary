import { transformBanner } from "./data/data";

export default function TransformBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={transformBanner.image}
          alt="Interior transformed with Desinary"
          className="h-[320px] w-full object-cover md:h-[420px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-6 text-center">
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            {transformBanner.titleLine1} {transformBanner.titleLine2}
          </h2>
        </div>
      </div>
    </section>
  );
}
