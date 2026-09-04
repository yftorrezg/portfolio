@AGENTS.md

# Portafolio de Yamil — contexto del proyecto

- **Repo**: https://github.com/yftorrezg/portfolio (cuenta correcta es `yftorrezg`, NO
  `yamilfernandotorrezgarciacc-bit` — ese quedó descartado, no usarlo).
- **Deploy**: Vercel, proyecto `portfolio` en el team `yftorrezgs-projects`. Producción sigue la
  rama `main`. SSO/Deployment Protection está desactivado a propósito (sitio público).
- **Flujo de trabajo**: todo el contenido nuevo se hace en la rama `developer` → push → Vercel
  genera un Preview Deployment automático sin tocar producción → cuando está revisado y aprobado,
  se abre un Pull Request `developer → main` y se mergea (dispara el deploy de producción).
- **Hoja de ruta de contenido pendiente**: ver `PORTFOLIO_TODO.md` en la raíz de este repo (fotos
  reales, redes sociales nuevas, selección final de proyectos a mostrar).
- **Stack**: Next.js 16 (App Router, TypeScript, Tailwind v4), React Three Fiber + drei
  (`src/components/Hero3D.tsx`), Framer Motion, i18n propio (`src/lib/i18n/LanguageContext.tsx`
  + `es.json`/`en.json`, sin librería externa).
