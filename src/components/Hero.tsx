"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <Hero3D />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-white/20"
        >
          <Image
            src="/avatar-placeholder.svg"
            alt={t.hero.name}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{t.hero.greeting}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-6xl">{t.hero.name}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">{t.hero.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
