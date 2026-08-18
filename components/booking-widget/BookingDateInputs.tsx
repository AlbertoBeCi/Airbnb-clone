interface BookingDateInputsProps {
  checkIn: string;
  checkOut: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
}

const BookingDateInputs = ({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
}: BookingDateInputsProps) => {
  return (
    <div className="grid grid-cols-2 divide-x divide-zinc-300">
      <div className="p-3">
        <label className="text-[10px] font-semibold uppercase text-zinc-800">
          Llegada
          <input
            type="date"
            value={checkIn}
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => onCheckInChange(event.target.value)}
            className="mt-1 block w-full bg-transparent text-sm text-zinc-700 outline-none"
          />
        </label>
      </div>
      <div className="p-3">
        <label className="text-[10px] font-semibold uppercase text-zinc-800">
          Salida
          <input
            type="date"
            value={checkOut}
            min={checkIn || new Date().toISOString().split("T")[0]}
            onChange={(event) => onCheckOutChange(event.target.value)}
            className="mt-1 block w-full bg-transparent text-sm text-zinc-700 outline-none"
          />
        </label>
      </div>
    </div>
  );
};

export default BookingDateInputs;
