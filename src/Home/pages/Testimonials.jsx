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
    <section className="w-full overflow-hidden bg-[var(--theme-about-us-bg)] py-[108px] max-md:py-12">
      {/* ================= HEADER ================= */}
      <div className="mx-auto w-full max-w-[1520px] px-[120px] max-md:px-4">
        <div className="grid grid-cols-1 gap-15 md:grid-cols-2 max-md:text-center max-md:items-center">
          {/* TITLE */}
          <div>
            <h2 className=" text-5xl font-semibold tracking-tight text-[var(--theme-bg-Testimonials-title-text)] max-md:text-3xl">
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
            <p className="max-w-[500px] font-poppins text-sm font-normal text-[var(--theme-bg-Testimonials-title-description)] max-md:max-w-xl max-md:mx-auto">
              {testimonials.description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div
        ref={sliderContainerRef}
        className="relative mt-[60px] w-full overflow-visible max-md:mt-8 max-md:px-4"
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

            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },

            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },

            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },

            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="testimonials-swiper !overflow-visible"
        >
          {testimonials.reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="!h-[180px] !overflow-visible max-md:!h-auto max-md:min-h-[160px]"
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
                  gap-8
                  rounded-md
                  border
                  border-solid
                  border-[var(--theme-about-us-border)]
                  bg-[var(--theme-bg-Testimonials-bg)]
                  p-8
                  transition-all
                  duration-300
                  ease-out
                  hover:z-10
                  hover:scale-[1.03]
                  hover:border-[var(--theme-about-us-border-hover)]
                  hover:bg-[var(--theme-about-us-bg)]
                  lg:gap-8
                  lg:p-7
                  max-md:gap-4
                  max-md:p-4
                  max-md:rounded-xl
                "
              >
                {/* IMAGE */}
                <div className="h-[128px] w-[128px] shrink-0 overflow-hidden rounded-[4px] max-md:h-[95px] max-md:w-[95px] max-md:rounded-lg">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex h-full min-w-0 flex-1 flex-col justify-between py-1">
                  {/* STARS */}
                  <div className="flex gap-[6.62px] mb-[15.96px] max-md:gap-1 max-md:mb-2">
                    {Array.from({
                      length: review.rating,
                    }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className="text-[22px] leading-none text-[#D97662] max-md:text-[18px]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* QUOTE + NAME */}
                  <div>
                    <p className="line-clamp-2 font-poppins text-[14px] font-normal mb-[15.96px] text-[var(--theme-bg-Testimonials-title-description)] max-md:line-clamp-3 max-md:text-xs max-md:mb-2">
                      {review.quote}
                    </p>

                    <p className="mt-4 text-[18px] font-medium text-[var(--theme-title-text)] max-md:mt-1 max-md:text-base">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= CONTROLS ================= */}
        <div className="mt-7 flex w-full items-center justify-center gap-4 max-md:mt-6 max-md:gap-6">
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
              text-gray-400
              transition
              hover:text-[#D97662]
              max-md:text-[#D97662]
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
              flex
              items-center
              justify-center
              gap-2
              max-md:hidden
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