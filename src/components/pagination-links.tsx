import Link from "next/link";

type PaginationLinksProps = {
  page: number;
};

export function PaginationLinks({ page }: PaginationLinksProps) {
  const prevPage = Math.max(0, page - 1);
  const nextPage = page + 1;
  const isFirstPage = page === 0;

  return (
    <section className="editorial-panel mt-10 rounded-[1.75rem] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Navigation desk
          </p>
          <p className="mt-2 font-[var(--font-display)] text-2xl text-foreground">
            Pagina {page + 1}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {isFirstPage ? (
            <span
              aria-disabled="true"
              className="rounded-full border border-line bg-white/40 px-5 py-3 text-sm font-semibold text-muted"
            >
              Anterior
            </span>
          ) : (
            <Link
              href={`/?page=${prevPage}`}
              className="rounded-full border border-line bg-white/55 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/75"
            >
              Anterior
            </Link>
          )}
          <Link
            href={`/?page=${nextPage}`}
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            Siguiente seleccion
          </Link>
        </div>
      </div>
    </section>
  );
}
