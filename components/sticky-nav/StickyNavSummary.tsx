import { Star } from "lucide-react";

interface StickyNavSummaryProps {
  listingSummary?: { price: number; rating: number; reviewsCount: number };
  onReserveClick?: () => void;
}

export default function StickyNavSummary({
  listingSummary,
  onReserveClick,
}: StickyNavSummaryProps) {
  if (!listingSummary) return null;

  return (
    <div className="flex items-center gap-4 py-3">
      <div className="hidden text-sm text-zinc-800 sm:block">
        <span className="font-semibold">{listingSummary.price} € </span>
        noche ·{" "}
        <span className="inline-flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-zinc-900" />
          {listingSummary.rating.toFixed(2)} ({listingSummary.reviewsCount})
        </span>
      </div>
      <button
        type="button"
        onClick={onReserveClick}
        className="rounded-lg bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-600"
      >
        Reservar
      </button>
    </div>
  );
}
