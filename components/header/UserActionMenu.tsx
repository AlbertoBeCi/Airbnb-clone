"use client";

import { useState } from "react";
import { Menu, CircleUserRound } from "lucide-react";
import type { UserSession } from "@/lib/types";

interface UserActionMenuProps {
  userSession?: UserSession;
}

const GUEST_OPTIONS = ["Reservas", "Mensajes", "Cuenta"];
const HOST_OPTIONS = ["Poner mi espacio en Airbnb", "Ayuda"];

export default function UserActionMenu({ userSession }: UserActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Abrir menú de usuario"
        className="flex items-center gap-2 rounded-full border border-zinc-200 py-1.5 pl-2.5 pr-2 shadow-sm transition-shadow hover:shadow-md"
      >
        <Menu className="h-4 w-4 text-zinc-700" />
        {userSession?.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={userSession.avatarUrl}
            alt={userSession.name}
            className="h-7 w-7 rounded-full object-cover"
          />
        ) : (
          <CircleUserRound className="h-7 w-7 text-zinc-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-zinc-100 bg-white py-2 shadow-xl">
          {(userSession?.isHost ? HOST_OPTIONS : GUEST_OPTIONS).map(
            (option) => (
              <button
                key={option}
                type="button"
                className="block w-full px-4 py-2.5 text-left text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {option}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
