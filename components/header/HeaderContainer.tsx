"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderContainer() {
  const pathname = usePathname();
  const isFull = pathname === "/";

  return <Header variant={isFull ? "full" : "compact"} />;
}
