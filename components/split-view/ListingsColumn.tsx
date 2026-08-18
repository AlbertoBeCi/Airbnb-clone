"use client";

import { useState } from "react";
import ListingCard from "@/components/listing-card/ListingCard";
import ListingsGridSkeleton from "@/components/listing-card/ListingsGridSkeleton";
import type { ListingItem } from "@/lib/types";

interface ListingsColumnProps {
  listings: ListingItem[];
  isLoading: boolean;
}

export default function ListingsColumn({ listings, isLoading }: ListingsColumnProps) {
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

  if (isLoading) {
    return (
      <div className="p-6">
        <ListingsGridSkeleton columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <p className="p-6 text-sm text-zinc-500">No se encontraron alojamientos.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 overflow-y-auto p-6 sm:grid-cols-2 lg:grid-cols-3">
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
