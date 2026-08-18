interface MobileReserveBarProps {
  originalPrice?: number;
  priceTotal: number;
  currency: string;
  datesAvailable?: string;
  onReserveSubmit?: () => void;
}

export default function MobileReserveBar({
  originalPrice,
  priceTotal,
  currency,
  datesAvailable,
  onReserveSubmit,
}: MobileReserveBarProps) {
  const symbol = currency === "EUR" ? "€" : currency;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-zinc-200 bg-white px-4 py-3 sm:hidden">
      <div className="text-sm text-zinc-900">
        {originalPrice && (
          <span className="mr-1 text-zinc-500 line-through">
            {originalPrice} {symbol}
          </span>
        )}
        <span className="font-semibold">
          {priceTotal} {symbol}
        </span>{" "}
        en total
        {datesAvailable && <p className="text-xs text-zinc-500">{datesAvailable}</p>}
      </div>
      <button
        type="button"
        onClick={onReserveSubmit}
        className="rounded-lg bg-rose-500 px-6 py-3 text-sm font-semibold text-white"
      >
        Reservar
      </button>
    </div>
  );
}
