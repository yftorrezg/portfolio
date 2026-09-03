"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const placeholders = [1, 2, 3];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white">{t.projects.title}</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((placeholder, index) => (
          <motion.div
            key={placeholder}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/5 p-6 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {t.projects.placeholder.title}
            </span>
            <p className="text-sm text-zinc-500">{t.projects.placeholder.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
