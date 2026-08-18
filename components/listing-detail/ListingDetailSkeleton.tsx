const ListingDetailSkeleton = () => {
  return (
    <main className="flex-1 animate-pulse px-4 pt-6 sm:px-8">
      <div className="mb-4 h-7 w-2/3 rounded bg-zinc-200 sm:w-1/3" />
      <div className="h-[65vh] w-full rounded-none bg-zinc-200 sm:h-[420px] sm:rounded-2xl" />
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full rounded bg-zinc-200" />
        <div className="h-4 w-5/6 rounded bg-zinc-200" />
        <div className="h-4 w-2/3 rounded bg-zinc-200" />
      </div>
    </main>
  );
};

export default ListingDetailSkeleton;
