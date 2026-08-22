import { meetDesinary } from "../data/data";

export default function MeetDesinary() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-dashed border-coral-200 p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold leading-snug text-ink-900 md:text-4xl">
            {meetDesinary.titlePrefix}
            <span className="text-coral-500">
              {meetDesinary.titleHighlight}
            </span>
            {meetDesinary.titleSuffix}
          </h2>
          <div className="space-y-4 text-sm text-gray-500">
            {meetDesinary.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 divide-x divide-coral-200 rounded-2xl bg-coral-50 md:grid-cols-4">
          {meetDesinary.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <p className="text-2xl font-extrabold text-ink-900 md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-coral-500 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
