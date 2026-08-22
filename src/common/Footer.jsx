import { Link } from "react-router-dom";
import { ctaBanner, footer } from "../Home/data/data";
export default function Footer() {
  return (
    <footer className="w-full">
      {/* CTA strip */}
      <div className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-ink-900 md:text-4xl">
          {ctaBanner.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-500">
          {ctaBanner.description}
        </p>
        <button className="mt-6 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white hover:bg-coral-600">
          {ctaBanner.ctaLabel}
        </button>
      </div>

      {/* Footer body */}
      <div className="bg-ink-900 text-gray-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1 text-lg font-extrabold text-white">
              <span className="text-coral-500">D</span>ESINARY
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-400">{footer.tagline}</p>
            <div className="mt-4 flex gap-3">
              {footer.socials.map((s) => (
                <span
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300"
                >
                  {s.icon[0].toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-gray-400 hover:text-coral-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>{footer.contact.phone}</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>{footer.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Newsletter</h3>
            <p className="mb-3 text-sm text-gray-400">{footer.newsletter.description}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center overflow-hidden rounded-full border border-gray-700"
            >
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center text-coral-400"
              >
                ➤
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Desinary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
