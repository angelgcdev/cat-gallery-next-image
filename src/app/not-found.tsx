import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-8">
      <section className="w-full rounded-3xl border border-[#edcfad] bg-paper p-8 shadow-[var(--card-shadow)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Recurso no encontrado
        </p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">Ese gatito no existe</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          Prueba abrir otro elemento desde la galeria principal.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          Ir a la galeria
        </Link>
      </section>
    </main>
  );
}
