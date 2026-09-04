import { useEffect, useRef, useState } from "react";
import { motion, animate } from "motion/react";
import { beforeAfter } from "../data/data";

export default function BeforeAfter() {
  const [split, setSplit] = useState(50);

  const isDragging = useRef(false);
  const animationRef = useRef(null);

  // ==========================================
  // RUN DIVIDER ANIMATION
  // 50% (center) -> 90% (right) -> 10% (left) -> 50% (center)
  // ==========================================
  const runSplitAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }

   const controls = animate(
  50,
  [50, 85, 15, 50],
  {
    duration: 2.5,
    times: [0, 0.28, 0.72, 1],
    ease: "easeInOut",
    onUpdate: (value) => {
      if (!isDragging.current) {
        setSplit(value);
      }
    },
    onComplete: () => {
      setSplit(50);
    },
  }
);

    animationRef.current = controls;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      animationRef.current?.stop();
    };
  }, []);

  // ==========================================
  // DRAG START
  // ==========================================
  const handlePointerDown = (e) => {
    isDragging.current = true;

    if (animationRef.current) {
      animationRef.current.stop();
    }

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  // ==========================================
  // DRAG MOVE
  // ==========================================
  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const box = e.currentTarget.parentElement.getBoundingClientRect();
    const newSplit = ((e.clientX - box.left) / box.width) * 100;
    const value = Math.min(100, Math.max(0, newSplit));

    setSplit(value);
  };

  // ==========================================
  // DRAG END
  // ==========================================
  const handlePointerUp = (e) => {
    isDragging.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

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
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        onViewportEnter={runSplitAnimation}
        className="
          relative
          mx-auto
          mt-[60px]
          h-[650px]
          w-full
          max-w-[1600px]
          overflow-hidden
          rounded-sm
          select-none
        "
      >
        {/* AFTER IMAGE */}
        <img
          src={beforeAfter.after}
          alt="After Desinary redesign"
          draggable="false"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
          "
        />

        {/* BEFORE IMAGE */}
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
            draggable="false"
            className="
              pointer-events-none
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

        {/* VERTICAL DIVIDER */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            z-50
            w-[6px]
            -translate-x-1/2
            bg-[var(--theme-FAQ-BeforeAfter-hover)]
          "
          style={{
            left: `${split}%`,
          }}
        />

        {/* INVISIBLE DRAG AREA */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="
            absolute
            inset-y-0
            z-[60]
            w-[20px]
            -translate-x-1/2
            cursor-ew-resize
            touch-none
          "
          style={{
            left: `${split}%`,
          }}
        />

        {/* BEFORE LABEL */}
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
            px-4
            py-[10px]
            font-poppins
            text-[16px]
            font-medium
            whitespace-nowrap
            text-white
          "
          style={{
            left: `${split}%`,
          }}
        >
          Before
        </div>

        {/* AFTER LABEL */}
        <div
          className="
            pointer-events-none
            absolute
            top-1/2
            z-40
            -translate-y-1/2
            rounded-r-md
            bg-[var(--theme-FAQ-BeforeAfter-left-right)]
            px-4
            py-[10px]
            font-poppins
            text-[16px]
            font-medium
            whitespace-nowrap
            text-white
          "
          style={{
            left: `${split}%`,
          }}
        >
          After
        </div>
      </motion.div>
    </section>
  );
}
