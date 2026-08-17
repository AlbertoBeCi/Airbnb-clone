import { notFound } from "next/navigation";
import ListingDetailView from "@/components/listing-detail/ListingDetailView";
import { getListingById } from "@/lib/mock-data";

export default async function ListingDetailPage({
  params,
}: PageProps<"/listing/[id]">) {
  const { id } = await params;

  if (!getListingById(id)) {
    notFound();
  }

  return <ListingDetailView listingId={id} />;
}
