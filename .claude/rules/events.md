# Events

An event lives in five places that must agree (see the table in `CODEBASE.md`). Changing one without the others breaks the page without a type error.

## Adding an event

1. `public/gallery/<folder>/` with the photos and videos, and the flyer in `public/logos/`.
2. `Events/eventsList.ts`: new entry with the next free `id` and a `url` that is a valid path segment.
3. `Events/<Name>/<name>Info.ts`: `{id, name, folderName}`. Use an `id` no other info uses; leave `folderName` as `""` when there is no gallery.
4. `Events/eventsMap.ts`: add `[events[N].url]: <info>`, where `N` is the position of the new entry in `eventsList.ts` (zero based). The map is built by array position, so check `N` against the list.
5. `Events/<Name>/<name>Description.tsx`: the page body, in the style of the existing ones.
6. `pages/event.tsx`: a `case` for the new info `id` in the `switch`, and the event name in the "not found" text.
7. `Gallery/utils/getPhotos.ts`: a block for the folder listing each file, when there is a gallery.

## Rules

- Never reorder or remove entries of `eventsList.ts` without re-checking `eventsMap.ts`, which depends on array positions.
- Do not change an existing event's `url`: it is a public link people have shared.
- Check each file listed in `getPhotos.ts` exists in `public/gallery/<folder>/`; a missing file shows a broken slide, not an error.
- When the three places that hold the id (`eventsList.ts`, the info file, the `switch`) disagree, report it instead of fixing one side silently.
