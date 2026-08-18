"use client";

import { useState } from "react";
import ListingCard from "./ListingCard";
import { useFilteredListings } from "@/components/search-bar/useFilteredListings";
import type { ListingItem } from "@/lib/types";

interface ListingsGridProps {
  listings: ListingItem[];
}

export default function ListingsGrid({ listings }: ListingsGridProps) {
  const filteredListings = useFilteredListings(listings);
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

  if (filteredListings.length === 0) {
    return <p className="text-sm text-zinc-500">No se encontraron alojamientos.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {filteredListings.map((listing) => (
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
