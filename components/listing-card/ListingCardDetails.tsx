import { Star } from "lucide-react";

interface ListingCardDetailsProps {
  title: string;
  description: string;
  datesAvailable?: string;
  pricePerNight?: number;
  totalPrice: number | string;
  rating: number;
}

export default function ListingCardDetails({
  title,
  description,
  datesAvailable,
  pricePerNight,
  totalPrice,
  rating,
}: ListingCardDetailsProps) {
  return (
    <div className="mt-2 flex flex-col text-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="truncate font-medium text-zinc-900">{title}</p>
        <span className="flex shrink-0 items-center gap-1 text-zinc-900">
          <Star className="h-3.5 w-3.5 fill-zinc-900" />
          {rating.toFixed(2)}
        </span>
      </div>
      <p className="truncate text-zinc-500">{description}</p>
      {datesAvailable && <p className="text-zinc-500">{datesAvailable}</p>}
      <p className="mt-1 text-zinc-900">
        {pricePerNight && <span className="font-semibold">{pricePerNight} € </span>}
        {pricePerNight && "noche · "}
        <span className="font-semibold">{totalPrice} €</span> total
      </p>
    </div>
  );
}
