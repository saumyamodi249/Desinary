import { Link } from "react-router-dom";
import { ctaBanner, footer } from "../Home/data/data";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* CTA strip */}
      <div className="bg-[var(--theme-card-bg)] py-[60px] text-center gap-8">
        <h2 className="mx-auto text-center font-[Poppins] text-5xl font-semibold text-[var(--theme-Footer-text)] ">
          {ctaBanner.title}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center font-[Poppins] text-[14px] font-normal leading-[180%] text-[var(--theme-Footer-text-small)]">
          {ctaBanner.description}
        </p>
        <button className="mt-8 rounded-md border border-[#EFEFEF] bg-[var(--theme-btn-bg)] px-6 py-3 font-[Poppins] text-[14px] font-normal text-[var(--theme-white)] hover:bg-[var(--theme-btn-bg)]">
          {ctaBanner.ctaLabel}
        </button>
      </div>

      {/* Footer body */}
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

            <p className="mt-5 max-w-xs font-[Poppins] font-normal text-[14px] text-[var(--theme-white)] ">
              {footer.tagline}
            </p>

            {/* Social Icons */}
           <div className="flex items-center gap-3 rounded-[50px] p-[10px]">
  <a
    href="#"
    aria-label="Facebook"
    className="flex items-center justify-center"
  >
    <img
      src="/navbar/facebook.svg"
      alt="Facebook"
      className="h-5 w-5"
    />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex items-center justify-center"
  >
    <img
      src="/navbar/ig.svg"
      alt="Instagram"
      className="h-5 w-5"
    />
  </a>

  <a
    href="#"
    aria-label="X"
    className="flex items-center justify-center"
  >
    <img
      src="/navbar/x.svg"
      alt="X"
      className="h-5 w-5"
    />
  </a>
</div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-5 font-[Poppins] text-[20px] font-medium text-[var(--theme-white)] ">
              Quick Links
            </h3>

            <ul className="space-y-6 font-[Poppins] text-[14px] font-normal">
  {footer.quickLinks.map((l) => (
    <li key={l.label}>
      <Link
        to={l.href}
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
            <h3 className="mb-5 font-[Poppins] text-[20px] font-medium text-[var(--theme-white)] ">
              Contact
            </h3>

            <ul className="space-y-6 font-[Poppins] text-[14px]">

              {/* Location */}
              <li className="flex items-start gap-4">
                <img
                  src="/navbar/location.svg"
                  alt="Location"
                  className="mt-1 h-5 w-5 shrink-0"
                />

                <span className=" text-[var(--theme-white)] ">
                  {footer.contact.address}
                </span>
              </li>

              {/* Telephone */}
              <li className="flex items-center gap-4">
                <img
                  src="/navbar/telephone.svg"
                  alt="Telephone"
                  className="h-5 w-5 shrink-0"
                />

                <span className="text-[var(--theme-white)] ">
                  {footer.contact.phone}
                </span>
              </li>

              {/* Mail */}
              <li className="flex items-center gap-4">
                <img
                  src="/navbar/mail.svg"
                  alt="Email"
                  className="h-5 w-5 shrink-0"
                />

                <span className="text-[var(--theme-white)] ">
                  {footer.contact.email}
                </span>
              </li>

            </ul>
          </div>


          {/* ================= NEWSLETTER ================= */}
          <div>
            <h3 className="mb-5 gap-4 font-[Poppins] text-[18px] font-medium text-[var(--theme-white)] ">
              Newsletter
            </h3>

            <p className="mb-5 max-w-sm font-[Poppins] text-[14px] text-[var(--theme-white)] ">
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
</form>         </div>

        </div>
            </div>
    </footer>
  );
}