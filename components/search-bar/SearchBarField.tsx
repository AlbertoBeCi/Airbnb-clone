import type { ReactNode } from "react";

interface SearchBarFieldProps {
  label: string;
  isLast?: boolean;
  className?: string;
  children: ReactNode;
}

const SearchBarField = ({
  label,
  isLast = false,
  className = "",
  children,
}: SearchBarFieldProps) => {
  return (
    <div
      className={`relative flex flex-col justify-center px-6 py-2.5 ${
        isLast ? "" : "border-r border-zinc-200"
      } ${className}`}
    >
      <span className="text-xs font-semibold text-zinc-900">{label}</span>
      {children}
    </div>
  );
};

export default SearchBarField;
