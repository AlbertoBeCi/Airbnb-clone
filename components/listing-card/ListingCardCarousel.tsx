"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ListingCardBadge from "./ListingCardBadge";
import type { ListingBadge } from "@/lib/types";

interface ListingCardCarouselProps {
  images: string[];
  title: string;
  badge?: ListingBadge;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ListingCardCarousel = ({
  images,
  title,
  badge,
  isFavorite,
  onToggleFavorite,
}: ListingCardCarouselProps) => {
  const [index, setIndex] = useState(0);

  function step(delta: number, event: React.MouseEvent) {
    event.preventDefault();
    setIndex((current) => (current + delta + images.length) % images.length);
  }

  return (
    <div className="group/carousel relative aspect-square w-full overflow-hidden rounded-xl">
      {badge && <ListingCardBadge badge={badge} />}
      <Image
        src={images[index]}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
      />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          onToggleFavorite();
        }}
        aria-label="Guardar en favoritos"
        className="absolute right-3 top-3 z-10"
      >
        <Heart
          className={`h-6 w-6 drop-shadow ${
            isFavorite ? "fill-rose-500 text-rose-500" : "fill-black/40 text-white"
          }`}
        />
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => step(-1, event)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-1.5 group-hover/carousel:block"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(event) => step(1, event)}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-1.5 group-hover/carousel:block"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default ListingCardCarousel;
