import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { teamData } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  const swiperRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const wheelLockRef = useRef(false);

  const [expandedCard, setExpandedCard] = useState(null);
  // ================= READ MORE / LESS =================
  const toggleReadMore = (id) => {
    setExpandedCard((prevId) => (prevId === id ? null : id));
  };
  // ================= SMOOTH WHEEL =================
  useEffect(() => {
    const container = sliderContainerRef.current;

    if (!container) return;

    const handleWheel = (e) => {
      const swiper = swiperRef.current;

      if (!swiper || swiper.destroyed) return;

      // Sirf cards ke area par wheel
      if (!e.target.closest(".team-card")) return;

      // Agar vertical scroll almost nahi hai toh kuch mat karo
      if (Math.abs(e.deltaY) < 10) return;

      e.preventDefault();

      // Animation / lock ke time next event ignore
      if (wheelLockRef.current || swiper.animating) return;

      wheelLockRef.current = true;

      if (e.deltaY > 0) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }

      // Animation complete hone tak lock
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 650);
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
  useLayoutEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) return;

    requestAnimationFrame(() => {
      if (window.innerWidth < 1024) {
        if (swiper.wrapperEl) {
          swiper.wrapperEl.style.height = "";
        }
        swiper.updateSize();
        swiper.updateSlides();
        swiper.update();
        return;
      }

      const slides = swiper.slides;

      let maxHeight = 0;

      slides.forEach((slide) => {
        const card = slide.querySelector(".team-card");

        if (card) {
          const height = card.getBoundingClientRect().height;

          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });

      swiper.wrapperEl.style.height = `${maxHeight}px`;

      swiper.updateSize();
      swiper.updateSlides();
      swiper.update();
    });
  }, [expandedCard]);

  return (
    <section className="w-full overflow-hidden bg-[var(--theme-bg)] py-10 md:py-14 lg:py-[80px] transition-colors duration-300">
      {/* ================= HEADER ================= */}
      <div className="mx-auto mb-8 md:mb-10 w-full max-w-[1520px] px-4 md:px-10 lg:px-[120px]">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 lg:text-left">
          {/* TITLE */}
          <div className="w-full text-center lg:text-left">
            <h2 className="text-[24px] md:text-[34px] lg:text-[48px] font-semibold leading-[1.3] text-[var(--theme-magic-title)]">
              {/* Desktop View (lg+) */}
              <span className="hidden lg:block">
                <span>The Minds </span>
                <span className="text-[var(--theme-org)]">Behind </span>
                <br />
                <span>the Magic</span>
              </span>

              {/* Tablet View (md to < lg) */}
              <span className="hidden md:block lg:hidden">
                <span>The Minds </span>
                <span className="text-[var(--theme-org)]">Behind </span>
                <span>the</span>
                <br />
                <span>Magic</span>
              </span>

              {/* Mobile View (< md) */}
              <span className="block md:hidden">
                <span>The Minds </span>
                <span className="text-[var(--theme-org)]">Behind </span>
                <span>the Magic</span>
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full mt-3 md:mt-4 lg:mt-0 text-center lg:text-left lg:pt-2 lg:pl-20">
            <p className="max-w-[350px] md:max-w-2xl lg:max-w-[500px] mx-auto lg:mx-0 text-[12px] md:text-[12px] leading-[1.7] text-[var(--theme-magic-description)]">
              {teamData.description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div ref={sliderContainerRef} className="relative w-full">
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onDestroy={() => {
            swiperRef.current = null;
          }}
          loop={true}
          speed={500}
          grabCursor={true}
          simulateTouch={true}
          pagination={{
            el: ".team-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
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
          className="team-swiper !overflow-visible !px-4 md:!px-10 lg:!px-[96px]"
        >
          {teamData.members.map((member, index) => {
            const isExpanded = expandedCard === member.id;
            return (
              <SwiperSlide key={member.id} className="!h-auto">
                <div
                  className={`
                    team-card
                    flex
                    w-full
                    flex-col
                    rounded-xl
                    lg:rounded-md
                    border
                    border-[var(--theme-about-us-border)]
                    bg-[var(--theme-box)]
                    p-6
                    md:p-8
                    transition-all
                    duration-300
                    ease-in-out
                    hover:border-[var(--theme-vision-mission-story-hover-border)]
                    hover:bg-[var(--theme-vision-mission-story-hover-box)]

                    ${isExpanded ? "h-auto lg:min-h-[520px]" : "h-[328px]"}
                  `}
                >
                  {/* IMAGE */}
                  <img
                    src={
                      member.image ||
                      `https://randomuser.me/api/portraits/${
                        index % 2 === 0 ? "women" : "men"
                      }/${(index % 50) + 10}.jpg`
                    }
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = `https://randomuser.me/api/portraits/${
                        index % 2 === 0 ? "women" : "men"
                      }/${(index % 50) + 10}.jpg`;
                    }}
                    className="mx-auto md:mx-0 h-[88px] w-[88px] shrink-0 rounded-[6px] lg:rounded-[4px] object-cover"
                  />

                  {/* NAME */}
                  <h3 className="mt-5 lg:mt-7 text-center md:text-left text-[14px] lg:text-[20px] font-medium text-[var(--theme-org)]">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="mt-1 text-center md:text-left text-[12px] lg:text-[12px] font-medium text-[var(--theme-box-bio)]">
                    {member.role}
                  </p>

                  {/* BIO */}
                  <p
                    className={`
                      mt-4
                      lg:mt-5
                      text-center
                      md:text-left
                      text-[12px]
                      lg:text-[14px]
                      leading-[1.7]
                      text-[var(--theme-box-bio-description)]
                      ${isExpanded ? "" : "line-clamp-4"}
                    `}
                  >
                    {member.bio}
                  </p>

                  {/* READ MORE / LESS */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleReadMore(member.id);
                    }}
                    className="
                      mt-2
                      mx-auto
                      md:mx-0
                      w-fit
                      cursor-pointer
                      border-0
                      bg-transparent
                      p-0
                      text-[12px]
                      font-medium
                      text-[var(--theme-org)]
                      underline
                      underline-offset-2
                    "
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ================= CONTROLS ================= */}
        <div className="mt-8 flex w-full items-center justify-center gap-6 lg:gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-8 w-8 items-center justify-center bg-transparent p-0 text-[26px] font-light text-[var(--theme-org)] transition hover:scale-110 cursor-pointer"
          >
            ←
          </button>

          <div
            className="
              team-pagination
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

          <button
            type="button"
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-8 w-8 items-center justify-center bg-transparent p-0 text-[26px] font-light text-[var(--theme-org)] transition hover:scale-110 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
