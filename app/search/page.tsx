import FilterBar from "@/components/filters/FilterBar";
import SplitViewLayout from "@/components/split-view/SplitViewLayout";
import { LISTINGS } from "@/lib/mock-data";

export default function SearchPage() {
  return (
    <main className="flex flex-1 flex-col">
      <FilterBar />
      <SplitViewLayout listings={LISTINGS} />
    </main>
  );
}
