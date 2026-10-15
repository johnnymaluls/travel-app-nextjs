# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Hilink is a static, single-page marketing landing page for a travel and camping app. It is built with Next.js 14 (App Router), React 18, TypeScript (strict) and Tailwind CSS 3. It has no backend, API routes, data fetching or state management.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint    # ESLint (next/core-web-vitals)
```

The project has no test framework. To verify a change, run `npm run lint` and `npm run build`.

## Architecture

- `app/layout.tsx` renders `NavBar` and `Footer` around a `<main className="relative overflow-hidden">` wrapper. `app/page.tsx` stacks the page sections in order: `Hero`, `Camp`, `Guide`, `Features` and `GetApp`.
- Every component is a React Server Component, and none uses `"use client"`. Add `"use client"` to any component that needs state, effects or event handlers.
- `constants/index.ts` holds the content for the nav links, camp people avatars, features list, footer links, contact info and socials. Change content there instead of in the components.
- Images live in `public/` and are referenced by absolute path (for example `/map.svg`) through `next/image`.
- Imports use the `@/*` alias for the repo root, for example `@/components/Hero` or `@/constants`.

## Styling conventions

- Custom design tokens are defined in `tailwind.config.ts`:
  - Colors use a numeric scale: `green-50` is the brand green and `green-90` is dark green. `gray-10/20/30/50/90`, `orange-50`, `blue-70` and `yellow-50` are also defined.
  - Background images: `bg-bg-img-1`, `bg-bg-img-2`, `bg-feature-bg`, `bg-pattern`, `bg-pattern-2`.
  - Extra breakpoints: `xs` (400px), `3xl` (1680px), `4xl` (2200px). Other additions: `max-w-10xl` and `rounded-5xl`.
- `app/globals.css` defines reusable utilities with `@apply` in `@layer utilities`. Use them before writing raw classes:
  - Layout: `max-container`, `padding-container`, `flexCenter`, `flexBetween`, `flexStart`, `flexEnd`
  - Typography: `regular-{14..64}`, `medium-14`, `bold-{16..88}`, used responsively (for example `bold-40 lg:bold-64`)
  - Buttons: `btn_white`, `btn_white_text`, `btn_green`, `btn_dark_green`, `btn_dark_green_outline`
  - Section-specific classes: `hero-map`, `camp-quote`, `feature-phone`, `get-app`, `hide-scrollbar`
- `components/shared/Button.tsx` takes its `variant` prop as one of the `btn_*` class names above.
- The Inter font is loaded from Google Fonts in `globals.css`. The project does not use `next/font`.
