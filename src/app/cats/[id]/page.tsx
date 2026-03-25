import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCatById } from "@/lib/cats";

type CatDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CatDetailPage({ params }: CatDetailProps) {
  const { id } = await params;

  try {
    const cat = await getCatById(id);
    const breedName = cat.breeds?.[0]?.name;

    return (
      <main className="page-enter mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-10 sm:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex w-fit rounded-full border border-[#d9bca2] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-[#f2ddc7]"
        >
          Volver a la galeria
        </Link>

        <section className="overflow-hidden rounded-3xl border border-[#edcfad] bg-paper shadow-[var(--card-shadow)]">
          <div className="relative aspect-[16/10] w-full bg-[#f6e4cf]">
            <Image
              src={cat.url}
              alt={breedName ? `Gato raza ${breedName}` : `Detalle del gato ${cat.id}`}
              width={cat.width}
              height={cat.height}
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Cat ID
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">{cat.id}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Raza
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {breedName ?? "Sin raza especificada"}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}
