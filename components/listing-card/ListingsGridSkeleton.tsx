interface ListingsGridSkeletonProps {
  columnsClassName?: string;
  count?: number;
}

export default function ListingsGridSkeleton({
  columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6",
  count = 6,
}: ListingsGridSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Cargando alojamientos"
      className={`grid gap-x-6 gap-y-10 ${columnsClassName}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-square w-full rounded-xl bg-zinc-200" />
          <div className="mt-3 h-3.5 w-3/4 rounded bg-zinc-200" />
          <div className="mt-2 h-3.5 w-1/2 rounded bg-zinc-200" />
          <div className="mt-2 h-3.5 w-2/3 rounded bg-zinc-200" />
        </div>
      ))}
    </div>
  );
}
