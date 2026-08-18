import { Star } from "lucide-react";
import type { RatingCategory } from "@/lib/types";

interface RatingsBreakdownProps {
  overallScore: number;
  totalReviews: number;
  breakdown: RatingCategory[];
}

const RatingsBreakdown = ({
  overallScore,
  totalReviews,
  breakdown,
}: RatingsBreakdownProps) => {
  return (
    <div className="border-b border-zinc-200 pb-10">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Star className="h-5 w-5 fill-zinc-900" />
        {overallScore.toFixed(2)} · {totalReviews} reseñas
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
        {breakdown.map((item) => (
          <div key={item.category} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 shrink-0 text-zinc-600" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-zinc-700">
                <span>{item.category}</span>
                <span>{item.score.toFixed(1)}</span>
              </div>
              <div className="mt-1 h-1 w-full rounded-full bg-zinc-200">
                <div
                  className="h-1 rounded-full bg-zinc-900"
                  style={{ width: `${(item.score / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsBreakdown;
