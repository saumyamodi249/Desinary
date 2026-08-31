import { Link, useLocation } from "react-router-dom";
import { ctaBanner, footer } from "../Home/data/data";

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

  return (
    <footer className="w-full">
      {/* ================= CTA STRIP ================= */}
      <div className="bg-[var(--theme-bg-Footer)] pt-[60px] pr-[242.5px] pl-[242.5px] text-center">
        <h2 className="mx-auto text-center font-[Poppins] text-5xl font-semibold text-[var(--theme-Footer-text)]">
          {ctaBanner.title}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center font-[Poppins] text-[14px] font-normal leading-[180%] text-[var(--theme-Footer-text-small)]">
          {ctaBanner.description}
        </p>

        <button className="mt-8 mb-[60px] rounded-md bg-[var(--theme-btn-bg)] px-6 py-3 font-[Poppins] text-[14px] font-normal text-[var(--theme-white)] hover:bg-[var(--theme-btn-bg)]">
          {ctaBanner.ctaLabel}
        </button>
      </div>

      {/* ================= FOOTER BODY ================= */}
      <div className="bg-[#1c1a1a] text-[#a9a9a9]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/navbar/Logo_white.svg"
                alt="Desinary"
                className="h-auto w-[135px]"
              />
            </Link>

            <p className="mt-5 max-w-xs font-[Poppins] font-normal text-[14px] text-[var(--theme-white)]">
              {footer.tagline}
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex items-center gap-3 rounded-[50px] p-[10px]">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/people/Desinary/61577718226747/?mibextid=wwXIfr&rdid=PDvHYzdGXLxKcdU5&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F168ausrecq%252F%253Fmibextid%253DwwXIfr&checkpoint_src=any"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center"
              >
                <img
                  src="/navbar/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/desinary.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center"
              >
                <img
                  src="/navbar/ig.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/desinary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center"
              >
                <img
                  src="/navbar/x.svg"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-5 font-[Poppins] text-[20px] font-medium text-[var(--theme-white)]">
              Quick Links
            </h3>

            <ul className="space-y-6 font-[Poppins] text-[14px] font-normal">
  {footer.quickLinks.map((l) => (
    <li key={l.label}>
      <Link
        to={l.href}
        onClick={(e) => handleQuickLink(e, l.href)}
        className="text-[var(--theme-white)] transition hover:text-white hover:underline"
      >
        {l.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-5 font-[Poppins] text-[20px] font-medium text-[var(--theme-white)]">
              Contact
            </h3>

            <ul className="space-y-6 font-[Poppins] text-[14px]">

              {/* ================= LOCATION ================= */}
              <li>
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
              </li>

              {/* ================= PHONE ================= */}
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 text-[var(--theme-white)] transition hover:opacity-80"
                >
                  <img
                    src="/navbar/telephone.svg"
                    alt="Telephone"
                    className="h-5 w-5 shrink-0"
                  />

                  <span>
                    {footer.contact.phone}
                  </span>
                </a>
              </li>

              {/* ================= EMAIL ================= */}
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-center gap-4 text-[var(--theme-white)] transition hover:opacity-80"
                >
                  <img
                    src="/navbar/mail.svg"
                    alt="Email"
                    className="h-5 w-5 shrink-0"
                  />

                  <span>
                    {footer.contact.email}
                  </span>
                </a>
              </li>

            </ul>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div>
            <h3 className="mb-5 gap-4 font-[Poppins] text-[18px] font-medium text-[var(--theme-white)]">
              Newsletter
            </h3>

            <p className="mb-5 max-w-sm font-[Poppins] text-[14px] text-[var(--theme-white)]">
              {footer.newsletter.description}
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex h-[52px] items-center overflow-hidden rounded-md border border-[#3d4650] bg-[var(--theme-card-bg)]"
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
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}