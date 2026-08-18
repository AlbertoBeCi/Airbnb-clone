import Link from "next/link";
import ListingCardCarousel from "./ListingCardCarousel";
import ListingCardDetails from "./ListingCardDetails";
import type { ListingBadge } from "@/lib/types";

interface ListingCardProps {
  id: string;
  images: string[];
  badge?: ListingBadge;
  title: string;
  description: string;
  datesAvailable?: string;
  originalPrice?: number;
  totalPrice: number | string;
  rating: number;
  reviewsCount?: number;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ListingCard({
  id,
  images,
  badge,
  title,
  description,
  datesAvailable,
  originalPrice,
  totalPrice,
  rating,
  reviewsCount,
  isFavorite,
  onToggleFavorite,
}: ListingCardProps) {
  return (
    <Link href={`/rooms/${id}`} className="block">
      <ListingCardCarousel
        images={images}
        title={title}
        badge={badge}
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(id)}
      />
      <ListingCardDetails
        title={title}
        description={description}
        datesAvailable={datesAvailable}
        originalPrice={originalPrice}
        totalPrice={totalPrice}
        rating={rating}
        reviewsCount={reviewsCount}
      />
    </Link>
  );
}
