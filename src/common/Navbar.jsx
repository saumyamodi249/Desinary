import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../Home/data/data";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-xl font-extrabold text-ink-900">
          <span className="text-coral-500">D</span>ESINARY
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`transition-colors hover:text-coral-500 ${
                    active ? "border-b-2 border-coral-500 pb-1 text-coral-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-coral-300 sm:flex">
            <span aria-hidden>🌙</span>
            Workspace
          </button>
          <button className="rounded-full bg-coral-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral-600">
            Design Now
          </button>
          <button
            aria-label="Account"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600"
          >
            👤
          </button>
        </div>
      </nav>
    </header>
  );
}
