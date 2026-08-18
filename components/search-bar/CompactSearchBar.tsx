import { Search } from "lucide-react";

interface CompactSearchBarProps {
  destination: string;
  onDestinationChange: (value: string) => void;
  onSearch: () => void;
}

export default function CompactSearchBar({
  destination,
  onDestinationChange,
  onSearch,
}: CompactSearchBarProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
      className="mx-auto flex w-full max-w-sm items-center gap-3 rounded-full border border-zinc-200 px-5 py-3.5 shadow-md sm:py-2 sm:shadow-sm"
    >
      <Search className="h-4 w-4 shrink-0 text-zinc-900" strokeWidth={2.5} />
      <input
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        placeholder="Empieza a buscar"
        className="w-full truncate bg-transparent text-sm font-semibold text-zinc-900 outline-none placeholder:text-zinc-900"
      />
    </form>
  );
}
