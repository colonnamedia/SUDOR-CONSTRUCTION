# Sudor Construction

Marketing + lead-gen site for Sudor Construction ("Sudor Group") — two family-run
divisions under one roof: **Electric & Tile** (Doug) and **Demo & Dumpsters** (Braiden).

## Stack
- React 18 + Vite
- react-router-dom (real page URLs)
- vite-react-ssg (static prerender of every route for SEO)
- Resend serverless function for lead email routing (`/api/send-lead`)

## Local dev
```bash
npm install
npm run dev
```

## Build (prerenders every route to static HTML)
```bash
npm run build      # outputs to /dist
npm run preview
```

## Deploy (Vercel)
1. Import the repo in Vercel.
2. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
3. Add env vars: `RESEND_API_KEY`, `LEAD_FROM`.
4. Deploy. Point `sudorconstruction.com` DNS to Vercel.

## Lead routing
The single quote form routes by selected service:
- Electrical / Tile / Remodel / Addition / Commercial -> **Doug** (dougsudor@yahoo.com)
- Demolition / Dumpster / Cleanout / Junk removal / Moving -> **Braiden** (braidensudor@gmail.com)
- Every lead CCs **colonnamedia@gmail.com**.

Email sending stays inert until `RESEND_API_KEY` is set — the form still confirms
on submit, it just doesn't send yet.

## Swapping images (no code changes needed)

All images live in `public/images/`. Replace a file with the same name and it
just appears — nothing to edit in the code.

```
public/images/
├── logo/         logo.png · logo-white.png · logo-electric.png   (FINAL)
├── team/         owner.jpg (Doug) · braiden.jpg                  (FINAL)
├── gallery/      gallery-01..03.jpg          <- replace with real project photos
├── services/     electrical.jpg · lighting.jpg  <- placeholders (not yet placed in layout)
└── backgrounds/  hero.webp · footer.webp     <- replace hero with a real jobsite photo
```

### Hero image (landing page only)
`public/images/backgrounds/hero.webp` is currently a generated dark industrial
texture — intentional-looking, but it should be swapped for a real photo.

- **Recommended:** 1920x1080 (or wider), landscape, `.webp` or `.jpg`
- **Best subject:** a Sudor crew/jobsite shot, finished tile, or a truck+dumpster
- The hero applies a dark gradient overlay, so **darker images with open space on
  the left** work best (headline sits left).
- If you use a `.jpg` instead, update the two `url()` references in
  `src/styles.css` under `.hero.hero--home`.
- Free commercially-usable stock (if no client photo is available yet):
  Unsplash, Pexels, or Openverse — search "construction site", "electrician",
  "demolition". Always confirm the license allows commercial use.

## Still to confirm before launch
- Full business street address + ZIP + hours (for schema / local SEO)
- Real dumpster sizes & pricing (Dump Rentals page uses placeholders)
- Real project photos (Our Work gallery)
- Google Business Profile link, license #, exact service-area towns
