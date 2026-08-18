"use client";

import { useState } from "react";
import Image from "next/image";
import MobilePhotoHeroActions from "./MobilePhotoHeroActions";

interface MobilePhotoHeroProps {
  photos: Array<{ id: string; url: string; alt: string }>;
}

export default function MobilePhotoHero({ photos }: MobilePhotoHeroProps) {
  const [index, setIndex] = useState(0);

  function step(delta: number) {
    setIndex((current) => (current + delta + photos.length) % photos.length);
  }

  return (
    <div className="relative h-[65vh] w-full overflow-hidden sm:hidden">
      <MobilePhotoHeroActions />
      <Image
        src={photos[index].url}
        alt={photos[index].alt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Foto anterior"
        className="absolute inset-y-0 left-0 z-10 w-1/2"
      />
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Foto siguiente"
        className="absolute inset-y-0 right-0 z-10 w-1/2"
      />
      <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
        {index + 1} / {photos.length}
      </span>
    </div>
  );
}
