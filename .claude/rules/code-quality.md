# Code quality

How new code is written here. `CODEBASE.md` says where older files differ; a file you touch does not have to be rewritten, but new code follows this.

- TypeScript strict. No `any`; the compiler already rejects unused locals and parameters.
- Function components with hooks, named by what they are (`EventPage`, `OrgCard`). One component per file, in the folder of the feature it belongs to.
- Styling is Tailwind in the JSX. Reuse the look of the newer pages: `font-grotesk` headings, the `border-l-4 border-[#003DA5]` accent on titles, ink `#10182B`, ICF blue `#003DA5`. Do not mix in a new palette or font, and do not add CSS files.
- Icons from `lucide-react` only. No new UI, animation, form or icon library; do not install a package for something Tailwind or the platform does.
- Data that repeats (events, organisations, articles, timeline) goes in a typed array and is rendered with `.map`; do not copy a block of JSX per item.
- Image and video paths are absolute from `public/` (`/logos/x.png`). Every `<img>` has a meaningful `alt` in Spanish.
- Links to other sites use `target="_blank"` with `rel="noopener noreferrer"`.
- No `console.log` left behind. Errors the user can act on show in the UI (like the contact form's snackbar).
- Keep the diff to the task: no reformatting of files you did not change, no renames, no dependency removal. The unused packages listed in `CODEBASE.md` stay until the owner decides.
- Responsive from the start: check the layout at phone width, because most visitors come from a phone.
