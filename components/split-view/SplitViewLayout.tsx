"use client";

import { useMemo, useState } from "react";
import ListingsColumn from "./ListingsColumn";
import InteractiveMap from "./InteractiveMap";
import ResultsHeader from "./ResultsHeader";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { useSimulatedListings } from "@/components/listing-card/useSimulatedListings";
import { useFilteredListings } from "@/components/search-bar/useFilteredListings";
import type { ListingItem, SortOrder } from "@/lib/types";

interface SplitViewLayoutProps {
  listings: ListingItem[];
}

function toNumericPrice(listing: ListingItem): number {
  return typeof listing.totalPrice === "number" ? listing.totalPrice : 0;
}

export default function SplitViewLayout({ listings }: SplitViewLayoutProps) {
  const { listings: loadedListings, isLoading } = useSimulatedListings(listings);
  const filteredListings = useFilteredListings(loadedListings);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const isDesktop = useIsDesktop();

  const sortedListings = useMemo(() => {
    if (!sortOrder) return filteredListings;
    const sorted = [...filteredListings].sort(
      (a, b) => toNumericPrice(a) - toNumericPrice(b)
    );
    return sortOrder === "desc" ? sorted.reverse() : sorted;
  }, [filteredListings, sortOrder]);

  const map = <InteractiveMap listings={sortedListings} />;
  const resultsHeader = (
    <ResultsHeader
      count={sortedListings.length}
      isLoading={isLoading}
      sortOrder={sortOrder}
      onSortChange={setSortOrder}
    />
  );

  if (isDesktop) {
    return (
      <div className="flex h-[calc(100vh-129px)]">
        <div className="h-full w-[55%] overflow-y-auto">
          {resultsHeader}
          <ListingsColumn listings={sortedListings} isLoading={isLoading} />
        </div>
        <div className="sticky top-0 h-full w-[45%]">{map}</div>
      </div>
    );
  }

  return (
    <div>
      {resultsHeader}
      <ListingsColumn listings={sortedListings} isLoading={isLoading} />
      <div className="h-80 p-6">{map}</div>
    </div>
  );
}
