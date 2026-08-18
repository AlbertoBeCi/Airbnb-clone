export function formatRating(rating: number): string {
  return rating.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
