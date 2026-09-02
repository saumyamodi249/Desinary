import React from "react";
import { Location as locationData } from "../data/data";

const Location = () => {
  return (
    <section className="w-full bg-[var(--theme-loction-bg)] px-[120px] pt-20 pb-[146.5px]">
      <div className="mx-auto flex w-full flex-row items-start gap-[60px]">

        {/* Left: Google Map */}
        <div className="w-[55%] shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.3544891672573!2d72.60753977477313!3d23.120714512659678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8397fc2e08f1%3A0xc006497fc468a78c!2sDwarkesh%20Peninsula!5e0!3m2!1sen!2sin!4v1788346684939!5m2!1sen!2sin"
            className="block w-full aspect-[4/2.8] rounded-md border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Dwarkesh Peninsula Location"
          />
        </div>

        {/* Right: heading + branch details */}
        <div className="flex-1">
          <h2 className="mb-8 text-5xl font-semibold text-[var(--theme-loction-title)]">
            {locationData.intro.heading}

            <span className="text-[var(--theme-loction-org)]">
              {locationData.intro.headingAccent}
            </span>
          </h2>

          {locationData.branches.map((branch) => (
            <div key={branch.name} className="mb-6 last:mb-0">
              <h3 className="mb-2 text-xl font-medium text-[var(--theme-loction-title)]">
                {branch.name}
              </h3>

              {branch.lines.map((line, i) => (
                <p
                  key={i}
                  className="text-sm font-normal leading-[180%] text-[var(--theme-loction-description)]"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Location;