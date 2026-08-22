import { useState } from "react";
import { beforeAfter } from "../data/data";

export default function BeforeAfter() {
  const [split, setSplit] = useState(50);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-ink-900 md:text-4xl">
        {beforeAfter.titlePrefix}
        <span className="text-coral-500">{beforeAfter.titleHighlight}</span>
        {beforeAfter.titleSuffix}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
        {beforeAfter.description}
      </p>

      <div className="relative mx-auto mt-10 h-[320px] max-w-4xl overflow-hidden rounded-2xl md:h-[420px]">
        <img
          src={beforeAfter.after}
          alt="After Desinary redesign"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${split}%` }}
        >
          <img
            src={beforeAfter.before}
            alt="Before Desinary redesign"
            className="h-full w-full max-w-4xl object-cover"
          />
        </div>

        {/* divider line + handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-coral-500"
          style={{ left: `${split}%` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-coral-500/90 px-3 py-1 text-xs font-semibold text-white">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-coral-500/90 px-3 py-1 text-xs font-semibold text-white">
          After
        </span>
      </div>
    </section>
  );
}
