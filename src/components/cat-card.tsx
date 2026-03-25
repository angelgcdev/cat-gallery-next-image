import Image from "next/image";
import Link from "next/link";

import type { CatImage } from "@/lib/cats";

type CatCardProps = {
  cat: CatImage;
  index?: number;
};

export function CatCard({ cat, index = 0 }: CatCardProps) {
  const breedName = cat.breeds?.[0]?.name;
  const editionLabel = `Selection ${String(index + 1).padStart(2, "0")}`;

  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-line bg-[rgba(251,242,229,0.8)] shadow-[var(--card-shadow)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--card-shadow-strong)]">
      <Link href={`/cats/${cat.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-strong">
          <Image
            src={cat.url}
            alt={breedName ? `Gato raza ${breedName}` : `Gatito ${cat.id}`}
            width={cat.width}
            height={cat.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,19,11,0.78)] via-[rgba(31,19,11,0.12)] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full border border-white/30 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              {editionLabel}
            </span>
            <span className="rounded-full bg-[rgba(251,242,229,0.92)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
              {breedName ? "Breed note" : "Open file"}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d5bb]">
              {breedName ? "Raza destacada" : "Archivo visual"}
            </p>
            <h3 className="mt-2 font-[var(--font-display)] text-2xl leading-tight text-white">
              {breedName ?? "Sin raza especificada"}
            </h3>
          </div>
        </div>
        <div className="grid gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Cat ID
              </p>
              <p className="mt-2 text-sm font-semibold tracking-[0.02em] text-foreground">
                {cat.id}
              </p>
            </div>
            <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
              Detail view
            </span>
          </div>
          <p className="max-w-[32ch] text-sm leading-6 text-muted">
            Una ficha visual para estudiar composicion responsive y carga optimizada con
            imagen remota.
          </p>
        </div>
      </Link>
    </article>
  );
}
