"use client";

import { Minus, Plus } from "lucide-react";
import type { GuestCounts } from "@/lib/types";

interface GuestsPopoverProps {
  guests: GuestCounts;
  onChange: (guests: GuestCounts) => void;
  onClose: () => void;
}

const ROWS: Array<{ key: keyof GuestCounts; label: string; min: number }> = [
  { key: "adults", label: "Adultos", min: 0 },
  { key: "children", label: "Niños", min: 0 },
  { key: "infants", label: "Bebés", min: 0 },
  { key: "pets", label: "Mascotas", min: 0 },
];

export default function GuestsPopover({
  guests,
  onChange,
  onClose,
}: GuestsPopoverProps) {
  function updateCount(key: keyof GuestCounts, delta: number) {
    const nextValue = Math.max(0, guests[key] + delta);
    onChange({ ...guests, [key]: nextValue });
  }

  return (
    <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl">
      {ROWS.map((row) => (
        <div
          key={row.key}
          className="flex items-center justify-between border-b border-zinc-100 py-3 last:border-none"
        >
          <span className="text-sm font-medium text-zinc-800">
            {row.label}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => updateCount(row.key, -1)}
              disabled={guests[row.key] <= row.min}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 disabled:opacity-30"
              aria-label={`Restar ${row.label}`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-4 text-center text-sm">{guests[row.key]}</span>
            <button
              type="button"
              onClick={() => updateCount(row.key, 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-600"
              aria-label={`Sumar ${row.label}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={onClose}
        className="mt-2 text-sm font-medium text-zinc-900 underline"
      >
        Cerrar
      </button>
    </div>
  );
}
