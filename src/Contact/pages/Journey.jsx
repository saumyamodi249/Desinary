import { journey } from "./data/data";

export default function Journey() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-ink-900 md:text-4xl">
          {journey.titlePrefix}
          <span className="text-coral-500">{journey.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
          {journey.subtitle}
        </p>
      </div>

      <div className="space-y-14">
        {journey.steps.map((step, i) => (
          <div
            key={step.number}
            className={`grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span className="text-sm font-bold text-coral-500">
                {step.number}
              </span>
              <h3 className="mt-1 text-xl font-bold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={step.image}
                alt={step.title}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
