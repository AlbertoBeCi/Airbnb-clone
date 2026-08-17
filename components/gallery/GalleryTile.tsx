import Image from "next/image";

interface GalleryTileProps {
  url: string;
  alt: string;
  className?: string;
}

export default function GalleryTile({ url, alt, className = "" }: GalleryTileProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={url} alt={alt} fill sizes="50vw" className="object-cover" />
    </div>
  );
}
