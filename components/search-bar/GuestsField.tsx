"use client";

import { useState } from "react";
import SearchBarField from "./SearchBarField";
import GuestsPopover from "./GuestsPopover";
import type { GuestCounts } from "@/lib/types";

interface GuestsFieldProps {
  guests: GuestCounts;
  onChange: (guests: GuestCounts) => void;
}

export default function GuestsField({ guests, onChange }: GuestsFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const total = guests.adults + guests.children + guests.infants + guests.pets;

  return (
    <SearchBarField label="Viajeros" isLast className="pr-2">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="text-left text-sm text-zinc-600"
      >
        {total > 0 ? `${total} viajeros` : "¿Cuántos?"}
      </button>
      {isOpen && (
        <GuestsPopover
          guests={guests}
          onChange={onChange}
          onClose={() => setIsOpen(false)}
        />
      )}
    </SearchBarField>
  );
}
