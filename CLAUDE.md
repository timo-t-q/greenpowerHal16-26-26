# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page presentation/portfolio website for the **HAGAP** student team (SPŠE Hálova 16) for the Greenpower 2026 competition. Content is in **Slovak** — keep new user-facing copy in Slovak to match. The site was scaffolded with **Figma Make**, which explains several conventions below (the `figma/` component, Unsplash image URLs with `figma` UTM params, the versioned import aliases, and the committed shadcn/ui library).

Live at `greenpower.reallysoftware.xyz` (custom-domain GitHub Pages; see `CNAME`).

## Commands

```bash
npm install      # install dependencies
npm run dev      # Vite dev server on http://localhost:3000 (auto-opens browser)
npm run build    # production build to dist/
```

There is **no test, lint, or type-check step** — no `tsconfig.json` exists, and Vite/SWC strips types without checking them. Verify changes by running `npm run dev` and looking at the page.

## Architecture

**Stack:** React 18 + TypeScript, Vite 6 (`@vitejs/plugin-react-swc`), Tailwind CSS v4 styling, shadcn/ui + Radix primitives, `lucide-react` icons.

**Page composition:** `src/main.tsx` mounts `src/App.tsx`, which renders one section component per page region in fixed order: `Navigation`, `Hero`, `TeamIntro`, `Planning`, `Progress`, `GreenpowerProjects`, `Reflection`, `Contact`. Each section lives in `src/components/<Name>.tsx`, is self-contained, and **hardcodes its own content** (no data files, no CMS, no props passed from `App`). To change page content, edit the relevant section component directly.

**In-page navigation:** `Navigation.tsx` is a fixed pill bar with a hardcoded `navItems` array of hash links (`#domov`, `#tim`, `#planovanie`, `#priebeh`, `#greenpower`, `#reflexia`, `#kontakt`). These must stay in sync with the `id` attributes on each section's root element.

**Images:** Use `src/components/figma/ImageWithFallback.tsx` for remote/Unsplash images (it renders a placeholder on load error). Local assets (team photos, logos) live in `public/` and are referenced by root-relative path (e.g. `src="logo192.png"`).

## Styling — important gotcha

Tailwind is **not installed and not compiled at build time** (it is not in `package.json`, and there is no `tailwind.config`, no `postcss.config`, and no Tailwind Vite plugin).

- The only stylesheet loaded is `src/index.css`, imported by `main.tsx`. It is a **committed, pre-compiled Tailwind v4 build artifact** (~1600 lines, with the design tokens inlined). Do not hand-edit it.
- `src/styles/globals.css` is the original Tailwind v4 **source** (design tokens in `:root`/`.dark`, `@theme inline`, `@layer base`). It is **not imported anywhere** and has no effect on the running site.

Practical consequence: adding a Tailwind utility class only works if that class already exists in the compiled `index.css`. New/unused utilities and edits to `globals.css` will silently not apply. Prefer composing from utilities already present; for genuinely new styling, add plain CSS or inline styles rather than expecting Tailwind to compile.

## Conventions

- **Import alias:** `@/` → `src/` (e.g. `@/components/ui/button`).
- **Versioned aliases:** `vite.config.ts` aliases version-pinned specifiers like `lucide-react@0.487.0` and `@radix-ui/react-tabs@1.1.3` back to the bare package. This is a Figma Make export artifact — write normal bare imports (`from 'lucide-react'`); don't add new versioned ones.
- **`src/components/ui/`** is the generated shadcn/ui library (~50 components). Treat it as vendored: prefer reusing these primitives in section components over editing them.
- The `dist/` build output is committed to the repo (used for deployment), so rebuild and commit it when shipping changes that need to go live.
