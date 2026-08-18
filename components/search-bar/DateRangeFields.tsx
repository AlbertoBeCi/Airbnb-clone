import SearchBarField from "./SearchBarField";

interface DateRangeFieldsProps {
  checkInDate: string;
  checkOutDate: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
}

const DateRangeFields = ({
  checkInDate,
  checkOutDate,
  onCheckInChange,
  onCheckOutChange,
}: DateRangeFieldsProps) => {
  return (
    <>
      <SearchBarField label="Llegada">
        <input
          type="date"
          value={checkInDate}
          onChange={(event) => onCheckInChange(event.target.value)}
          className="w-32 bg-transparent text-sm text-zinc-600 outline-none"
        />
      </SearchBarField>

      <SearchBarField label="Salida">
        <input
          type="date"
          value={checkOutDate}
          onChange={(event) => onCheckOutChange(event.target.value)}
          className="w-32 bg-transparent text-sm text-zinc-600 outline-none"
        />
      </SearchBarField>
    </>
  );
};

export default DateRangeFields;
