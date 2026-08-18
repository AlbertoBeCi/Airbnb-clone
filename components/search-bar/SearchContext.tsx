"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchContextValue {
  destination: string;
  setDestination: (value: string) => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [destination, setDestination] = useState("");

  return (
    <SearchContext.Provider value={{ destination, setDestination }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext debe usarse dentro de SearchProvider");
  }
  return context;
}
