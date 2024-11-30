# Tailwind v4 Vite/Monorepo Reproduction

This reproduction contains the following:
- `ui` package which exports a (in reality would be) styled `Button` component which uses a primitive headless component from `bits-ui`.
- `docs` package which uses `ui` and `@tailwindcss/vite@next` & `tailwindcss@next`.

## Reproduction Steps

1. `pnpm install && pnpm dev` in the root of the repo (will build the `ui` package and start the `docs` dev server)
2. Notice that the page renders and all is well.
3. Open the `docs/vite.config.ts` file and add `tailwindcss()` to the `plugins` array / save the file.
4. Notice the dev server crashes and appears to attempt to analyze the entirety of the `bits-ui` package, resulting in a bunch `p` has already been declared errors.
5. Remove the `tailwindcss()` plugin from the `docs/vite.config.ts` file and save the file.
6. Notice that the dev server starts as normal.