import { useEffect, useRef } from "react";
import { testimonials } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function renderDescription() {
  return (
    <>
      Discover how Desinary has transformed ordinary
      <br className="inline md:hidden" />{" "}
      rooms into extraordinary spaces. From first-time
      <br className="inline md:hidden" />{" "}
      users to design
      <br className="hidden md:inline lg:hidden" />{" "}
      enthusiasts, our clients share
      <br className="inline md:hidden" />{" "}
      how intelligent design, seamless tools, and
      <br className="inline md:hidden" />{" "}
      personalized support made all the difference.
    </>
  );
}

export default function Testimonials() {
  const swiperRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const container = sliderContainerRef.current;

    if (!container) return;

    let isScrolling = false;

    const handleWheel = (e) => {
      // Card ke upar scroll karne par bhi slider chalega
      if (!e.target.closest(".testimonial-card")) return;

      const swiper = swiperRef.current;

      if (!swiper || swiper.destroyed) return;

      e.preventDefault();

      // Ek wheel scroll par multiple slides na chale
      if (isScrolling) return;

      if (e.deltaY > 0) {
        // Scroll DOWN → RIGHT
        swiper.slideNext();
      } else if (e.deltaY < 0) {
        // Scroll UP → LEFT
        swiper.slidePrev();
      }

      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[var(--theme-about-us-bg)] py-12 md:py-16 lg:py-[108px]">
      {/* ================= HEADER ================= */}
      <div className="mx-auto w-full max-w-[1520px] px-4 md:px-4 lg:px-[120px]">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start lg:text-left">
          {/* TITLE */}
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--theme-bg-Testimonials-title-text)] leading-snug">
              {/* Default (mobile) & lg (laptop) break */}
              <span className="inline md:hidden lg:inline">
                {testimonials.titlePrefix}
                <br />
                {testimonials.titleLine2Prefix}
              </span>

              {/* md (tablet) break */}
              <span className="hidden md:inline lg:hidden">
                {testimonials.titlePrefix} {testimonials.titleLine2Prefix}
                <br />
              </span>

              <span className="text-[var(--theme-accent-text)]">
                {testimonials.titleHighlight}
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-3 md:mt-4 lg:mt-0 lg:pt-3 lg:pl-12 xl:pl-20">
            <p className="w-full max-w-[480px] md:max-w-none lg:max-w-[500px] font-poppins text-xs md:text-xs lg:text-sm font-normal text-[var(--theme-bg-Testimonials-title-description)] leading-relaxed md:leading-normal lg:leading-relaxed mx-auto lg:mx-0 tracking-tight md:tracking-tight lg:tracking-normal">
              {renderDescription()}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div
        ref={sliderContainerRef}
        className="relative mt-8 md:mt-12 lg:mt-[60px] w-full overflow-visible px-4 md:px-0"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onDestroy={() => {
            swiperRef.current = null;
          }}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={600}
          grabCursor={true}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },

            768: {
              slidesPerView: 1.85,
              spaceBetween: 24,
              centeredSlides: true,
            },

            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              centeredSlides: false,
            },

            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          className="testimonials-swiper overflow-hidden md:!overflow-visible"
        >
          {testimonials.reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="!h-[160px] md:!h-[180px] lg:!h-[180px] !overflow-visible"
            >
              <div
                className="
                  testimonial-card
                  relative
                  z-0
                  flex
                  h-full
                  w-full  
                  items-center
                  gap-4
                  md:gap-8
                  rounded-md
                  border
                  border-solid
                  border-[var(--theme-about-us-border)]
                  bg-[var(--theme-bg-Testimonials-bg)]
                  p-4
                  md:p-8
                  lg:p-7
                  transition-all
                  duration-300
                  ease-out
                  hover:z-10
                  hover:scale-[1.03]
                  hover:border-[var(--theme-about-us-border-hover)]
                  hover:bg-[var(--theme-about-us-bg)]
                "
              >
                {/* IMAGE */}
                <div className="h-[102px] w-[102px] md:h-[128px] md:w-[128px] shrink-0 overflow-hidden rounded-[4px]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex h-full min-w-0 flex-1 flex-col justify-between py-0.5 md:py-1">
                  {/* STARS (TOP) */}
                  <div className="flex gap-1 md:gap-[6.62px]">
                    {Array.from({
                      length: review.rating,
                    }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className="text-[17px] md:text-[22px] leading-none text-[#D97662]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* QUOTE (MIDDLE) */}
                  <p className="line-clamp-2 font-poppins text-xs md:text-[14px] font-normal text-[var(--theme-bg-Testimonials-title-description)]">
                    {review.quote}
                  </p>

                  {/* NAME (BOTTOM) */}
                  <p className="text-sm md:text-[16px] font-medium text-[var(--theme-title-text)]">
                    {review.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= CONTROLS ================= */}
        <div className="mt-7 flex w-full items-center justify-center gap-4">
          {/* LEFT ARROW */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="
              testimonial-prev
              !static
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              p-0
              text-[24px]
              leading-none
              font-light
              text-[#D97662]
              lg:text-gray-400
              transition
              hover:text-[#D97662]
            "
          >
            ←
          </button>

          {/* DOTS */}
          <div
            className="
              testimonial-pagination
              !static
              !m-0
              !w-auto
              !translate-x-0
              hidden
              lg:flex
              items-center
              justify-center
              gap-2
            "
          />

          {/* RIGHT ARROW */}
          <button
            type="button"
            aria-label="Next testimonial"
            className="
              testimonial-next
              !static
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              p-0
              text-[24px]
              leading-none
              font-light
              text-[#D97662]
              transition
              hover:text-[#D97662]
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}