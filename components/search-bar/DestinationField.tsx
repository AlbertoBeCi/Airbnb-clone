import SearchBarField from "./SearchBarField";

interface DestinationFieldProps {
  destination: string;
  onChange: (value: string) => void;
}

export default function DestinationField({
  destination,
  onChange,
}: DestinationFieldProps) {
  return (
    <SearchBarField label="Dónde">
      <input
        value={destination}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Explorar destinos"
        className="w-32 bg-transparent text-sm text-zinc-600 outline-none placeholder:text-zinc-400"
      />
    </SearchBarField>
  );
}
