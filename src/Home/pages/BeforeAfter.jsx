import { useState } from "react";
import { beforeAfter } from "../data/data";

export default function BeforeAfter() {
  const [split, setSplit] = useState(50);

  return (
    <section className="mx-auto bg-[var(--theme-bg-page)] px-[120px] py-[108px] text-center">

      {/* TITLE */}
      <h2 className="font-poppins text-5xl font-semibold text-[var(--theme-BeforeAfter-title)]">
        {beforeAfter.titlePrefix}

        <span className="text-[var(--theme-BeforeAfter-text-org)]">
          {beforeAfter.titleHighlight}
        </span>

        {beforeAfter.titleSuffix}
      </h2>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-6 max-w-xl text-center font-poppins text-[14px] font-normal text-[var(--theme-bg-BeforeAfter-description)]">
        {beforeAfter.description}
      </p>

      {/* BEFORE / AFTER BOX */}
      <div
        className="
          relative
          mx-auto
          mt-[60px]
          h-[650px]
          w-full
          max-w-[1600px]
          overflow-hidden
          rounded-sm
        "
      >

        {/* ================= AFTER IMAGE ================= */}
        <img
          src={beforeAfter.after}
          alt="After Desinary redesign"
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
          "
        />

        {/* ================= BEFORE IMAGE ================= */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            z-10
            overflow-hidden
          "
          style={{
            width: `${split}%`,
          }}
        >
          <img
            src={beforeAfter.before}
            alt="Before Desinary redesign"
            className="
              absolute
              left-0
              top-0
              h-[650px]
              w-[1400px]
              max-w-none
              object-cover
            "
          />
        </div>

        {/* ================= VERTICAL DIVIDER LINE ================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            z-50
            w-[3px]
            -translate-x-1/2
            bg-[var(--theme-FAQ-BeforeAfter-hover)]
          "
          style={{
            left: `${split}%`,
          }}
        />

        {/* ================= BEFORE LABEL ================= */}
        <div
          className="
            pointer-events-none
            absolute
            top-1/2
            z-40
            -translate-x-full
            -translate-y-1/2
            rounded-l-md
            bg-[var(--theme-FAQ-BeforeAfter-left-right)]
            px-5
            py-3
            font-poppins
            text-[16px]
            font-medium
            text-white
            whitespace-nowrap
          "
          style={{
            left: `${split}%`,
          }}
        >
          Before
        </div>

        {/* ================= AFTER LABEL ================= */}
        <div
          className="
            pointer-events-none
            absolute
            top-1/2
            z-40
            -translate-y-1/2
            rounded-r-md
            bg-[var(--theme-FAQ-BeforeAfter-left-right)]
            px-5
            py-3
            font-poppins
            text-[16px]
            font-medium
            text-white
            whitespace-nowrap
          "
          style={{
            left: `${split}%`,
          }}
        >
          After
        </div>

        {/* ================= RANGE SLIDER ================= */}
        <input
          type="range"
          min="0"
          max="100"
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="
            absolute
            inset-0
            z-[60]
            h-full
            w-full
            cursor-ew-resize
            opacity-0
          "
        />

      </div>
    </section>
  );
}