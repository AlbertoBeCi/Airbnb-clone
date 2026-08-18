import PhotoGalleryGrid from "@/components/gallery/PhotoGalleryGrid";
import MobilePhotoHero from "@/components/gallery/MobilePhotoHero";
import BackToCatalogLink from "./BackToCatalogLink";
import ListingHeader from "./ListingHeader";
import HostInfoRow from "./HostInfoRow";
import type { ListingDetail } from "@/lib/types";

const ListingDetailHero = ({ listing }: { listing: ListingDetail }) => {
  return (
    <>
      <BackToCatalogLink />
      <MobilePhotoHero photos={listing.photos} />
      <div className="hidden sm:block sm:px-8 sm:pt-6">
        <PhotoGalleryGrid photos={listing.photos} />
      </div>

      <div className="px-4 sm:px-8">
        <ListingHeader
          title={listing.title}
          rating={listing.rating}
          reviewsCount={listing.reviewsCount}
          location={listing.location}
        />
        <HostInfoRow
          hostName={listing.host.name}
          avatarUrl={listing.host.avatarUrl}
          yearsHosting={listing.host.yearsHosting}
        />
      </div>
    </>
  );
};

export default ListingDetailHero;
