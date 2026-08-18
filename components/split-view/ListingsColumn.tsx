"use client";

import { useState } from "react";
import ListingCard from "@/components/listing-card/ListingCard";
import type { ListingItem } from "@/lib/types";

interface ListingsColumnProps {
  listings: ListingItem[];
  onHoverListing: (id: string | undefined) => void;
}

export default function ListingsColumn({
  listings,
  onHoverListing,
}: ListingsColumnProps) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  function toggleFavorite(id: string) {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  if (listings.length === 0) {
    return (
      <p className="p-6 text-sm text-zinc-500">No se encontraron alojamientos.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 overflow-y-auto p-6 sm:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          onMouseEnter={() => onHoverListing(listing.id)}
          onMouseLeave={() => onHoverListing(undefined)}
        >
          <ListingCard
            {...listing}
            isFavorite={favoriteIds.has(listing.id)}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
