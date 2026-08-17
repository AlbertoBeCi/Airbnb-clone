interface BookingDatesGuestsProps {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guestsSummary: string;
}

function formatDate(date: Date | null) {
  if (!date) return "Añadir fecha";
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

export default function BookingDatesGuests({
  checkInDate,
  checkOutDate,
  guestsSummary,
}: BookingDatesGuestsProps) {
  return (
    <div className="mt-4 rounded-xl border border-zinc-300">
      <div className="grid grid-cols-2 divide-x divide-zinc-300">
        <div className="p-3">
          <p className="text-[10px] font-semibold uppercase text-zinc-800">
            Llegada
          </p>
          <p className="text-sm text-zinc-700">{formatDate(checkInDate)}</p>
        </div>
        <div className="p-3">
          <p className="text-[10px] font-semibold uppercase text-zinc-800">
            Salida
          </p>
          <p className="text-sm text-zinc-700">{formatDate(checkOutDate)}</p>
        </div>
      </div>
      <div className="border-t border-zinc-300 p-3">
        <p className="text-[10px] font-semibold uppercase text-zinc-800">
          Viajeros
        </p>
        <p className="text-sm text-zinc-700">{guestsSummary}</p>
      </div>
    </div>
  );
}
