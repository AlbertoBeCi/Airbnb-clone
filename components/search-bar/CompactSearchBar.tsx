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
      className="mx-auto flex w-full max-w-sm items-center justify-between rounded-full border border-zinc-200 py-2 pl-4 pr-2 shadow-sm"
    >
      <input
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        placeholder="Empieza a buscar"
        className="w-full truncate bg-transparent text-sm font-medium text-zinc-800 outline-none placeholder:text-zinc-500"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white"
      >
        <Search className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
