# InstitutoFamilia

Public website of the Instituto de Ciencias Familiares (ICF), Uruguay: Vite + React 18 + TypeScript + Tailwind 3, React Router 7. A static single page app, deployed on Vercel from this GitHub repo. There is no backend: the contact form sends mail through EmailJS and all content lives in the code and in `public/`.

@CODEBASE.md

## How to work here

- `.claude/rules/` loads with this file: `events`, `code-quality`, `content`. `CODEBASE.md` above says how the code is; the rules say how new code must be. When they disagree, say so instead of picking one silently.
- Commands: `npm run dev` serves on http://localhost:5173, `npm run lint`, `npm run build`.
- `npm run build` is `vite build` only and does not type check. Type check with `npx tsc -p tsconfig.app.json --noEmit`. On 2026-10-13 both it and `npm run lint` were clean, so any new error is yours.
- Before saying a task is done: the type check and `npm run lint`. There is no test suite; do not add one.
- Every user facing string is Spanish and lives in the component or data file that shows it. There is no i18n library.
- Icons come from `lucide-react`. Do not add a UI or icon library; style with Tailwind. MUI is only used for the contact form snackbar.
- Adding or changing an event (Sobre Roca, Cimientos, Fertilidad) touches five places that must agree. Read `.claude/rules/events.md` first.
- Branch off `main` with `git switch -c <name> --no-track`, push with `git push -u origin <name>`. Commits follow `feat:`, `fix:` or `refactor:` and a short sentence.
- `dist/` and `node_modules/` are ignored. Never edit `dist/`.
