import { Star } from "lucide-react";

interface BookingHeaderProps {
  priceTotal: number;
  currency: string;
  rating: number;
  reviewsCount: number;
}

export default function BookingHeader({
  priceTotal,
  currency,
  rating,
  reviewsCount,
}: BookingHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl">
        <span className="font-semibold text-zinc-900">
          {priceTotal} {currency === "EUR" ? "€" : currency}
        </span>{" "}
        <span className="text-sm text-zinc-500">total</span>
      </p>
      <span className="flex items-center gap-1 text-sm text-zinc-800">
        <Star className="h-3.5 w-3.5 fill-zinc-900" />
        {rating.toFixed(2)} · {reviewsCount} reseñas
      </span>
    </div>
  );
}
