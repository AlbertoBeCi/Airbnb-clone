import { Globe } from "lucide-react";
import Logo from "./Logo";
import NavTabs from "./NavTabs";
import UserActionMenu from "./UserActionMenu";
import SearchBar from "@/components/search-bar/SearchBar";
import type { SearchParams, UserSession } from "@/lib/types";

interface HeaderProps {
  variant: "full" | "compact";
  activeCategoryTab?: string;
  userSession?: UserSession;
  onSearchSubmit?: (params: SearchParams) => void;
}

export default function Header({
  variant,
  activeCategoryTab,
  userSession,
}: HeaderProps) {
  const isFull = variant === "full";

  return (
    <header className="sticky top-0 z-50 flex flex-col border-b border-zinc-200 bg-white px-4 sm:px-8">
      <div className="flex items-center justify-between gap-4 py-3">
        <Logo />
        {isFull && <NavTabs activeCategoryTab={activeCategoryTab} />}
        {!isFull && (
          <div className="flex-1 px-4">
            <SearchBar isCompact />
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Cambiar idioma"
            className="hidden rounded-full p-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 sm:block"
          >
            <Globe className="h-4 w-4" />
          </button>
          <UserActionMenu userSession={userSession} />
        </div>
      </div>

      {isFull && (
        <div className="flex justify-center pb-4">
          <SearchBar />
        </div>
      )}
    </header>
  );
}
