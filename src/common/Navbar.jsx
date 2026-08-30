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
      <nav className="w-full  px-[120px] py-4 flex items-center justify-between gap-2">
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
                className="w-full lg:h-10 object-contain"
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
                  px-4
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
              bg-[var(--theme-toggle-bg)]
              transition-all
              duration-300
  "
            >
              <img
                src={darkMode ? "/Home/1st/sun.svg" : "/Home/1st/moon.svg"}
                alt={darkMode ? "Light mode" : "Dark mode"}
                className="w-6 h-6 rounded top-1
left-1"
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
             p-2
              font-Poppins
             font-normal
              text-white
              tracking-wide
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
            w-10 h-10
              items-center
              justify-center
              bg-[var(--theme-toggle-bg)]
              transition-all
              duration-300
              p-2
              gap-1
              rounded
  "
          >
            <img src="/Home/1st/person.svg" alt="Account" className="h-6 w-6" />
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
                className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
              />
            ) : (
              <HiOutlineBars3
                className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
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
      
      bg-[var(--theme-bg-primary)]
     px-3
     py-2
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
