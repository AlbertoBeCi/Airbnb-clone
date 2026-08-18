import AmenityItem from "./AmenityItem";
import type { Amenity } from "@/lib/types";

interface AmenitiesGridProps {
  amenities: Amenity[];
  onShowAllModal?: () => void;
}

const AmenitiesGrid = ({
  amenities,
  onShowAllModal,
}: AmenitiesGridProps) => {
  return (
    <div className="border-b border-zinc-200 py-10">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900">
        Lo que ofrece este alojamiento
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.slice(0, 8).map((amenity) => (
          <AmenityItem key={amenity.id} label={amenity.label} icon={amenity.icon} />
        ))}
      </div>
      <button
        type="button"
        onClick={onShowAllModal}
        className="mt-6 rounded-lg border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
      >
        Mostrar los {amenities.length} servicios
      </button>
    </div>
  );
};

export default AmenitiesGrid;
