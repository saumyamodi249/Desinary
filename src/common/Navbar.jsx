import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../Home/data/data";

export default function Navbar({ darkMode, setDarkMode }) {
  const { pathname } = useLocation();

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
                rounded-full
                border
                border-[var(--theme-border-color)]
                bg-[var(--theme-bg-primary)]
                transition-all
                duration-300
                hover:bg-[var(--theme-bg-secondary)]
              "
            >
              <img
                src={
                  darkMode
                    ? "/Home/1st/moon.svg"
                    : "/Home/1st/sun.svg"
                }
                alt={darkMode ? "Light mode" : "Dark mode"}
                className="h-5 w-5"
              />
            </button>

          </div>

          {/* ================= WORKSPACE ================= */}
          <button
            type="button"
            className="
              hidden
              lg:inline-block
              border
              border-[var(--theme-btn-bg)]
              rounded-sm
              bg-transparent
              px-[15px]
              py-[8px]
              text-[var(--theme-title-text)]
              tracking-wide
              transition-all
              duration-300
              ease-in-out
              hover:bg-[var(--theme-btn-bg)]
              hover:text-white
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
              text-xl
              account-icon
              flex
              items-center
              justify-center
              text-[var(--theme-title-text)]
              transition-colors
              duration-300
            "
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>

          {/* ================= MOBILE MENU ================= */}
          <button
            type="button"
            aria-label="Menu"
            className="
              lg:hidden
              text-2xl
              text-[var(--theme-title-text)]
              transition-colors
              duration-300
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
          </button>

        </div>
      </nav>
    </header>
  );
}