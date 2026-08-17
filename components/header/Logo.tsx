import Link from "next/link";
import { Home } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-rose-500 shrink-0"
      aria-label="Ir a la página de inicio"
    >
      <Home className="h-7 w-7" strokeWidth={2.5} />
      <span className="hidden text-xl font-bold tracking-tight sm:inline">
        airbnb-clone
      </span>
    </Link>
  );
}
