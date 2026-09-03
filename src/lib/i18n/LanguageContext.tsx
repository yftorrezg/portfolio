"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

export type Dictionary = typeof es;
export type Language = "es" | "en";

const dictionaries: Record<Language, Dictionary> = { es, en };

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === "es" ? "en" : "es")),
      t: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
