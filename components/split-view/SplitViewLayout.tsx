"use client";

import { useState } from "react";
import ListingsColumn from "./ListingsColumn";
import InteractiveMap from "./InteractiveMap";
import MobileViewToggle from "./MobileViewToggle";
import { useSimulatedListings } from "@/components/listing-card/useSimulatedListings";
import { useFilteredListings } from "@/components/search-bar/useFilteredListings";
import type { ListingItem } from "@/lib/types";

interface SplitViewLayoutProps {
  listings: ListingItem[];
}

export default function SplitViewLayout({ listings }: SplitViewLayoutProps) {
  const { listings: loadedListings, isLoading } = useSimulatedListings(listings);
  const filteredListings = useFilteredListings(loadedListings);
  const [hoveredListingId, setHoveredListingId] = useState<string>();
  const [mobileView, setMobileView] = useState<"list" | "map">("list");

  return (
    <div className="h-[calc(100vh-129px)] lg:flex">
      <div
        className={`h-full overflow-y-auto lg:block lg:w-[55%] ${
          mobileView === "map" ? "hidden" : "block"
        }`}
      >
        <ListingsColumn
          listings={filteredListings}
          isLoading={isLoading}
          onHoverListing={setHoveredListingId}
        />
      </div>
      <div
        className={`h-full lg:sticky lg:top-0 lg:block lg:w-[45%] ${
          mobileView === "list" ? "hidden" : "block"
        }`}
      >
        <InteractiveMap listings={filteredListings} hoveredListingId={hoveredListingId} />
      </div>
      <MobileViewToggle
        view={mobileView}
        onToggle={() => setMobileView((view) => (view === "list" ? "map" : "list"))}
      />
    </div>
  );
}
