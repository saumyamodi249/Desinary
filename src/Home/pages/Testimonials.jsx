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

    const handleWheel = (e) => {
      if (!e.target.closest(".testimonial-card")) return;

      e.preventDefault();

      const swiper = swiperRef.current;

      if (!swiper || swiper.destroyed) return;

      if (e.deltaY > 0) {
        swiper.slideNext();
      } else if (e.deltaY < 0) {
        swiper.slidePrev();
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="w-full bg-[var(--theme-about-us-bg)] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

       {/* ================= HEADER ================= */}
<div className="grid grid-cols-1 gap-10 md:grid-cols-2">

  {/* TITLE */}
  <div>
    <h2 className="  whitespace-nowrap text-5xl font-extrabold leading-[1.2] tracking-tight text-[var(--theme-title-text)] ">
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
    <p className="max-w-[500px] font-poppins text-[14px] font-normal leading-[1.8] text-[var(--theme-body-text)] align-middle">
      {testimonials.description}
    </p>
  </div>

</div>

        {/* ================= REVIEW SLIDER ================= */}
        <div
          ref={sliderContainerRef}
          className="relative mt-10"
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
            spaceBetween={20}
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
                spaceBetween: 15,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 2.35,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 2.35,
                spaceBetween: 20,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.reviews.map((review, index) => (
              <SwiperSlide
  key={index}
  className="!h-[168px] !overflow-visible !p-[1px]"
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
      rounded-md
      border
      border-solid
      border-[var(--theme-about-us-border)]
      bg-[var(--theme-card-bg)]
      p-3
      transition-all
      duration-300
      ease-out
      hover:z-10
      hover:scale-[1.03]
      hover:border-[var(--theme-about-us-border-hover)]
      hover:bg-[var(--theme-about-us-bg-hover)]
      lg:gap-6
      lg:p-7
    "
  >
                  {/* IMAGE */}
                  <div className="h-[128px] w-[128px] shrink-0 overflow-hidden rounded-[4px]">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">

                    {/* STARS */}
                    <div className="mb-5 flex gap-[4px]">
                      {Array.from({
                        length: review.rating,
                      }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-[22px] leading-none text-[#D97662]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* QUOTE */}
                    <p className="line-clamp-3 font-poppins text-[14px] font-normal leading-[1.7] text-[var(--theme-body-text)] align-middle">
                      {review.quote}
                    </p>

                    {/* NAME */}
                    <p className="mt-4 text-[18px] font-medium text-[var(--theme-title-text)]">
                      {review.name}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================= CONTROLS ================= */}
          <div
            className="
              mt-7
              flex
              w-full
              items-center
              justify-center
              gap-4
            "
          >

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
      </div>
    </section>
  );
}