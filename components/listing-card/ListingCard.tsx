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
  pricePerNight?: number;
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
  pricePerNight,
  totalPrice,
  rating,
  isFavorite,
  onToggleFavorite,
}: ListingCardProps) {
  return (
    <Link href={`/listing/${id}`} className="block">
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
        pricePerNight={pricePerNight}
        totalPrice={totalPrice}
        rating={rating}
      />
    </Link>
  );
}
