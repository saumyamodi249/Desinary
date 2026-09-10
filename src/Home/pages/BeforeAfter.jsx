import { useEffect, useRef, useState } from "react";
import { motion, animate } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { beforeAfter } from "../data/data";

export default function BeforeAfter() {
  const [split, setSplit] = useState(50);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1400);

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

  // Cleanup & Resize Listener
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      animationRef.current?.stop();
      window.removeEventListener("resize", updateWidth);
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
    <section className="mx-auto bg-[var(--theme-bg-page)] px-4 md:px-10 lg:px-[120px] py-12 md:py-16 lg:py-[108px] text-center">
      {/* TITLE */}
      <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--theme-BeforeAfter-title)]">
        {beforeAfter.titlePrefix}
        <span className="text-[var(--theme-BeforeAfter-text-org)]">
          {beforeAfter.titleHighlight}
        </span>
        {beforeAfter.titleSuffix}
      </h2>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-4 md:mt-5 lg:mt-6 max-w-xl text-center font-poppins text-[14px] font-normal text-[var(--theme-bg-BeforeAfter-description)]">
        {beforeAfter.description}
      </p>

      {/* BEFORE / AFTER BOX */}
      <motion.div
        ref={containerRef}
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
          mt-8
          md:mt-12
          lg:mt-[60px]
          h-[320px]
          md:h-[480px]
          lg:h-[650px]
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
            style={{
              width: `${containerWidth}px`,
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-full
              lg:h-[650px]
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
            w-1
            md:w-[5px]
            lg:w-[6px]
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
            w-10
            md:w-8
            lg:w-5
            -translate-x-1/2
            cursor-ew-resize
            touch-none
          "
          style={{
            left: `${split}%`,
          }}
        />

        {/* BEFORE LABEL (Desktop) */}
        <div
          className="
            hidden
            lg:block
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

        {/* AFTER LABEL (Desktop) */}
        <div
          className="
            hidden
            lg:block
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

        {/* MOBILE & TABLET CONTROLS (< >) */}
        <div
          className="
            flex
            lg:hidden
            pointer-events-none
            absolute
            top-1/2
            z-40
            -translate-x-1/2
            -translate-y-1/2
            items-center
            shadow-md
          "
          style={{
            left: `${split}%`,
          }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-l bg-[var(--theme-FAQ-BeforeAfter-left-right)] text-white shadow-sm border-r border-white/20">
            <FaChevronLeft className="text-[12px]" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-r bg-[var(--theme-FAQ-BeforeAfter-left-right)] text-white shadow-sm">
            <FaChevronRight className="text-[12px]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
