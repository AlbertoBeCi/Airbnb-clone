"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Share2, Heart } from "lucide-react";

const MobilePhotoHeroActions = () => {
  const router = useRouter();

  return (
    <>
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Volver"
        className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <button
          type="button"
          aria-label="Compartir"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <Share2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Guardar en favoritos"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default MobilePhotoHeroActions;
