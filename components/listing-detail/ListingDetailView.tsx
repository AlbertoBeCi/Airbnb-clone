"use client";

import { useState } from "react";
import SubheaderStickyNav from "@/components/sticky-nav/SubheaderStickyNav";
import BookingFloatingWidget from "@/components/booking-widget/BookingFloatingWidget";
import MobileReserveBar from "@/components/booking-widget/MobileReserveBar";
import ListingDetailHero from "./ListingDetailHero";
import ListingDetailMain from "./ListingDetailMain";
import ListingDetailSkeleton from "./ListingDetailSkeleton";
import { useSimulatedListingDetail } from "./useSimulatedListingDetail";

const SECTIONS = [
  { id: "amenities", label: "Servicios" },
  { id: "reviews", label: "Reseñas" },
  { id: "host", label: "Anfitrión" },
];

const ListingDetailView = ({ listingId }: { listingId: string }) => {
  const [activeSectionId, setActiveSectionId] = useState("amenities");
  const { listing, isLoading } = useSimulatedListingDetail(listingId);

  if (isLoading || !listing) {
    return <ListingDetailSkeleton />;
  }

  const priceTotal = typeof listing.totalPrice === "number" ? listing.totalPrice : 0;

  return (
    <main className="flex-1 pb-24 sm:pb-0">
      <ListingDetailHero listing={listing} />

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
            pricePerNight={listing.pricePerNight ?? priceTotal}
            fallbackTotalPrice={priceTotal}
            currency={listing.currency}
            rating={listing.rating}
            reviewsCount={listing.reviewsCount ?? 0}
            maxGuests={listing.maxGuests}
            minNights={listing.minNights}
            maxNights={listing.maxNights}
          />
        </aside>
      </div>

      <MobileReserveBar
        originalPrice={listing.originalPrice}
        priceTotal={priceTotal}
        currency={listing.currency}
        datesAvailable={listing.datesAvailable}
      />
    </main>
  );
};

export default ListingDetailView;
