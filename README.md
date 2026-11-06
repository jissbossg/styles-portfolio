# Jorge Sierra Suárez — Portafolio

Portafolio minimalista y de alto contraste, construido con HTML5 semántico,
CSS moderno (Grid, Flexbox, variables, transiciones) y JavaScript vanilla.
El diseño prioriza legibilidad, jerarquía clara y una estética limpia.

## Cómo ejecutarlo
1. Clona el repositorio.
2. Abre `index.html` en el navegador.
3. Publica con **GitHub Pages**: Settings → Pages → Branch: `main` → Save.

## Resumen de cómo Microsoft Copilot me ayudó en cada paso

**1. CSS del sitio fundacional.** Copilot me ayudó a definir un sistema de tokens
(colores, radios, tipografía) y a estructurar el CSS por secciones (header, hero,
bloques, works, servicios, modal). Sugirió el uso de `clamp()` y `aspect-ratio` para
tipografía y avatares fluidos.

**2. Diseño adaptable.** Copilot propuso dos breakpoints limpios (860px y 480px) y la
cuadrícula `repeat(auto-fit, minmax(240px, 1fr))` para la sección de trabajos. También
recomendó reorganizar el hero con `order: -1` para móviles, evitando duplicar estilos.

**3. Interactividad UI/UX.** Copilot generó el código de los modales accesibles
(cierre con `Escape`, con overlay y con botón), los tooltips CSS puros en la sección
de servicios, y los efectos `:hover` con transiciones suaves en tarjetas y enlaces.

**4. Mejoras visuales.** Se aplicaron sombras suaves, rotación sutil de la tarjeta del
hero y acentos de color puntuales para lograr un acabado profesional sin romper la
estética minimalista. Se incluyó `prefers-reduced-motion` para accesibilidad.

## Créditos
- Tipografía: Helvetica Neue / system-ui.
- Imagen de retrato: Unsplash (uso libre).