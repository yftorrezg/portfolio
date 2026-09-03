"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-white/20 px-3 py-1 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:bg-white/10"
    >
      {t.languageToggle.label}
    </button>
  );
}
