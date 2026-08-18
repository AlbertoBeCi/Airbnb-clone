import { NAV_TABS } from "@/lib/mock-data";

interface NavTabsProps {
  activeCategoryTab?: string;
}

const NavTabs = ({ activeCategoryTab = "stays" }: NavTabsProps) => {
  const desktopTabs = NAV_TABS.filter((tab) => tab.id !== "all");

  return (
    <nav
      aria-label="Tipos de experiencia"
      className="hidden items-center gap-6 md:flex"
    >
      {desktopTabs.map((tab) => {
        const isActive = tab.id === activeCategoryTab;
        return (
          <button
            key={tab.id}
            type="button"
            className={`border-b-2 pb-4 pt-5 text-sm font-medium transition-colors ${
              isActive
                ? "border-zinc-900 text-zinc-900"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default NavTabs;
