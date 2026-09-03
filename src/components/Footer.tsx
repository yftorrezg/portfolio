"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
      © {year} Yamil Fernando Torrez García — {t.footer.rights}
    </footer>
  );
}
