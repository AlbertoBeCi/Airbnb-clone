import { Minus, Plus } from "lucide-react";

interface GuestCounterProps {
  guests: number;
  minGuests: number;
  maxGuests: number;
  onChange: (guests: number) => void;
}

const GuestCounter = ({
  guests,
  minGuests,
  maxGuests,
  onChange,
}: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <p className="text-[10px] font-semibold uppercase text-zinc-800">Viajeros</p>
        <p className="text-sm text-zinc-700">
          {guests} {guests === 1 ? "viajero" : "viajeros"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(minGuests, guests - 1))}
          disabled={guests <= minGuests}
          aria-label="Restar viajero"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 disabled:opacity-30"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-4 text-center text-sm">{guests}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(maxGuests, guests + 1))}
          disabled={guests >= maxGuests}
          aria-label="Sumar viajero"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 disabled:opacity-30"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
