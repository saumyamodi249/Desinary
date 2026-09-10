import { Link, useLocation } from "react-router-dom";
import { ctaBanner, footer } from "../Home/data/data";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();

  const handleQuickLink = (e, href) => {
    if (location.pathname === href) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Smooth bottom-to-top animation
  const reveal = {
    initial: {
      opacity: 0,
      y: 70,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <footer className="w-full">

      {/* ================= CTA STRIP ================= */}
      <div className="bg-[var(--theme-bg-Footer)] px-4 md:px-10 lg:px-[120px] py-10 md:py-12 lg:py-[60px] text-center">

        {/* CTA TITLE */}
        <motion.h2
          initial={reveal.initial}
          whileInView={reveal.whileInView}
          viewport={reveal.viewport}
          transition={{
            ...reveal.transition,
            delay: 0,
          }}
          className="mx-auto text-center font-[Poppins] text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--theme-Footer-text)]"
        >
          {ctaBanner.title}
        </motion.h2>

        {/* CTA DESCRIPTION */}
        <motion.p
          initial={reveal.initial}
          whileInView={reveal.whileInView}
          viewport={reveal.viewport}
          transition={{
            ...reveal.transition,
            delay: 0.12,
          }}
          className="mx-auto mt-3 max-w-[340px] md:max-w-xl text-center font-[Poppins] text-[12px] md:text-[14px] font-normal leading-relaxed md:leading-[180%] text-[var(--theme-Footer-text-small)]"
        >
          {ctaBanner.description}
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          initial={reveal.initial}
          whileInView={reveal.whileInView}
          viewport={reveal.viewport}
          transition={{
            ...reveal.transition,
            delay: 0.24,
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-8 rounded-md bg-[var(--theme-btn-bg)] px-6 py-3 font-[Poppins] text-[14px] font-normal text-[var(--theme-white)] hover:bg-[var(--theme-btn-bg)]"
        >
          {ctaBanner.ctaLabel}
        </motion.button>
      </div>

      {/* ================= FOOTER BODY ================= */}
      <div className="bg-black md:bg-[#1c1a1a] text-[#a9a9a9]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-4 md:px-10 lg:px-6 py-12 md:py-14 text-center md:text-left">

          {/* ================= BRAND ================= */}
          <motion.div
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            viewport={reveal.viewport}
            transition={{
              ...reveal.transition,
              delay: 0,
            }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Link to="/" className="inline-block mx-auto md:mx-0">
              <img
                src="/navbar/Logo_white.svg"
                alt="Desinary"
                className="h-auto w-[150px] md:w-[135px] mx-auto md:mx-0"
              />
            </Link>

            <p className="mt-4 md:mt-5 max-w-[280px] md:max-w-xs font-[Poppins] font-normal text-[12px] md:text-[14px] text-[var(--theme-white)] text-center md:text-left mx-auto md:mx-0 leading-relaxed">
              {footer.tagline}
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex items-center justify-center md:justify-start gap-6 md:gap-3 rounded-[50px] p-[10px] mt-4 md:mt-5">

              {/* FACEBOOK */}
              <motion.a
                href="https://www.facebook.com/people/Desinary/61577718226747/?mibextid=wwXIfr&rdid=PDvHYzdGXLxKcdU5&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F168ausrecq%252F%253Fmibextid%253DwwXIfr&checkpoint_src=any"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="flex items-center justify-center text-white"
              >
                <img
                  src="/navbar/facebook.svg"
                  alt="Facebook"
                  className="h-8 w-8 md:h-5 md:w-5"
                />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                href="https://www.instagram.com/desinary.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="flex items-center justify-center text-white"
              >
                <img
                  src="/navbar/ig.svg"
                  alt="Instagram"
                  className="h-8 w-8 md:h-5 md:w-5"
                />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/company/desinary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="flex items-center justify-center text-white"
              >
                <FaLinkedinIn className="h-8 w-8 md:h-5 md:w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}
          <motion.div
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            viewport={reveal.viewport}
            transition={{
              ...reveal.transition,
              delay: 0.12,
            }}
            className="flex flex-col items-center text-center md:block md:text-left"
          >
            <h3 className="mb-4 md:mb-5 font-[Poppins] text-[22px] md:text-[20px] font-normal md:font-medium text-center md:text-left text-[var(--theme-white)]">
              Quick Links
            </h3>

            <ul className="space-y-3 md:space-y-6 font-[Poppins] text-[12px] md:text-[14px] font-normal text-center md:text-left">
              {footer.quickLinks.map((l, index) => (
                <motion.li
                  key={l.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={l.href}
                    onClick={(e) => handleQuickLink(e, l.href)}
                    className="text-[12px] md:text-[14px] font-normal text-[var(--theme-white)] transition hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            viewport={reveal.viewport}
            transition={{
              ...reveal.transition,
              delay: 0.24,
            }}
            className="flex flex-col items-center text-center md:block md:text-left"
          >
            <h3 className="mb-4 md:mb-5 font-[Poppins] text-[22px] md:text-[20px] font-normal md:font-medium text-center md:text-left text-[var(--theme-white)]">
              Contact
            </h3>

            <ul className="space-y-3.5 md:space-y-6 font-[Poppins] text-[12px] md:text-[14px] font-normal flex flex-col items-center md:block">

              {/* ================= LOCATION (Hidden on mobile per design) ================= */}
              <motion.li
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden md:block"
              >
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-[var(--theme-white)] transition hover:opacity-80"
                >
                  <img
                    src="/navbar/location.svg"
                    alt="Location"
                    className="mt-1 h-5 w-5 shrink-0"
                  />

                  <span>
                    {footer.contact.address}
                  </span>
                </a>
              </motion.li>

              {/* ================= PHONE ================= */}
              <motion.li
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex justify-center md:block"
              >
                <a
                  href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 md:gap-4 justify-center md:justify-start text-[var(--theme-white)] transition hover:opacity-80 text-[12px] md:text-[14px] font-normal"
                >
                  <img
                    src="/navbar/telephone.svg"
                    alt="Telephone"
                    className="h-6 w-6 md:h-5 md:w-5 shrink-0"
                  />

                  <span className="text-[12px] md:text-[14px] font-normal">
                    {footer.contact.phone}
                  </span>
                </a>
              </motion.li>

              {/* ================= EMAIL ================= */}
              <motion.li
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex justify-center md:block"
              >
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-center gap-3.5 md:gap-4 justify-center md:justify-start text-[var(--theme-white)] transition hover:opacity-80 text-[12px] md:text-[14px] font-normal"
                >
                  <img
                    src="/navbar/mail.svg"
                    alt="Email"
                    className="h-6 w-6 md:h-5 md:w-5 shrink-0"
                  />

                  <span className="text-[12px] md:text-[14px] font-normal">
                    {footer.contact.email}
                  </span>
                </a>
              </motion.li>

            </ul>
          </motion.div>

          {/* ================= NEWSLETTER ================= */}
          <motion.div
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            viewport={reveal.viewport}
            transition={{
              ...reveal.transition,
              delay: 0.36,
            }}
            className="flex flex-col items-center text-center md:block md:text-left"
          >
            <h3 className="mb-4 md:mb-5 gap-4 font-[Poppins] text-[22px] md:text-[18px] font-normal md:font-medium text-center md:text-left text-[var(--theme-white)]">
              Newsletter
            </h3>

            <p className="mb-6 md:mb-5 max-w-[280px] md:max-w-sm font-[Poppins] text-[12px] md:text-[14px] font-normal leading-[180%] text-center md:text-left mx-auto md:mx-0 text-[var(--theme-white)]">
              {footer.newsletter.description}
            </p>

            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-[52px] w-full max-w-xs md:max-w-none mx-auto md:mx-0 items-center overflow-hidden rounded-md border border-[#3d4650] bg-[var(--theme-card-bg)]"
            >
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="w-full bg-transparent px-5 font-[Poppins] text-[15px] text-[var(--theme-white)] placeholder-[#737b86] outline-none"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-full w-[55px] shrink-0 items-center justify-center"
              >
                <img
                  src="/navbar/mess.svg"
                  alt="Subscribe"
                  className="h-5 w-5"
                />
              </button>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}