import Link from "next/link";

import { CatCard } from "@/components/cat-card";
import { PaginationLinks } from "@/components/pagination-links";
import { getCatImages } from "@/lib/cats";

type HomeProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const pageParam = Number(params.page ?? "0");
  const page = Number.isNaN(pageParam) || pageParam < 0 ? 0 : pageParam;
  const cats = await getCatImages(page, 12);
  const featuredCat = cats[0];

  return (
    <main className="page-enter mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-10">
      <section className="editorial-shell overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="editorial-kicker mb-4">Atlas felino para practicar imagen</p>
            <div className="flex flex-wrap items-end gap-4">
              <h1 className="max-w-2xl font-[var(--font-display)] text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                Cat Atlas
                <span className="block text-[color:var(--accent-strong)]">Studio Issue No. {page + 1}</span>
              </h1>
              <span className="editorial-number hidden lg:block">{String(page + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
              Una portada editorial para explorar razas, estudiar{" "}
              <code className="rounded-full bg-white/70 px-2 py-1 text-sm text-foreground">
                next/image
              </code>{" "}
              y demostrar que una galeria tecnica tambien puede sentirse curada,
              tactil y memorable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-semibold text-foreground">
                12 imagenes por edicion
              </span>
              <span className="rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-semibold text-foreground">
                Remote images + layout estable
              </span>
              <span className="rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-semibold text-foreground">
                The Cat API en App Router
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/playground"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                Ver playground de Image
              </Link>
              <a
                href="https://thecatapi.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line bg-white/45 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                Fuente editorial: The Cat API
              </a>
            </div>
          </div>

          <aside className="editorial-panel relative overflow-hidden rounded-[1.75rem] p-6 sm:p-7">
            <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-white/35 bg-white/10 blur-[2px]" />
            <p className="editorial-kicker">Featured frame</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-tight text-foreground">
              {featuredCat?.breeds?.[0]?.name ?? "Curaduria de razas destacadas"}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              Cada pagina funciona como una pequena edicion visual. Reservamos
              espacio con dimensiones reales, controlamos el recorte con CSS y
              dejamos que <code>sizes</code> ayude a entregar la mejor version posible.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-line bg-white/60 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Imagenes
                </dt>
                <dd className="mt-2 font-[var(--font-display)] text-2xl text-foreground">12</dd>
              </div>
              <div className="rounded-2xl border border-line bg-white/60 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Pagina
                </dt>
                <dd className="mt-2 font-[var(--font-display)] text-2xl text-foreground">{page + 1}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
        <div className="editorial-panel rounded-[1.75rem] p-6 sm:p-7">
          <p className="editorial-kicker">Manifesto</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-tight text-foreground sm:text-4xl">
            Una galeria tecnica no tiene por que verse tecnica.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[color:var(--ink-soft)] sm:text-base">
            Esta portada mezcla narrativa visual con buenas practicas de carga:
            las imagenes llegan desde una fuente remota, el layout se mantiene
            estable gracias a <code>width</code> y <code>height</code>, y el
            tamano visual final se define con clases como{" "}
            <code>object-cover</code> y contenedores responsivos.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-[rgba(95,49,26,0.92)] p-6 text-[#fff5e8] shadow-[var(--card-shadow-strong)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f7d1b0]">
            Field notes
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-7">
            <li>Las tarjetas mantienen proporciones consistentes para evitar saltos visuales.</li>
            <li><code className="rounded bg-white/10 px-2 py-1 text-[#fff5e8]">sizes</code> ayuda al navegador a pedir una imagen adecuada segun viewport.</li>
            <li>El hover solo refina la composicion; no interrumpe la lectura ni el foco en la foto.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-kicker">Gallery selection</p>
            <h2 className="mt-2 font-[var(--font-display)] text-3xl text-foreground sm:text-4xl">
              Doce retratos, una sola atmosfera
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            La seleccion combina razas identificadas y fotografias con caracter para
            practicar detalle visual, responsive media y navegacion por pagina.
          </p>
        </div>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cats.map((cat, index) => (
            <CatCard key={cat.id} cat={cat} index={index} />
          ))}
        </section>
      </section>

      <PaginationLinks page={page} />

      <section className="editorial-panel mt-12 rounded-[1.75rem] p-6 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="editorial-kicker">Image practice</p>
            <h2 className="mt-2 font-[var(--font-display)] text-3xl leading-tight text-foreground">
              Lo que esta portada ensena sin perder estilo
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-[color:var(--ink-soft)] sm:grid-cols-3">
            <article className="rounded-2xl border border-line bg-white/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Intrinseco
              </h3>
              <p className="mt-2">
                <code>width</code> y <code>height</code> reservan el espacio real de la imagen.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-white/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Visual
              </h3>
              <p className="mt-2">
                El tamano final vive en CSS mediante contenedores, aspect ratio y <code>object-cover</code>.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-white/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Responsive
              </h3>
              <p className="mt-2">
                <code>sizes</code> reduce peso y mejora la entrega segun el ancho real disponible.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
