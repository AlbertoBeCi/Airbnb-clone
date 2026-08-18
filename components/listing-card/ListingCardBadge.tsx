import type { ListingBadge } from "@/lib/types";

interface ListingCardBadgeProps {
  badge: ListingBadge;
}

const ListingCardBadge = ({ badge }: ListingCardBadgeProps) => {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900 shadow">
      {badge}
    </span>
  );
};

export default ListingCardBadge;
