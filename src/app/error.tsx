"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-8">
      <section className="w-full rounded-3xl border border-[#edcfad] bg-paper p-8 shadow-[var(--card-shadow)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Ocurrio un error
        </p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">No pudimos cargar gatos</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          Intenta recargar la pagina o volver al inicio.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
