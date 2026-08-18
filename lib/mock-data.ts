import {
  Building2,
  Castle,
  Caravan,
  TreePine,
  Waves,
  Mountain,
  Warehouse,
  Tent,
  Wifi,
  Car,
  UtensilsCrossed,
  WashingMachine,
  Tv,
  Wind,
  Flame,
  Dumbbell,
  PawPrint,
  Sparkles,
  MessageCircle,
  MapPin,
  KeyRound,
  Tag,
  ShieldCheck,
} from "lucide-react";
import type {
  Amenity,
  CategoryTab,
  FilterOption,
  Host,
  ListingDetail,
  ListingItem,
  RatingCategory,
  Review,
} from "./types";

export const NAV_TABS: CategoryTab[] = [
  { id: "all", label: "Todo", icon: "🌐" },
  { id: "stays", label: "Alojamientos", icon: "🏠" },
  { id: "experiences", label: "Experiencias", icon: "🎈" },
  { id: "services", label: "Servicios", icon: "🛎️" },
];

export const FILTER_OPTIONS: FilterOption[] = [
  { id: "amazing-views", label: "Vistas increíbles", icon: Mountain },
  { id: "cabins", label: "Cabañas", icon: Warehouse },
  { id: "beachfront", label: "Frente a la playa", icon: Waves },
  { id: "castles", label: "Castillos", icon: Castle },
  { id: "camping", label: "Acampada", icon: Tent },
  { id: "trending", label: "Tendencia", icon: TreePine },
  { id: "rooms", label: "Habitaciones", icon: Building2 },
  { id: "vans", label: "Autocaravanas", icon: Caravan },
];

const IMG = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`;
const AVATAR = (n: number) => `https://i.pravatar.cc/150?img=${n}`;

export const LISTINGS: ListingItem[] = [
  {
    id: "loft-malasana",
    images: [IMG("malasana-1"), IMG("malasana-2"), IMG("malasana-3")],
    badge: "Superanfitrión",
    title: "Loft luminoso en Malasaña",
    description: "Anfitrión: Marta · 2 camas · Madrid",
    location: "Madrid, España",
    datesAvailable: "12-17 sept",
    pricePerNight: 78,
    originalPrice: 104,
    totalPrice: 390,
    rating: 4.92,
    reviewsCount: 214,
    lat: 40.4265,
    lng: -3.7038,
  },
  {
    id: "atico-eixample",
    images: [IMG("eixample-1"), IMG("eixample-2"), IMG("eixample-3")],
    badge: "Recomendación del viajero",
    title: "Ático con terraza en Eixample",
    description: "Anfitrión: Jordi · 3 camas · Barcelona",
    location: "Barcelona, España",
    datesAvailable: "1-6 oct",
    pricePerNight: 112,
    originalPrice: 149,
    totalPrice: 560,
    rating: 4.87,
    reviewsCount: 156,
    lat: 41.3925,
    lng: 2.1621,
  },
  {
    id: "casa-rural-ronda",
    images: [IMG("ronda-1"), IMG("ronda-2"), IMG("ronda-3")],
    title: "Casa rural con piscina en Ronda",
    description: "Anfitrión: Isabel · 4 camas · Málaga",
    location: "Ronda, Málaga, España",
    datesAvailable: "20-25 sept",
    pricePerNight: 145,
    totalPrice: 725,
    rating: 4.95,
    reviewsCount: 98,
    lat: 36.7461,
    lng: -5.1652,
  },
  {
    id: "hotel-boutique-sevilla",
    images: [IMG("sevilla-1"), IMG("sevilla-2"), IMG("sevilla-3")],
    badge: "Hotel destacado",
    title: "Hotel boutique en el centro",
    description: "Sevilla · Habitación doble",
    location: "Sevilla, España",
    datesAvailable: "5-9 oct",
    pricePerNight: 95,
    originalPrice: 119,
    totalPrice: 380,
    rating: 4.8,
    reviewsCount: 302,
    lat: 37.3891,
    lng: -5.9845,
  },
  {
    id: "apartamento-gros",
    images: [IMG("gros-1"), IMG("gros-2"), IMG("gros-3")],
    title: "Apartamento a pie de playa",
    description: "Anfitrión: Xabier · 2 camas · San Sebastián",
    location: "San Sebastián, España",
    datesAvailable: "15-20 sept",
    pricePerNight: 130,
    totalPrice: 650,
    rating: 4.9,
    reviewsCount: 187,
    lat: 43.323,
    lng: -1.9713,
  },
  {
    id: "cabana-picos",
    images: [IMG("picos-1"), IMG("picos-2"), IMG("picos-3")],
    badge: "Superanfitrión",
    title: "Cabaña de montaña en Picos de Europa",
    description: "Anfitrión: Diego · 3 camas · Asturias",
    location: "Asturias, España",
    datesAvailable: "8-13 oct",
    pricePerNight: 88,
    totalPrice: 440,
    rating: 4.97,
    reviewsCount: 132,
    lat: 43.1866,
    lng: -4.8449,
  },
];

export const AMENITIES: Amenity[] = [
  { id: "wifi", label: "Wifi", icon: Wifi },
  { id: "parking", label: "Parking gratuito", icon: Car },
  { id: "kitchen", label: "Cocina equipada", icon: UtensilsCrossed },
  { id: "washer", label: "Lavadora", icon: WashingMachine },
  { id: "tv", label: "Televisión", icon: Tv },
  { id: "ac", label: "Aire acondicionado", icon: Wind },
  { id: "heating", label: "Calefacción", icon: Flame },
  { id: "gym", label: "Gimnasio", icon: Dumbbell },
  { id: "pets", label: "Se admiten mascotas", icon: PawPrint },
];

export const HOST: Host = {
  name: "Marta",
  avatarUrl: AVATAR(32),
  isSuperhost: true,
  reviewsCount: 214,
  rating: 4.92,
  yearsHosting: 6,
  languages: ["Español", "Inglés", "Francés"],
  responseRate: "Responde en menos de una hora",
  bio: "Vivo en Madrid y me encanta compartir los mejores rincones del barrio con mis huéspedes. Disponible siempre que me necesites durante tu estancia.",
};

export const RATINGS_BREAKDOWN: RatingCategory[] = [
  { category: "Limpieza", score: 4.9, icon: Sparkles },
  { category: "Comunicación", score: 4.95, icon: MessageCircle },
  { category: "Ubicación", score: 4.85, icon: MapPin },
  { category: "Llegada", score: 4.9, icon: KeyRound },
  { category: "Precio-calidad", score: 4.8, icon: Tag },
  { category: "Veracidad", score: 4.92, icon: ShieldCheck },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: { name: "Laura", avatar: AVATAR(5), tenure: "2 años en Airbnb" },
    rating: 5,
    date: "agosto de 2026",
    comment:
      "El piso es tal cual se ve en las fotos, muy limpio y bien ubicado. Marta estuvo pendiente de todo en todo momento.",
  },
  {
    id: "r2",
    author: { name: "Carlos", avatar: AVATAR(12), tenure: "4 años en Airbnb" },
    rating: 5,
    date: "julio de 2026",
    comment:
      "Volveríamos sin dudarlo. La zona es tranquila y muy bien comunicada con el centro.",
  },
  {
    id: "r3",
    author: { name: "Nina", avatar: AVATAR(21), tenure: "1 año en Airbnb" },
    rating: 4,
    date: "junio de 2026",
    comment:
      "Muy buena estancia, el único detalle es que la calle tiene algo de ruido los fines de semana.",
  },
  {
    id: "r4",
    author: { name: "Pablo", avatar: AVATAR(41), tenure: "3 años en Airbnb" },
    rating: 5,
    date: "mayo de 2026",
    comment:
      "Check-in súper fácil y el alojamiento tiene todo lo necesario. Recomendado al 100%.",
  },
];

export function getListingById(id: string): ListingItem | undefined {
  return LISTINGS.find((listing) => listing.id === id);
}

export function getListingDetail(id: string): ListingDetail | undefined {
  const listing = getListingById(id);
  if (!listing) return undefined;

  return {
    ...listing,
    photos: listing.images.map((url, index) => ({
      id: `${listing.id}-photo-${index}`,
      url,
      alt: `Foto ${index + 1} de ${listing.title}`,
    })),
    amenities: AMENITIES,
    host: HOST,
    ratingsBreakdown: RATINGS_BREAKDOWN,
    reviews: REVIEWS,
    currency: "EUR",
    maxGuests: 4,
    minNights: 2,
    maxNights: 21,
  };
}
