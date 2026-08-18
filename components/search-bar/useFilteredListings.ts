"use client";

import { useMemo } from "react";
import { useSearchContext } from "./SearchContext";
import type { ListingItem } from "@/lib/types";

export function useFilteredListings(listings: ListingItem[]): ListingItem[] {
  const { destination } = useSearchContext();

  return useMemo(() => {
    const query = destination.trim().toLowerCase();
    if (!query) return listings;

    return listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query)
    );
  }, [listings, destination]);
}
