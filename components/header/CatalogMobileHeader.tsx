"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { useSearchContext } from "@/components/search-bar/SearchContext";

export default function CatalogMobileHeader() {
  const router = useRouter();
  const { destination } = useSearchContext();
  const title = destination ? `Alojamientos en ${destination}` : "Alojamientos";

  return (
    <div className="flex items-center gap-3 py-3 sm:hidden">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Volver"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="flex-1 rounded-full border border-zinc-200 px-4 py-2 shadow-sm">
        <p className="truncate text-sm font-semibold text-zinc-900">{title}</p>
        <p className="truncate text-xs text-zinc-500">
          Cualquier fecha · Añade viajeros
        </p>
      </div>
      <button
        type="button"
        aria-label="Filtros"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300"
      >
        <SlidersHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}
