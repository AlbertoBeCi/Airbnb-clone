import StickyNavLinks from "./StickyNavLinks";
import StickyNavSummary from "./StickyNavSummary";
import type { StickySection } from "@/lib/types";

interface SubheaderStickyNavProps {
  sections: StickySection[];
  activeSectionId: string;
  listingSummary?: { price: number; rating: number; reviewsCount: number };
  onReserveClick?: () => void;
}

export default function SubheaderStickyNav({
  sections,
  activeSectionId,
  listingSummary,
  onReserveClick,
}: SubheaderStickyNavProps) {
  return (
    <div className="sticky top-[65px] z-40 hidden items-center justify-between border-b border-zinc-200 bg-white px-4 sm:flex sm:px-8">
      <StickyNavLinks sections={sections} activeSectionId={activeSectionId} />
      <StickyNavSummary
        listingSummary={listingSummary}
        onReserveClick={onReserveClick}
      />
    </div>
  );
}
