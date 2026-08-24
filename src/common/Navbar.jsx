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
        w-full
        border-b
        border-[var(--theme-border-color)]
        bg-[var(--theme-bg-primary)]
        transition-colors
        duration-300
      "
    >
      <nav className="max-w-[1400px] mx-auto px-4 lg:px-0 py-3 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <div className="flex-shrink-0">
          <Link to="/welcome" className="w-full">
            <div className="w-[150px]">
              <img
                src={
                  darkMode
                    ? "/Home/1st/Logo_white.svg"
                    : "/Home/1st/Logo_black.svg"
                }
                alt="Desinary"
                className="w-full h-auto"
              />
            </div>
          </Link>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden lg:flex gap-0">
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
                  px-5
                  py-[10px]
                  border-b-2
                  transition-colors
                  duration-200

                  ${
                    active
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
        <div className="flex items-center gap-4">
          {/* ================= THEME TOGGLE ================= */}
          <div className="relative flex w-fit items-center rounded-full">
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
              rounded-sm
              border
              border-[var(--theme-border-color)]
              bg-[var(--theme-toggle-bg)]
              transition-all
              duration-300
  "
            >
              <img
                src={darkMode ? "/Home/1st/sun.svg" : "/Home/1st/moon.svg"}
                alt={darkMode ? "Light mode" : "Dark mode"}
                className="h-7 w-8"
              />
            </button>
          </div>

          <button
            type="button"
            className="
             hidden lg:inline-block
             border
          border-[var(--theme-title-text)]
             rounded-sm
             bg-transparent
               px-[15px] py-[8px]
              text-[var(--theme-title-text)]
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
              px-[15px]
              py-[8px]
              text-white
              tracking-wide
              transition-all
              duration-300
              ease-in-out
              hover:bg-[var(--theme-btn-bg-hover)]
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
              rounded-sm
              border
              border-[var(--theme-border-color)]
              bg-[var(--theme-toggle-bg)]
              transition-all
              duration-300
  "
          >
            <img src="/Home/1st/person.svg" alt="Account" className="h-7 w-7" />
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
          <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  {menuOpen ? (
    <IoCloseOutline
      className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
    />
  ) : (
    <HiOutlineBars3
      className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
    />
  )}
</button>
          </button>
        </div>
      </nav>
      {/* ================= MOBILE MENU PANEL ================= */}
      {menuOpen && (
        <div
          className="
      lg:hidden
      w-full
      
      bg-[var(--theme-bg-primary)]
     px-3
     py-2
    "
        >
          <div className="flex flex-col gap-4">
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
    px-5
pt-0
pb-[5px]
    border-b-2
    transition-colors
    duration-200

    ${
      active
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
          px-5
          py-2
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
          px-5
          py-2
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
