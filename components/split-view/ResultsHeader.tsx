import { ArrowUp, ArrowDown } from "lucide-react";
import type { SortOrder } from "@/lib/types";

interface ResultsHeaderProps {
  count: number;
  isLoading: boolean;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

export default function ResultsHeader({
  count,
  isLoading,
  sortOrder,
  onSortChange,
}: ResultsHeaderProps) {
  function toggleSort(order: "asc" | "desc") {
    onSortChange(sortOrder === order ? null : order);
  }

  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4">
      <p className="text-sm text-zinc-600">
        {isLoading ? "Buscando alojamientos…" : `${count} alojamientos encontrados`}
      </p>
      <div className="flex shrink-0 items-center gap-2 text-sm">
        <span className="hidden text-zinc-500 sm:inline">Precio</span>
        <button
          type="button"
          onClick={() => toggleSort("asc")}
          className={`flex items-center gap-1 rounded-full border px-3 py-1.5 font-medium ${
            sortOrder === "asc"
              ? "border-zinc-900 text-zinc-900"
              : "border-zinc-200 text-zinc-600"
          }`}
        >
          <ArrowUp className="h-3.5 w-3.5" /> Ascendente
        </button>
        <button
          type="button"
          onClick={() => toggleSort("desc")}
          className={`flex items-center gap-1 rounded-full border px-3 py-1.5 font-medium ${
            sortOrder === "desc"
              ? "border-zinc-900 text-zinc-900"
              : "border-zinc-200 text-zinc-600"
          }`}
        >
          <ArrowDown className="h-3.5 w-3.5" /> Descendente
        </button>
      </div>
    </div>
  );
}
