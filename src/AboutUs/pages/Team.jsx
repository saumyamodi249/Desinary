import { useEffect, useRef, useState } from "react";
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

setTimeout(() => {
swiperRef.current?.updateAutoHeight();
swiperRef.current?.update();
}, 50);
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

  return (
    <section className="w-full overflow-hidden bg-[var(--theme-bg)] py-[80px] transition-colors duration-300">
      {/* ================= HEADER ================= */}
      <div className="mx-auto mb-10 w-full max-w-[1520px] px-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* TITLE */}
          <div>
            <h2 className="text-[42px] font-semibold leading-[1.35] text-[var(--theme-magic-title)]">
              {teamData.heading.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.variant === "org"
                      ? "text-[var(--theme-org)]"
                      : "text-[var(--theme-magic-title)]"
                  }
                >
                  {part.text}
                </span>
              ))}
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="pt-2 md:pl-12 lg:pl-20">
            <p className="max-w-[500px] text-[14px] leading-[1.7] text-[var(--theme-magic-description)]">
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
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="team-swiper !overflow-visible !px-[96px]"
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
                    rounded-md
                    border
                    border-[var(--theme-about-us-border)]
                    bg-[var(--theme-box)]
                    p-8
                    transition-[height]
                    duration-300
                    ease-in-out
                    hover:border-[var(--theme-vision-mission-story-hover-border)]
                    hover:bg-[var(--theme-vision-mission-story-hover-box)]

                    ${isExpanded ? "min-h-[520px]" : "h-[328px]"}
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
                    className="h-[88px] w-[88px] shrink-0 rounded-[4px] object-cover"
                  />

                  {/* NAME */}
                  <h3 className="mt-7 text-[20px] font-medium text-[var(--theme-org)]">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="mt-1 text-[13px] font-medium text-[var(--theme-box-bio)]">
                    {member.role}
                  </p>

                  {/* BIO */}
                  <p
                    className={`
                      mt-5
                      text-[14px]
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
                      w-fit
                      cursor-pointer
                      border-0
                      bg-transparent
                      p-0
                      text-[13px]
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
        <div className="mt-8 flex w-full items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-8 w-8 items-center justify-center bg-transparent p-0 text-[25px] font-light text-[var(--theme-org)] transition hover:scale-110"
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
              flex
              items-center
              justify-center
              gap-2
            "
          />

          <button
            type="button"
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-8 w-8 items-center justify-center bg-transparent p-0 text-[25px] font-light text-[var(--theme-org)] transition hover:scale-110"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
