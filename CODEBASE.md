# CODEBASE

How the code is today (2026-10-13). The rules in `.claude/rules/` say how new code must be. Where they disagree, this file is the fact and the rule is the target.

## Stack

- Vite 5, React 18, TypeScript 5 (strict, `noUnusedLocals`, `noUnusedParameters`), Tailwind 3, React Router 7 (`BrowserRouter`).
- `lucide-react` icons, AOS scroll animations (initialised once in `App.tsx`), `@emailjs/browser` for the contact form, MUI only for `components/SnackBar.tsx`.
- Deploy: Vercel. `vercel.json` rewrites every path to `/`, so routing is client side.
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`.

## Routes (`src/App.tsx`)

| Path | Page | Notes |
|---|---|---|
| `/` | `pages/home.tsx` | Hero, AboutUs, EventsGallery (id `gallery`), ContactUs (id `contact`) |
| `/info` | `pages/moreAboutUs.tsx` | Biography and timeline of the founder, Father Pedro Richards, all inline |
| `/articulos` | `pages/articlesPage.tsx` | `ARTICLES` array of external links, inline |
| `/contact` | `components/ContactUs.tsx` | Same component as on the home page |
| `/events/:eventName` | `pages/event.tsx` | `:eventName` is the `url` of an entry in `eventsList.ts` |

`pages/MainGallery.tsx` is not routed anywhere. `utils/scrollToTop.tsx` runs on every navigation. The Navbar jumps to home sections by hash (`#gallery`, `#contact`).

## Layout

```
src/
  App.tsx, main.tsx, index.css
  pages/                  one file per route
  components/
    Navbar.tsx, Hero.tsx, AboutUs.tsx, ContactUs.tsx, SnackBar.tsx
    Events/               one folder per event + eventsList.ts + eventsMap.ts
    EventsGallery/        home page cards, one per event
    Gallery/              carousel + lightbox for an event's photos and videos
      utils/getPhotos.ts  hardcoded file lists per folder
    Organizations/        related organisations section
  utils/                  consts.ts, types.ts, interfaces.ts, relatedOrganizations.ts, scrollToTop.tsx
public/                   gallery/<folder>/, logos/, logos_icf/, orgs/, articles_photos/
```

## Events: the part that is easy to break

An event is spread over five places, and two different numeric ids exist for the same event.

| Piece | File | What it holds |
|---|---|---|
| Card on the home page and valid URL | `Events/eventsList.ts` | `{id, src, alt, eventName, url}`; `id` here is the list id |
| Title and gallery folder | `Events/<Name>/<name>Info.ts` | `{id, name, folderName}`; `id` here is a different number |
| Link between the two | `Events/eventsMap.ts` | `eventMap[events[N].url] = info`, **by array index** |
| Description text | `Events/<Name>/<name>Description.tsx` | the page body |
| Which description renders | `pages/event.tsx` | `switch (event.id)` on the **info** id |
| Photos and videos | `Gallery/utils/getPhotos.ts` | `if (folderName === "...")` with each file listed by hand |

Current values:

| Event | `url` | list id | info id | `folderName` |
|---|---|---|---|---|
| Sobre Roca | `sobreRoca` | 1 | 2 | `sobreRocas` |
| Cimientos | `cimientos` | 2 | 1 | `cimientos` |
| Fertilidad | `reconocimientoFertilidad` | 3 | 3 | none (no gallery) |

So the `switch` in `event.tsx` maps info id 1 to Cimientos, 3 to Fertilidad and everything else (2) to Sobre Roca. Reordering `eventsList.ts` silently pairs the wrong info with the wrong URL. The "event not found" text in `event.tsx` also lists the event names by hand.

## Gallery

`Gallery.tsx` (250 lines) is a carousel with thumbnails, autoplay (5 s), swipe, keyboard and a lightbox. It receives `eventName`, which is a **folder name**, and calls `listMediaFromFolder`. Media files are served from `public/gallery/<folder>/`. The comment in `MainGallery.tsx` about an S3 bucket is stale: nothing is fetched from S3 any more, but `index.html` still loads the favicon from an S3 URL.

## Contact form

`ContactUs.tsx` calls `emailjs.send` with the service id, template id and public key written in the file, and the recipient address in the template params. An EmailJS public key is meant to be public, but changing the recipient or the keys means editing the code. There is no `.env` use anywhere.

## Content that lives in code

- `utils/consts.ts`: `MISION` (shown in AboutUs) and `WHO_WE_ARE` (not used).
- `utils/relatedOrganizations.ts`: `RELATED_ONGS`, logos in `public/orgs/`.
- `pages/articlesPage.tsx`: `ARTICLES`, images in `public/articles_photos/`.
- `pages/moreAboutUs.tsx`: `TIMELINE` and the long biography text.
- `App.tsx`: footer text with the year (2024 today).

## Styling

- Tailwind utility classes in the JSX; `index.css` only imports fonts and the slick css.
- Newer pages (`event.tsx`, `moreAboutUs.tsx`, `EventsGallery`, event descriptions) share one look: `font-grotesk` headings, a `border-l-4 border-[#003DA5]` accent on titles, ink `#10182B`, ICF blue `#003DA5` (also `pantone.classic-blue` in the Tailwind config), beige `#EDE7DA` backgrounds.
- Older components (`Navbar`, `ContactUs`, `AboutUs`) use `blue-50` and `gray-*` backgrounds. `ContactUs` uses `font-lexend`, which the Tailwind config does not define, so it falls back to the default font.
- Default body font is Poppins (loaded in `index.html`); `fraunces`, `serif` (Source Serif 4) and `grotesk` (Space Grotesk) are defined in `tailwind.config.js`.

## Things that look unused

Grep found no import in `src/` for `@aws-sdk/client-s3`, `@reduxjs/toolkit`, `react-redux` or `react-slick`. `slick-carousel` css is imported in `index.css`. `listAllGalleries` and `setEventName` have no callers. They are leftovers from earlier versions; do not build on them, and ask before removing.

## Verification today

`npx tsc -p tsconfig.app.json --noEmit` and `npm run lint` both pass with no output. There are no tests.
