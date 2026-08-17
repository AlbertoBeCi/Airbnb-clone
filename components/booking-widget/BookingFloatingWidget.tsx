import BookingHeader from "./BookingHeader";
import BookingDatesGuests from "./BookingDatesGuests";
import BookingPriceBreakdown from "./BookingPriceBreakdown";

interface BookingFloatingWidgetProps {
  priceTotal: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guestsSummary: string;
  urgencyNotice?: string;
  onReserveSubmit?: () => void;
}

export default function BookingFloatingWidget({
  priceTotal,
  currency,
  rating,
  reviewsCount,
  checkInDate,
  checkOutDate,
  guestsSummary,
  urgencyNotice,
  onReserveSubmit,
}: BookingFloatingWidgetProps) {
  return (
    <div className="sticky top-[90px] rounded-2xl border border-zinc-200 p-6 shadow-lg">
      <BookingHeader
        priceTotal={priceTotal}
        currency={currency}
        rating={rating}
        reviewsCount={reviewsCount}
      />
      <BookingDatesGuests
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        guestsSummary={guestsSummary}
      />
      <button
        type="button"
        onClick={onReserveSubmit}
        className="mt-4 w-full rounded-lg bg-rose-500 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-rose-600"
      >
        Reservar
      </button>
      {urgencyNotice && (
        <p className="mt-3 text-center text-xs text-zinc-500">{urgencyNotice}</p>
      )}
      <BookingPriceBreakdown priceTotal={priceTotal} currency={currency} />
    </div>
  );
}
