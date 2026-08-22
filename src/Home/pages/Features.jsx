import { features } from "../data/data";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <h2 className="text-3xl font-extrabold leading-snug text-ink-900 md:text-4xl">
          {features.titlePrefix}
          <span className="text-coral-500">{features.titleHighlight}</span>
        </h2>
        <p className="text-sm text-gray-500">{features.description}</p>
      </div>

      <div className="mt-10 divide-y divide-gray-100">
        {features.items.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 items-center gap-4 py-6 sm:grid-cols-[80px_1fr_1.4fr]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-16 w-16 rounded-xl object-cover"
            />
            <h3 className="text-base font-bold text-ink-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
