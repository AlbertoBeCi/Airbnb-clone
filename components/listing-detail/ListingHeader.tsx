import { Star } from "lucide-react";
import { formatRating } from "@/lib/format";

interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewsCount?: number;
  location: string;
}

const ListingHeader = ({
  title,
  rating,
  reviewsCount,
  location,
}: ListingHeaderProps) => {
  return (
    <div className="px-4 pt-4 sm:px-0 sm:pt-0">
      <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-1 text-sm text-zinc-700">
        <Star className="h-3.5 w-3.5 fill-zinc-900" />
        <span className="font-medium">{formatRating(rating)}</span>
        {reviewsCount !== undefined && <span>· {reviewsCount} reseñas</span>}
        <span>· {location}</span>
      </div>
    </div>
  );
};

export default ListingHeader;
