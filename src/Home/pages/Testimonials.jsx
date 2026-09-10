import { useEffect, useRef } from "react";
import { testimonials } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="mx-auto w-full max-w-[1520px] px-4 md:px-10 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center md:items-start text-center md:text-left">
          {/* TITLE */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--theme-bg-Testimonials-title-text)]">
              {testimonials.titlePrefix}

              <br />

              {testimonials.titleLine2Prefix}

              <span className="text-[var(--theme-accent-text)]">
                {testimonials.titleHighlight}
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="pt-3 md:pl-12 lg:pl-20">
            <p className="max-w-[500px] font-poppins text-sm font-normal text-[var(--theme-bg-Testimonials-title-description)] mx-auto md:mx-0">
              {testimonials.description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div
        ref={sliderContainerRef}
        className="relative mt-8 md:mt-12 lg:mt-[60px] w-full overflow-visible px-4 md:px-10 lg:px-0"
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="testimonials-swiper !overflow-visible"
        >
          {testimonials.reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto min-h-[160px] md:!h-[180px] !overflow-visible"
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
                  md:gap-6
                  lg:gap-8
                  rounded-xl
                  md:rounded-md
                  border
                  border-solid
                  border-[var(--theme-about-us-border)]
                  bg-[var(--theme-bg-Testimonials-bg)]
                  p-4
                  md:p-6
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
                <div className="h-[95px] w-[95px] md:h-[128px] md:w-[128px] shrink-0 overflow-hidden rounded-lg md:rounded-[4px]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex h-full min-w-0 flex-1 flex-col justify-between py-1">
                  {/* STARS */}
                  <div className="flex gap-1 md:gap-[6.62px] mb-2 md:mb-[15.96px]">
                    {Array.from({
                      length: review.rating,
                    }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className="text-[18px] md:text-[22px] leading-none text-[#D97662]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* QUOTE + NAME */}
                  <div>
                    <p className="line-clamp-3 md:line-clamp-2 font-poppins text-xs md:text-[14px] font-normal mb-2 md:mb-[15.96px] text-[var(--theme-bg-Testimonials-title-description)]">
                      {review.quote}
                    </p>

                    <p className="mt-1 md:mt-4 text-base md:text-[18px] font-medium text-[var(--theme-title-text)]">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= CONTROLS ================= */}
        <div className="mt-6 md:mt-7 flex w-full items-center justify-center gap-6 md:gap-4">
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
              md:text-gray-400
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
              md:flex
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