"use client";

import { useState } from "react";

function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

export function useStaySelection(pricePerNight: number, fallbackTotalPrice: number) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const nights = nightsBetween(checkIn, checkOut);
  const hasValidStay = nights > 0;
  const priceTotal = hasValidStay ? pricePerNight * nights : fallbackTotalPrice;

  return {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    nights: hasValidStay ? nights : undefined,
    priceTotal,
  };
}
