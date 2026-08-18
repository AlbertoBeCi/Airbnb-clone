"use client";

import { useState } from "react";
import CompactSearchBar from "./CompactSearchBar";
import ExpandedSearchBar from "./ExpandedSearchBar";
import { useSearchContext } from "./SearchContext";
import type { GuestCounts, SearchParams } from "@/lib/types";

interface SearchBarProps {
  isCompact?: boolean;
  onSearch?: (params: SearchParams) => void;
}

const EMPTY_GUESTS: GuestCounts = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};

export default function SearchBar({ isCompact = false, onSearch }: SearchBarProps) {
  const { destination, setDestination } = useSearchContext();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState<GuestCounts>(EMPTY_GUESTS);

  function handleSearch() {
    onSearch?.({
      destination,
      checkInDate: checkInDate ? new Date(checkInDate) : null,
      checkOutDate: checkOutDate ? new Date(checkOutDate) : null,
      guests,
    });
  }

  if (isCompact) {
    return (
      <CompactSearchBar
        destination={destination}
        onDestinationChange={setDestination}
        onSearch={handleSearch}
      />
    );
  }

  return (
    <>
      <div className="w-full sm:hidden">
        <CompactSearchBar
          destination={destination}
          onDestinationChange={setDestination}
          onSearch={handleSearch}
        />
      </div>
      <div className="hidden sm:block">
        <ExpandedSearchBar
          destination={destination}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guests={guests}
          onDestinationChange={setDestination}
          onCheckInChange={setCheckInDate}
          onCheckOutChange={setCheckOutDate}
          onGuestsChange={setGuests}
          onSearch={handleSearch}
        />
      </div>
    </>
  );
}
