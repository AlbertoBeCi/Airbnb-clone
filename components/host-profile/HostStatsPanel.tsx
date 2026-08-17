import Image from "next/image";
import { Star, Award } from "lucide-react";

interface HostStatsPanelProps {
  hostName: string;
  avatarUrl: string;
  isSuperhost: boolean;
  reviewsCount: number;
  rating: number;
  yearsHosting: number;
}

export default function HostStatsPanel({
  hostName,
  avatarUrl,
  isSuperhost,
  reviewsCount,
  rating,
  yearsHosting,
}: HostStatsPanelProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-6 text-center">
      <div className="relative h-16 w-16 overflow-hidden rounded-full">
        <Image src={avatarUrl} alt={hostName} fill className="object-cover" />
      </div>
      <p className="text-lg font-semibold text-zinc-900">{hostName}</p>
      {isSuperhost && (
        <span className="flex items-center gap-1 text-xs font-medium text-zinc-700">
          <Award className="h-4 w-4" /> Superanfitrión
        </span>
      )}
      <div className="grid w-full grid-cols-2 gap-4 border-t border-zinc-200 pt-4 text-sm">
        <div>
          <p className="flex items-center justify-center gap-1 font-semibold text-zinc-900">
            <Star className="h-3.5 w-3.5" /> {rating.toFixed(1)}
          </p>
          <p className="text-zinc-500">{reviewsCount} reseñas</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">{yearsHosting}</p>
          <p className="text-zinc-500">años de anfitrión</p>
        </div>
      </div>
    </div>
  );
}
