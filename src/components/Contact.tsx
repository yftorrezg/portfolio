"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EMAIL = "tu-email@ejemplo.com";
const GITHUB_USERNAME = "yamilfernandotorrezgarciacc-bit";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-zinc-300">{t.contact.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            {t.contact.emailLabel}
          </a>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.contact.githubLabel}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
