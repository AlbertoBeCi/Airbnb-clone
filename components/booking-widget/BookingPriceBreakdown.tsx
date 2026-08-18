interface BookingPriceBreakdownProps {
  priceTotal: number;
  currency: string;
  nights?: number;
  pricePerNight?: number;
}

const BookingPriceBreakdown = ({
  priceTotal,
  currency,
  nights,
  pricePerNight,
}: BookingPriceBreakdownProps) => {
  const symbol = currency === "EUR" ? "€" : currency;
  const serviceFee = Math.round(priceTotal * 0.12);
  const grandTotal = priceTotal + serviceFee;

  return (
    <div className="mt-5 space-y-3 text-sm text-zinc-700">
      <div className="flex justify-between">
        <span>
          {nights && pricePerNight
            ? `${pricePerNight} € x ${nights} ${nights === 1 ? "noche" : "noches"}`
            : "Precio del alojamiento"}
        </span>
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
};

export default BookingPriceBreakdown;
