import { useState } from "react";
import { faq } from "./data/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-ink-900 md:text-4xl">
          {faq.titlePrefix}
          <span className="text-coral-500">{faq.titleHighlight}</span>
        </h2>
        <p className="mt-3 text-sm text-gray-500">{faq.subtitle}</p>
        <p className="text-sm text-gray-500">{faq.subtitle2}</p>
      </div>

      <div className="mt-10 divide-y divide-gray-100">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-bold text-ink-900 md:text-base">
                  {item.question}
                </span>
                <span
                  className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-sm text-gray-500">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
