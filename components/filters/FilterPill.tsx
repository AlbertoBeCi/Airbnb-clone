import type { LucideIcon } from "lucide-react";

interface FilterPillProps {
  id: string;
  label: string;
  icon?: LucideIcon;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const FilterPill = ({
  id,
  label,
  icon: Icon,
  isSelected,
  onClick,
}: FilterPillProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`flex shrink-0 flex-col items-center gap-2 border-b-2 px-1 pb-2 pt-3 text-xs transition-colors ${
        isSelected
          ? "border-zinc-900 text-zinc-900"
          : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
      }`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="whitespace-nowrap font-medium">{label}</span>
    </button>
  );
};

export default FilterPill;
