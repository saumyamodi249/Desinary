import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";
import { faq } from "../data/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="w-full px-6 py-16 md:px-10 lg:px-12 lg:py-20"
      style={{
        backgroundColor: "var(--theme-FAQ-bg)",
      }}
    >
      {" "}
      <div className="mx-auto max-w-[1400px]">
        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h2
            className="
  font-[Poppins]
  text-[48px]
  font-semibold
  text-center
"
            style={{
              color: "var(--theme-FAQ-text)",
            }}
          >
            {faq.titlePrefix}
            <span
              style={{
                color: "var(--theme-FAQ-text-org)",
              }}
            >
              {faq.titleHighlight}
            </span>
          </h2>

          <p
            className="
  mx-auto
  mt-5
  max-w-[850px]
  font-[Poppins]
  text-[14px]
  font-normal
  leading-[180%]
  text-center
  align-middle

            "
            style={{
              color: "var(--theme-FAQ-text-small)",
            }}
          >
            {faq.subtitle}
          </p>

          <p
            className="
  mx-auto
  
  max-w-[850px]
  font-[Poppins]
  text-[14px]
  font-normal
  leading-[180%]
  text-center
  align-middle
            "
            style={{
              color: "var(--theme-FAQ-text-small)",
            }}
          >
            {faq.subtitle2}
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="mt-10 md:mt-12">
          {faq.items.map((item, i) => {
            const isOpen = open === i;

            return (
              <div key={item.question}>
                {/* ================= QUESTION ================= */}
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="
  group
  flex
  w-full
  items-center
  justify-between
  rounded-[4px]
  bg-transparent
  px-4
  py-5
  font-[Poppins]
  text-[20px]
  font-medium
  text-left
  text-[var(--theme-FAQ-text)]
  transition-all
  duration-300
  hover:bg-[var(--theme-FAQ-text-hover)]
  hover:text-white

  "
                >
                  <span
                    className="
      pr-6
      font-[Poppins]
      text-[16px]
      font-semibold
      leading-[150%]
      text-[var(--theme-FAQ-text)]
      transition-colors
      duration-300
      group-hover:text-white
      md:text-[20px]
    "
                  >
                    {item.question}
                  </span>

                  <span
                    className="
    flex
    h-6
    w-6
    shrink-0
    items-center
    justify-center
    text-[var(--theme-FAQ-text)]
    transition-colors
    duration-300a
    group-hover:text-white
  "
                  >
                    {isOpen ? (
                      <FaAngleUp className="text-[18px]" />
                    ) : (
                      <IoIosArrowDown className="text-[18px]" />
                    )}
                  </span>
                </button>
                {/* ================= ANSWER ================= */}
                {isOpen && (
                  <div
                    className="
                      px-5
                      pb-6
                      pt-4
                      md:px-5
                      md:pb-6
                    "
                    style={{
                      borderBottom: "1px solid var(--theme-FAQ-border)",
                    }}
                  >
                    <p
                      className="
  font-[Poppins]
  text-[14px]
  font-normal
  leading-[180%]
  align-middle

                      "
                      style={{
                        color: "var(--theme-FAQ-text-small)",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}

                {/* ================= DIVIDER ================= */}
                {!isOpen && (
                  <div
                    className="h-px w-full"
                    style={{
                      backgroundColor: "var(--theme-FAQ-border)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
