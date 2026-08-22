import { useState } from "react";
import { testimonials } from "../data/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.reviews.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Show 3 cards (wraps around) so it mirrors the reference carousel
  const visible = [0, 1, 2].map(
    (offset) => testimonials.reviews[(index + offset) % total],
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <h2 className="text-3xl font-extrabold leading-snug text-ink-900 md:text-4xl">
          {testimonials.titlePrefix}
          <br />
          {testimonials.titleLine2Prefix}
          <span className="text-coral-500">{testimonials.titleHighlight}</span>
        </h2>
        <p className="text-sm text-gray-500">{testimonials.description}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((r, i) => (
          <div key={i} className="rounded-2xl bg-gray-50 p-5">
            <div className="flex items-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <p className="text-coral-500">{"★".repeat(r.rating)}</p>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-ink-900">{r.quote}</p>
            <p className="mt-3 text-sm font-bold text-ink-900">{r.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-coral-300"
        >
          ←
        </button>
        <span className="h-2 w-2 rounded-full bg-coral-500" />
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-coral-300"
        >
          →
        </button>
      </div>
    </section>
  );
}
