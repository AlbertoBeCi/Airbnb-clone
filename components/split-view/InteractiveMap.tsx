"use client";

import dynamic from "next/dynamic";
import type { ListingItem } from "@/lib/types";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-sm font-medium text-zinc-500">
      Mapa
    </div>
  ),
});

interface InteractiveMapProps {
  listings: ListingItem[];
}

export default function InteractiveMap({ listings }: InteractiveMapProps) {
  return <LeafletMap listings={listings} />;
}
