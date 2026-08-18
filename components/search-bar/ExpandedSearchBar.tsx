import { Search } from "lucide-react";
import DestinationField from "./DestinationField";
import DateRangeFields from "./DateRangeFields";
import GuestsField from "./GuestsField";
import type { GuestCounts } from "@/lib/types";

interface ExpandedSearchBarProps {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  guests: GuestCounts;
  onDestinationChange: (value: string) => void;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (guests: GuestCounts) => void;
  onSearch: () => void;
}

const ExpandedSearchBar = ({
  destination,
  checkInDate,
  checkOutDate,
  guests,
  onDestinationChange,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onSearch,
}: ExpandedSearchBarProps) => {
  return (
    <div className="relative inline-flex items-center rounded-full border border-zinc-200 shadow-md">
      <DestinationField destination={destination} onChange={onDestinationChange} />
      <DateRangeFields
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
      />
      <GuestsField guests={guests} onChange={onGuestsChange} />

      <button
        type="button"
        onClick={onSearch}
        aria-label="Buscar"
        className="mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white transition-colors hover:bg-rose-600"
      >
        <Search className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ExpandedSearchBar;
