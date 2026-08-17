import { Grid3x3 } from "lucide-react";
import GalleryTile from "./GalleryTile";

interface PhotoGalleryGridProps {
  photos: Array<{ id: string; url: string; alt: string }>;
  onOpenGalleryModal?: () => void;
}

export default function PhotoGalleryGrid({
  photos,
  onOpenGalleryModal,
}: PhotoGalleryGridProps) {
  const tiles = photos.slice(0, 5);

  return (
    <div className="relative grid h-[420px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl">
      <GalleryTile
        url={tiles[0]?.url}
        alt={tiles[0]?.alt ?? ""}
        className="col-span-2 row-span-2"
      />
      {tiles.slice(1).map((photo) => (
        <GalleryTile key={photo.id} url={photo.url} alt={photo.alt} />
      ))}

      <button
        type="button"
        onClick={onOpenGalleryModal}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-md"
      >
        <Grid3x3 className="h-4 w-4" />
        Mostrar todas las fotos
      </button>
    </div>
  );
}
