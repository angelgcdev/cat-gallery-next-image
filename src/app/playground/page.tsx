import Image from "next/image";
import Link from "next/link";

const sampleUrl = "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg";

export default function PlaygroundPage() {
  return (
    <main className="page-enter mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex w-fit rounded-full border border-[#d9bca2] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-[#f2ddc7]"
      >
        Volver a la galeria
      </Link>

      <section className="mb-8 rounded-3xl border border-[#edcfad] bg-paper p-6 shadow-[var(--card-shadow)]">
        <h1 className="text-2xl font-bold text-foreground sm:text-4xl">Image playground</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          Compara patrones: <code>width + height</code> con tamano controlado por CSS,
          uso de <code>fill</code> y uso de <code>sizes</code>. La idea es que puedas ver
          como cambia la experiencia y mantener layout estable.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-[#e7d4bf] bg-paper p-4 shadow-[var(--card-shadow)]">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            width + height + w-full
          </h2>
          <div className="overflow-hidden rounded-xl bg-[#f6e4cf]">
            <Image
              src={sampleUrl}
              alt="Gatito ejemplo con width y height"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-[#e7d4bf] bg-paper p-4 shadow-[var(--card-shadow)]">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            fill + contenedor fijo
          </h2>
          <div className="relative h-60 overflow-hidden rounded-xl bg-[#f6e4cf]">
            <Image
              src={sampleUrl}
              alt="Gatito ejemplo con fill"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-[#e7d4bf] bg-paper p-4 shadow-[var(--card-shadow)]">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Image sin optimizar
          </h2>
          <div className="overflow-hidden rounded-xl bg-[#f6e4cf]">
            <Image
              src={sampleUrl}
              alt="Gatito ejemplo sin optimizacion"
              width={1200}
              height={900}
              unoptimized
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </article>
      </section>
    </main>
  );
}
