import { Search } from "lucide-react";

interface CompactSearchBarProps {
  destination: string;
  onSearch: () => void;
}

export default function CompactSearchBar({
  destination,
  onSearch,
}: CompactSearchBarProps) {
  return (
    <button
      type="button"
      onClick={onSearch}
      className="mx-auto flex w-full max-w-sm items-center justify-between rounded-full border border-zinc-200 py-2 pl-4 pr-2 shadow-sm"
    >
      <span className="truncate text-sm font-medium text-zinc-800">
        {destination || "Empieza a buscar"}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
        <Search className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
