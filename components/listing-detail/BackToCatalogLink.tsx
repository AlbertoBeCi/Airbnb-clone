import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackToCatalogLink = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex items-center gap-2 px-4 pt-4 text-sm font-medium text-zinc-700 hover:text-zinc-900 sm:px-8"
    >
      <ArrowLeft className="h-4 w-4" />
      Volver al catálogo
    </Link>
  );
};

export default BackToCatalogLink;
