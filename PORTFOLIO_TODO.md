# Hoja de ruta de contenido — Portafolio

Checklist vivo para completar el portafolio con contenido real. Se trabaja en la rama
`developer`; cuando algo esté listo y revisado en el Preview Deployment de Vercel, se mergea
a `main` vía Pull Request.

## 1. Fotos

- [ ] **Perfil (Hero)**: 1 foto profesional, buena luz (natural, sin flash directo), fondo liso,
      encuadre desde el pecho. Reemplaza `public/avatar-placeholder.svg`.
- [ ] **Sobre mí** (opcional): 1 foto más natural, trabajando.
- [ ] **Proyectos de software**: capturas de pantalla de la UI real (1–3 por proyecto), no fotos.
- [ ] **Trabajo de hardware** (laptops, PCs de escritorio, celulares, tablets): 6–10 fotos
      curadas en total. Priorizar: componente bien iluminado y enfocado, antes/después de una
      reparación, equipo ya funcionando. Fondo de trabajo ordenado, luz pareja. Mejor pocas y
      buenas que muchas y mal tomadas.

## 2. Animación de fotos de hardware

No se puede "3D-ificar" una foto real como el Hero (eso requiere modelos 3D). Con Framer Motion
(ya instalado) se puede lograr un efecto premium igual:
- Tilt 3D al pasar el mouse sobre la tarjeta de la foto.
- Reveal al hacer scroll (mismo patrón que Habilidades/Proyectos).
- Opcional: slider antes/después para una reparación puntual.

## 3. Redes sociales

Cuentas **nuevas y profesionales** (no personales) a crear:
- [ ] LinkedIn (perfil profesional dedicado)
- [ ] Instagram (contenido de reparaciones, antes/después)
- [ ] TikTok o X (contenido corto: reparaciones, tips de Linux, mini-clases)
- [x] GitHub — ya existe: `yftorrezg`

Nota: crear las cuentas es un paso manual (requiere verificación de identidad/teléfono personal).
Cuando estén creadas, se agregan como íconos/links en Contacto y Footer.

## 4. Docencia / Tutoría

- [ ] Agregar categoría "Docencia / Tutoría" en Habilidades: tutoría de Matemática e Inglés,
      nivel primaria/secundaria. (Contenido base ya sumado a `es.json`/`en.json`.)

## 5. Selección de proyectos

Reemplazar los 3 placeholders por **3 a 6 proyectos reales como máximo**. Criterio:
- Terminados y demostrables (deployado, demo o GIF) — no repos a medio hacer.
- Que cubran áreas distintas del perfil (full-stack, IA/Visión por Computadora, herramienta
  propia del negocio de reparación, etc.).
- Con narrativa corta: problema → solución → stack → resultado/impacto.

Mejor 3 proyectos bien explicados que 10 sin contexto.
