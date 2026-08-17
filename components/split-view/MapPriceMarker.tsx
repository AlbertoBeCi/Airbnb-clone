interface MapPriceMarkerProps {
  price: number | string;
  isHighlighted: boolean;
  style: { left: string; top: string };
}

export default function MapPriceMarker({
  price,
  isHighlighted,
  style,
}: MapPriceMarkerProps) {
  return (
    <div
      style={style}
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-md transition-transform ${
        isHighlighted
          ? "z-10 scale-110 bg-zinc-900 text-white"
          : "bg-white text-zinc-900 hover:scale-105"
      }`}
    >
      {price} €
    </div>
  );
}
