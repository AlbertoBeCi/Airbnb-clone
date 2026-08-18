import type { LucideIcon } from "lucide-react";

export interface UserSession {
  name: string;
  avatarUrl?: string;
  isHost: boolean;
}

export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export interface SearchParams {
  destination: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guests: GuestCounts;
}

export type ListingBadge =
  | "Recomendación del viajero"
  | "Superanfitrión"
  | "Hotel destacado";

export interface ListingItem {
  id: string;
  images: string[];
  badge?: ListingBadge;
  title: string;
  description: string;
  location: string;
  datesAvailable?: string;
  pricePerNight?: number;
  originalPrice?: number;
  totalPrice: number | string;
  rating: number;
  reviewsCount?: number;
  lat: number;
  lng: number;
}

export interface CategoryTab {
  id: string;
  label: string;
  icon: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  reviewsCount: number;
  rating: number;
  yearsHosting: number;
  languages: string[];
  responseRate?: string;
  bio?: string;
}

export interface RatingCategory {
  category: string;
  score: number;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  author: { name: string; avatar: string; tenure: string };
  rating: number;
  date: string;
  comment: string;
}

export interface ListingDetail extends ListingItem {
  photos: Array<{ id: string; url: string; alt: string }>;
  amenities: Amenity[];
  host: Host;
  ratingsBreakdown: RatingCategory[];
  reviews: Review[];
  currency: string;
  maxGuests: number;
  minNights: number;
  maxNights: number;
}

export interface FilterOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface StickySection {
  id: string;
  label: string;
}

export type SortOrder = "asc" | "desc" | null;
