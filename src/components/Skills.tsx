"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold text-white">{t.skills.title}</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
