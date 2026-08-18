import { NAV_TABS } from "@/lib/mock-data";

interface CategoryPillsProps {
  activeCategoryTab?: string;
}

export default function CategoryPills({
  activeCategoryTab = "all",
}: CategoryPillsProps) {
  return (
    <nav
      aria-label="Categorías"
      className="flex gap-3 overflow-x-auto pb-4 sm:hidden"
    >
      {NAV_TABS.map((tab) => {
        const isActive = tab.id === activeCategoryTab;
        return (
          <button
            key={tab.id}
            type="button"
            className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-zinc-900 text-zinc-900"
                : "border-zinc-200 text-zinc-700"
            }`}
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
