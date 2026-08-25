export default function PlaceholderPage({ title }) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-ink-900 md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-md text-sm text-gray-500">
        This page is coming soon. In the meantime, head back to Home to see the full
        Desinary experience.
      </p>
    </section>
  );
}
   