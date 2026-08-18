import AmenitiesGrid from "@/components/amenities/AmenitiesGrid";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import HostProfileCard from "@/components/host-profile/HostProfileCard";
import type { ListingDetail } from "@/lib/types";

const ListingDetailMain = ({ listing }: { listing: ListingDetail }) => {
  return (
    <div>
      <p className="border-b border-zinc-200 pb-8 text-zinc-700">
        {listing.description}
      </p>
      <div id="amenities">
        <AmenitiesGrid amenities={listing.amenities} />
      </div>
      <div id="reviews">
        <ReviewsSection
          overallScore={listing.rating}
          totalReviews={listing.reviewsCount ?? 0}
          breakdown={listing.ratingsBreakdown}
          reviews={listing.reviews}
        />
      </div>
      <div id="host">
        <HostProfileCard
          hostName={listing.host.name}
          avatarUrl={listing.host.avatarUrl}
          isSuperhost={listing.host.isSuperhost}
          reviewsCount={listing.host.reviewsCount}
          rating={listing.host.rating}
          yearsHosting={listing.host.yearsHosting}
          languages={listing.host.languages}
          responseRate={listing.host.responseRate}
          bio={listing.host.bio}
        />
      </div>
    </div>
  );
};

export default ListingDetailMain;
