import MapPriceMarker from "./MapPriceMarker";
import type { ListingItem } from "@/lib/types";

interface InteractiveMapProps {
  listings: ListingItem[];
  hoveredListingId?: string;
}

function normalize(value: number, min: number, max: number) {
  if (max === min) return 50;
  return ((value - min) / (max - min)) * 80 + 10;
}

export default function InteractiveMap({
  listings,
  hoveredListingId,
}: InteractiveMapProps) {
  const lats = listings.map((listing) => listing.lat);
  const lngs = listings.map((listing) => listing.lng);
  const bounds = {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLng: Math.min(...lngs),
    maxLng: Math.max(...lngs),
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-sky-100 via-emerald-50 to-sky-100">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(0deg,transparent_24%,rgba(0,0,0,.06)_25%,rgba(0,0,0,.06)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.06)_75%,rgba(0,0,0,.06)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(0,0,0,.06)_25%,rgba(0,0,0,.06)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.06)_75%,rgba(0,0,0,.06)_76%,transparent_77%)] [background-size:60px_60px]" />
      {listings.map((listing) => (
        <MapPriceMarker
          key={listing.id}
          price={listing.pricePerNight ?? listing.totalPrice}
          isHighlighted={listing.id === hoveredListingId}
          style={{
            left: `${normalize(listing.lng, bounds.minLng, bounds.maxLng)}%`,
            top: `${100 - normalize(listing.lat, bounds.minLat, bounds.maxLat)}%`,
          }}
        />
      ))}
    </div>
  );
}
