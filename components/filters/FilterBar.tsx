"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import FilterPill from "./FilterPill";
import { FILTER_OPTIONS } from "@/lib/mock-data";

const FilterBar = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-4 border-b border-zinc-200 px-4 py-2 sm:px-8">
      <div className="flex flex-1 items-center gap-6 overflow-x-auto">
        {FILTER_OPTIONS.map((option) => (
          <FilterPill
            key={option.id}
            id={option.id}
            label={option.label}
            icon={option.icon}
            isSelected={selectedId === option.id}
            onClick={(id) => setSelectedId((current) => (current === id ? null : id))}
          />
        ))}
      </div>
      <button
        type="button"
        className="flex shrink-0 items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 hover:border-zinc-900"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filtros
      </button>
    </div>
  );
};

export default FilterBar;
