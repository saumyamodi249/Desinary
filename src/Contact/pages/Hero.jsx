import { hero } from "./data/data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-ink-900 md:text-5xl">
            {hero.titleLine1}
            <br />
            {hero.titleLine2Prefix}
            <span className="text-coral-500">{hero.titleLine2Highlight}</span>
          </h1>
          <p className="mt-5 max-w-md text-gray-500">{hero.description}</p>
          <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white hover:bg-coral-600">
            {hero.ctaLabel} <span aria-hidden>→</span>
          </button>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {hero.avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-ink-900">
              {hero.clientCount}{" "}
              <span className="font-normal text-coral-500">
                {hero.clientLabel}
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={hero.image}
            alt="Modern living room designed with Desinary"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
