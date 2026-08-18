import { List, Map } from "lucide-react";

interface MobileViewToggleProps {
  view: "list" | "map";
  onToggle: () => void;
}

export default function MobileViewToggle({ view, onToggle }: MobileViewToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg lg:hidden"
    >
      {view === "list" ? (
        <>
          Mapa <Map className="h-4 w-4" />
        </>
      ) : (
        <>
          Lista <List className="h-4 w-4" />
        </>
      )}
    </button>
  );
}
