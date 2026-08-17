import FilterBar from "@/components/filters/FilterBar";
import ListingsGrid from "@/components/listing-card/ListingsGrid";
import { LISTINGS } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <FilterBar />
      <section className="px-4 py-8 sm:px-8">
        <ListingsGrid listings={LISTINGS} />
      </section>
    </main>
  );
}
