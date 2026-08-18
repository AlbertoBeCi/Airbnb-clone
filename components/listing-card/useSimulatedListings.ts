"use client";

import { useEffect, useState } from "react";
import type { ListingItem } from "@/lib/types";

const SIMULATED_DELAY_MS = 1000;

export function useSimulatedListings(source: ListingItem[]) {
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setListings(source);
      setIsLoading(false);
    }, SIMULATED_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [source]);

  return { listings, isLoading };
}
