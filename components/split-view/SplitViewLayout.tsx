"use client";

import { useState } from "react";
import ListingsColumn from "./ListingsColumn";
import InteractiveMap from "./InteractiveMap";
import { useFilteredListings } from "@/components/search-bar/useFilteredListings";
import type { ListingItem } from "@/lib/types";

interface SplitViewLayoutProps {
  listings: ListingItem[];
}

export default function SplitViewLayout({ listings }: SplitViewLayoutProps) {
  const filteredListings = useFilteredListings(listings);
  const [hoveredListingId, setHoveredListingId] = useState<string>();

  return (
    <div className="flex h-[calc(100vh-129px)]">
      <div className="w-full overflow-y-auto lg:w-[55%]">
        <ListingsColumn
          listings={filteredListings}
          onHoverListing={setHoveredListingId}
        />
      </div>
      <div className="hidden lg:sticky lg:top-0 lg:block lg:w-[45%]">
        <InteractiveMap listings={filteredListings} hoveredListingId={hoveredListingId} />
      </div>
    </div>
  );
}
