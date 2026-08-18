import BookingDateInputs from "./BookingDateInputs";
import GuestCounter from "./GuestCounter";

interface BookingDatesGuestsProps {
  checkIn: string;
  checkOut: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  guests: number;
  maxGuests: number;
  onGuestsChange: (guests: number) => void;
}

const BookingDatesGuests = ({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  guests,
  maxGuests,
  onGuestsChange,
}: BookingDatesGuestsProps) => {
  return (
    <div className="mt-4 rounded-xl border border-zinc-300">
      <BookingDateInputs
        checkIn={checkIn}
        checkOut={checkOut}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
      />
      <div className="border-t border-zinc-300">
        <GuestCounter
          guests={guests}
          minGuests={1}
          maxGuests={maxGuests}
          onChange={onGuestsChange}
        />
      </div>
    </div>
  );
};

export default BookingDatesGuests;
