# دعوة زفاف — محمد و هديل

Ultra-premium Arabic wedding invitation website. A single static, scroll-revealed
page styled as an embossed ivory invitation card, built with React 19, TypeScript,
Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

Requires Node 18.18+ (Node 20 LTS recommended).

## Customizing the event details

Open `src/components/Typography/DateSection.tsx` and edit the `EVENT` object
at the top of the file with the real date, time, and venue:

```ts
const EVENT = {
  date: "...",
  time: "...",
  place: "...",
};
```

## Customizing the names

The couple's names live in `src/components/Typography/CoupleNames.tsx`
(`محمد` / `هديل`). Swap them for the real names — the layout, font size, and
animation will adapt automatically since sizing is fluid (`clamp()`-based).

## Structure

- `components/Invitation/` — the card shell: border, corner ornaments,
  background medallion, dividers, and the emboss effect wrapper.
- `components/Typography/` — each content block of the invitation
  (Basmala, Qur'an verse, names, blessing, date/time/place, closing dua).
- `components/Layout/` — page-level wrappers (paper background, centering
  container, section spacing).
- `components/ui/` — small reusable motion primitives (`FadeIn`, `Reveal`)
  and the SVG `Ornament` motif.
- `styles/` — design tokens and palette (`globals.css`), the Arabic type
  scale (`typography.css`), arabesque pattern + dividers (`ornaments.css`),
  and the paper/emboss/shadow system (`paper.css`).

## Accessibility

- Semantic landmarks (`main`, `section` per block, labelled via `aria-label`).
- Respects `prefers-reduced-motion`: all Framer Motion reveals collapse to
  instant, static rendering via the `useReducedMotion` hook.
- Visible focus rings on any interactive element.
- Text contrast between the dark brown ink and ivory paper meets AA for
  large decorative type and body copy alike.

## Performance notes

- No raster images — every ornament, border, and texture is CSS or inline
  SVG, so there is nothing to lazy-load or optimize further.
- Motion is GPU-friendly (`opacity`/`transform`/`pathLength` only).
- Google Fonts are loaded with `preconnect` and `display=swap` to avoid
  blocking first paint.
