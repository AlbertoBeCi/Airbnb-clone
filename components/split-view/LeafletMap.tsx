"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ListingItem } from "@/lib/types";

interface LeafletMapProps {
  listings: ListingItem[];
}

const MADRID_CENTER: [number, number] = [40.4168, -3.7038];

function createPriceIcon(price: number | string) {
  return L.divIcon({
    html: `<div class="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-md">${price} €</div>`,
    className: "",
    iconAnchor: [0, 0],
  });
}

export default function LeafletMap({ listings }: LeafletMapProps) {
  const bounds = listings.map((listing): [number, number] => [listing.lat, listing.lng]);

  return (
    <MapContainer
      center={MADRID_CENTER}
      zoom={6}
      bounds={bounds.length > 0 ? bounds : undefined}
      boundsOptions={{ padding: [40, 40] }}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.lat, listing.lng]}
          icon={createPriceIcon(listing.pricePerNight ?? listing.totalPrice)}
        >
          <Popup>{listing.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
