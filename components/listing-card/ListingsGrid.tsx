"use client";

import { useState } from "react";
import ListingCard from "./ListingCard";
import type { ListingItem } from "@/lib/types";

interface ListingsGridProps {
  listings: ListingItem[];
}

export default function ListingsGrid({ listings }: ListingsGridProps) {
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

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          {...listing}
          isFavorite={favoriteIds.has(listing.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
