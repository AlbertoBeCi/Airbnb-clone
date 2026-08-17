import type { LucideIcon } from "lucide-react";

interface AmenityItemProps {
  label: string;
  icon: LucideIcon;
}

export default function AmenityItem({ label, icon: Icon }: AmenityItemProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-zinc-800">
      <Icon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </div>
  );
}
