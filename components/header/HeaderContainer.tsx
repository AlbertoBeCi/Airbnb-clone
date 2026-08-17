"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";

export default function HeaderContainer() {
  const pathname = usePathname();
  const router = useRouter();
  const isFull = pathname === "/";

  return (
    <Header
      variant={isFull ? "full" : "compact"}
      onSearchSubmit={() => router.push("/search")}
    />
  );
}
