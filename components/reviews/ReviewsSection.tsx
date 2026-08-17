import RatingsBreakdown from "./RatingsBreakdown";
import ReviewCard from "./ReviewCard";
import type { RatingCategory, Review } from "@/lib/types";

interface ReviewsSectionProps {
  overallScore: number;
  totalReviews: number;
  breakdown: RatingCategory[];
  reviews: Review[];
}

export default function ReviewsSection({
  overallScore,
  totalReviews,
  breakdown,
  reviews,
}: ReviewsSectionProps) {
  return (
    <div className="border-b border-zinc-200 py-10">
      <RatingsBreakdown
        overallScore={overallScore}
        totalReviews={totalReviews}
        breakdown={breakdown}
      />
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}
