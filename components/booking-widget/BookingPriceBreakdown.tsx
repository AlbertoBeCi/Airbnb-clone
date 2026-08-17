interface BookingPriceBreakdownProps {
  priceTotal: number;
  currency: string;
}

export default function BookingPriceBreakdown({
  priceTotal,
  currency,
}: BookingPriceBreakdownProps) {
  const symbol = currency === "EUR" ? "€" : currency;
  const serviceFee = Math.round(priceTotal * 0.12);
  const grandTotal = priceTotal + serviceFee;

  return (
    <div className="mt-5 space-y-3 text-sm text-zinc-700">
      <div className="flex justify-between">
        <span>Precio del alojamiento</span>
        <span>
          {priceTotal} {symbol}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Comisión de servicio</span>
        <span>
          {serviceFee} {symbol}
        </span>
      </div>
      <div className="flex justify-between border-t border-zinc-200 pt-3 font-semibold text-zinc-900">
        <span>Total</span>
        <span>
          {grandTotal} {symbol}
        </span>
      </div>
    </div>
  );
}
