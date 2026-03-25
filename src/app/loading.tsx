export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-8">
      <section className="mb-8 h-40 animate-pulse rounded-3xl border border-[#edcfad] bg-paper/70" />
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-72 animate-pulse rounded-2xl border border-[#e7d4bf] bg-paper/70"
          />
        ))}
      </section>
    </main>
  );
}
