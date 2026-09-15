import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../Home/data/data";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Navbar({ darkMode, setDarkMode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        relative
        z-40
        w-full
        border-b
        border-[var(--theme-border-color)]
        bg-[var(--theme-bg-primary)]
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        transition-colors
        duration-300
      "
    >
      <nav className="w-full px-4 md:px-8 lg:px-8 xl:px-[120px] py-3.5 md:py-4 flex items-center justify-between gap-2 md:gap-4">
        {/* ================= LOGO ================= */}
        <div className="flex-shrink-0">
          <Link to="/" className="w-full">
            <div className="w-[130px] md:w-[150px]">
              <img
                src={
                  darkMode
                    ? "/Home/1st/Logo_white.svg"
                    : "/Home/1st/Logo_black.svg"
                }
                alt="Desinary"
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
          </Link>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-0">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`
                  text-xs
                  lg:text-sm
                  font-normal
                  px-3
                  xl:px-4
                  py-[10px]
                  border-b-2
                  whitespace-nowrap
                  transition-colors
                  duration-200

                  ${active
                    ? "text-[var(--theme-btn-bg)] border-[var(--theme-btn-bg)]"
                    : "text-[var(--theme-title-text)] border-transparent hover:text-[var(--theme-btn-bg)] hover:border-transparent"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-2.5 md:gap-3.5">
          {/* ================= THEME TOGGLE ================= */}
          <div className="relative flex w-fit items-center">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded
                bg-[var(--theme-toggle-bg)]
                transition-all
                duration-300
              "
            >
              <img
                src={darkMode ? "/Home/1st/sun.svg" : "/Home/1st/moon.svg"}
                alt={darkMode ? "Light mode" : "Dark mode"}
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </button>
          </div>

          <button
            type="button"
            className="
              hidden
              lg:inline-block
              px-4
              py-[10px]
              border
              border-[var(--theme-title-text)]
              rounded
              bg-transparent
              text-[var(--theme-title-text)]
              font-Poppins
              text-sm
              font-normal
              align-middle
              whitespace-nowrap
            "
          >
            Workspace
          </button>

          {/* ================= DESIGN NOW ================= */}
          <button
            type="button"
            className="
              hidden
              lg:inline-block
              rounded-sm
              bg-[var(--theme-btn-bg)]
              border
              border-[var(--theme-btn-bg)]
              px-4
              py-[6px]
              font-Poppins
              font-normal
              text-white
              tracking-wide
              whitespace-nowrap
              transition-all
              duration-300
              ease-in-out
              hover:bg-[var(--theme-btn-bg-hover)]
              gap-1
              text-base 
            "
          >
            Design Now
          </button>

          {/* ================= ACCOUNT ================= */}
          <button
            type="button"
            aria-label="Account"
            className="
              ant-dropdown-trigger
              flex
              h-10
              w-10
              items-center
              justify-center
              bg-[var(--theme-toggle-bg)]
              transition-all
              duration-300
              rounded
            "
          >
            <img src="/Home/1st/person.svg" alt="Account" className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
            "
          >
            {menuOpen ? (
              <IoCloseOutline
                className={`text-2xl md:text-3xl ${darkMode ? "text-white" : "text-black"}`}
              />
            ) : (
              <HiOutlineBars3
                className={`text-2xl md:text-3xl ${darkMode ? "text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>
      </nav>
      {/* ================= MOBILE MENU PANEL ================= */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            w-full
            border-t
            border-[var(--theme-border-color)]
            bg-[var(--theme-bg-primary)]
            px-4 md:px-10
            py-4
          "
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`
    text-xs
    lg:text-sm
    font-normal
    px-2
pt-0
pb-[5px]
    border-b
    transition-colors
    duration-200

    ${active
                      ? "text-[var(--theme-btn-bg)] border-[var(--theme-btn-bg)]"
                      : "text-[var(--theme-title-text)] border-transparent hover:text-[var(--theme-btn-bg)] hover:border-transparent"
                    }
  `}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="
          w-fit
          rounded-sm
          border
         border-[var(--theme-title-text)]
          bg-transparent
          px-3
py-1
text-sm
          text-[var(--theme-title-text)]
        "
              >
                Workspace
              </button>

              <button
                type="button"
                className="
          w-fit
          rounded-sm
          border
          border-[var(--theme-btn-bg)]
          bg-[var(--theme-btn-bg)]
          px-3
py-1
text-sm
          text-white
        "
              >
                Design Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
