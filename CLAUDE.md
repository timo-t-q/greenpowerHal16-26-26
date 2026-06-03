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

**Stack:** React 18 + TypeScript, Vite 6 (`@vitejs/plugin-react-swc`), Tailwind CSS v4 (compiled via `@tailwindcss/vite`), shadcn/ui + Radix primitives, `lucide-react` icons. The package is ESM (`"type": "module"` in `package.json`).

**Page composition:** `src/main.tsx` mounts `src/App.tsx`, which renders one section component per page region in fixed order: `Navigation`, `Hero`, `TeamIntro`, `Planning`, `Progress`, `GreenpowerProjects`, `Reflection`, `Contact`. Each section lives in `src/components/<Name>.tsx`, is self-contained, and **hardcodes its own content** (no data files, no CMS, no props passed from `App`). To change page content, edit the relevant section component directly.

**In-page navigation:** `Navigation.tsx` is a fixed pill bar with a hardcoded `navItems` array of hash links (`#domov`, `#tim`, `#planovanie`, `#priebeh`, `#greenpower`, `#reflexia`, `#kontakt`). These must stay in sync with the `id` attributes on each section's root element.

**Images:** Use `src/components/figma/ImageWithFallback.tsx` for remote/Unsplash images (it renders a placeholder on load error). Local assets (team photos, logos) live in `public/` and are referenced by root-relative path (e.g. `src="logo192.png"`).

## Styling

Tailwind v4 is compiled at build/dev time by the `@tailwindcss/vite` plugin (see `vite.config.ts`). The single source stylesheet is **`src/styles/globals.css`**, imported by `main.tsx`; it starts with `@import "tailwindcss";` and holds the design tokens (`:root`/`.dark`), `@theme inline`, and `@layer base`. Any valid Tailwind utility used in a `.tsx` file is generated automatically — just add classes normally.

> Historical note: this project originally shipped a pre-compiled `src/index.css` artifact with Tailwind *not* installed, because `globals.css` was missing its `@import "tailwindcss";` line and so could never compile. That artifact was missing ~110 of the utility classes the components actually used (e.g. `inline-flex`, `gap-3`, `py-24`, `from-purple-500`), which silently broke spacing, list bullets, and active button states. The fix was to install `tailwindcss` + `@tailwindcss/vite`, add the missing `@import`, wire the plugin, and point `main.tsx` at `globals.css`. `src/index.css` has been deleted — don't reintroduce a hand-compiled stylesheet.

## Conventions

- **Import alias:** `@/` → `src/` (e.g. `@/components/ui/button`).
- **Versioned aliases:** `vite.config.ts` aliases version-pinned specifiers like `lucide-react@0.487.0` and `@radix-ui/react-tabs@1.1.3` back to the bare package. This is a Figma Make export artifact — write normal bare imports (`from 'lucide-react'`); don't add new versioned ones.
- **`src/components/ui/`** is the generated shadcn/ui library (~50 components). Treat it as vendored: prefer reusing these primitives in section components over editing them.
- The `dist/` build output is committed to the repo (used for deployment), so rebuild and commit it when shipping changes that need to go live.
