"use client";

import { useEffect, useState } from "react";
import { getListingDetail } from "@/lib/mock-data";
import type { ListingDetail } from "@/lib/types";

const SIMULATED_DELAY_MS = 1000;

export function useSimulatedListingDetail(id: string) {
  const [listing, setListing] = useState<ListingDetail | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setListing(getListingDetail(id));
      setIsLoading(false);
    }, SIMULATED_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [id]);

  return { listing, isLoading };
}
