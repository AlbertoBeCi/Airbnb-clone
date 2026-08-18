import { Star } from "lucide-react";
import { formatRating } from "@/lib/format";

interface ListingCardDetailsProps {
  title: string;
  description: string;
  datesAvailable?: string;
  originalPrice?: number;
  totalPrice: number | string;
  rating: number;
  reviewsCount?: number;
}

export default function ListingCardDetails({
  title,
  description,
  datesAvailable,
  originalPrice,
  totalPrice,
  rating,
  reviewsCount,
}: ListingCardDetailsProps) {
  return (
    <div className="mt-2 flex flex-col text-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="truncate font-medium text-zinc-900">{title}</p>
        <span className="flex shrink-0 items-center gap-1 text-zinc-900">
          <Star className="h-3.5 w-3.5 fill-zinc-900" />
          {formatRating(rating)}
          {reviewsCount !== undefined && (
            <span className="text-zinc-500">({reviewsCount})</span>
          )}
        </span>
      </div>
      <p className="truncate text-zinc-500">{description}</p>
      {datesAvailable && <p className="text-zinc-500">{datesAvailable}</p>}
      <p className="mt-1 text-zinc-900">
        {originalPrice && (
          <span className="text-zinc-500 line-through">{originalPrice} €</span>
        )}{" "}
        <span className="font-semibold">{totalPrice} €</span> en total
      </p>
    </div>
  );
}
