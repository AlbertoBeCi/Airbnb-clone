"use client";

import BookingHeader from "./BookingHeader";
import BookingDatesGuests from "./BookingDatesGuests";
import BookingPriceBreakdown from "./BookingPriceBreakdown";
import { useStaySelection } from "./useStaySelection";

interface BookingFloatingWidgetProps {
  pricePerNight: number;
  fallbackTotalPrice: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  minNights: number;
  maxNights: number;
  onReserveSubmit?: () => void;
}

export default function BookingFloatingWidget({
  pricePerNight,
  fallbackTotalPrice,
  currency,
  rating,
  reviewsCount,
  maxGuests,
  minNights,
  maxNights,
  onReserveSubmit,
}: BookingFloatingWidgetProps) {
  const stay = useStaySelection(pricePerNight, fallbackTotalPrice);
  const urgencyNotice = stay.nights
    ? `${stay.nights} ${stay.nights === 1 ? "noche" : "noches"} seleccionadas`
    : `Estancia de ${minNights} a ${maxNights} noches`;

  return (
    <div className="sticky top-[90px] rounded-2xl border border-zinc-200 p-6 shadow-lg">
      <BookingHeader
        priceTotal={stay.priceTotal}
        currency={currency}
        rating={rating}
        reviewsCount={reviewsCount}
      />
      <BookingDatesGuests
        checkIn={stay.checkIn}
        checkOut={stay.checkOut}
        onCheckInChange={stay.setCheckIn}
        onCheckOutChange={stay.setCheckOut}
        guests={stay.guests}
        maxGuests={maxGuests}
        onGuestsChange={stay.setGuests}
      />
      <button
        type="button"
        onClick={onReserveSubmit}
        className="mt-4 w-full rounded-lg bg-rose-500 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-rose-600"
      >
        Reservar
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">{urgencyNotice}</p>
      <BookingPriceBreakdown
        priceTotal={stay.priceTotal}
        currency={currency}
        nights={stay.nights}
        pricePerNight={pricePerNight}
      />
    </div>
  );
}
