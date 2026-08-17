"use client";

import { useState } from "react";
import PhotoGalleryGrid from "@/components/gallery/PhotoGalleryGrid";
import SubheaderStickyNav from "@/components/sticky-nav/SubheaderStickyNav";
import BookingFloatingWidget from "@/components/booking-widget/BookingFloatingWidget";
import ListingDetailMain from "./ListingDetailMain";
import { getListingDetail } from "@/lib/mock-data";

const SECTIONS = [
  { id: "amenities", label: "Servicios" },
  { id: "reviews", label: "Reseñas" },
  { id: "host", label: "Anfitrión" },
];

export default function ListingDetailView({ listingId }: { listingId: string }) {
  const [activeSectionId, setActiveSectionId] = useState("amenities");
  const listing = getListingDetail(listingId);

  if (!listing) return null;

  return (
    <main className="flex-1">
      <div className="px-4 pt-6 sm:px-8">
        <h1 className="mb-4 text-2xl font-semibold text-zinc-900">{listing.title}</h1>
        <PhotoGalleryGrid photos={listing.photos} />
      </div>

      <SubheaderStickyNav
        sections={SECTIONS}
        activeSectionId={activeSectionId}
        listingSummary={{
          price: listing.pricePerNight ?? 0,
          rating: listing.rating,
          reviewsCount: listing.reviewsCount ?? 0,
        }}
        onReserveClick={() => setActiveSectionId("host")}
      />

      <div className="grid grid-cols-1 gap-12 px-4 py-6 sm:px-8 lg:grid-cols-[1fr_380px]">
        <ListingDetailMain listing={listing} />
        <aside>
          <BookingFloatingWidget
            priceTotal={typeof listing.totalPrice === "number" ? listing.totalPrice : 0}
            currency={listing.currency}
            rating={listing.rating}
            reviewsCount={listing.reviewsCount ?? 0}
            checkInDate={null}
            checkOutDate={null}
            guestsSummary={`Hasta ${listing.maxGuests} viajeros`}
            urgencyNotice={`Estancia de ${listing.minNights} a ${listing.maxNights} noches`}
          />
        </aside>
      </div>
    </main>
  );
}
