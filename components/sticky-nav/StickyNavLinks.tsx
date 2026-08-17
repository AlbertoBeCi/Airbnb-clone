import type { StickySection } from "@/lib/types";

interface StickyNavLinksProps {
  sections: StickySection[];
  activeSectionId: string;
}

export default function StickyNavLinks({
  sections,
  activeSectionId,
}: StickyNavLinksProps) {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hidden items-center gap-6 md:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => scrollToSection(section.id)}
          className={`border-b-2 py-4 text-sm font-medium transition-colors ${
            section.id === activeSectionId
              ? "border-zinc-900 text-zinc-900"
              : "border-transparent text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
