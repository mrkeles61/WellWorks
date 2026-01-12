# Tech Stack

> **Status:** Single Source of Truth
> **Last Updated:** 2026-01-12

## Overview
WellWorks Turkey is a **static, client-side Single Page Application (SPA)** built with React and Vite. It features a dual-brand architecture ("Health" vs "MICE") controlled via React Context and URL routing. There is **no custom backend**; data is served statically from local JSON/TS files.

## Runtime & Tooling
- **Runtime:** Node.js (version not pinned, recommend LTS v20+)
- **Package Manager:** `npm` (lockfile: `package-lock.json` assumed, but not verified)
- **Build Tool:** [Vite](https://vitejs.dev/) v5.4.19
- **Language:** [TypeScript](https://www.typescriptlang.org/) v5.8.3

## Frontend
- **Framework:** [React](https://react.dev/) v18.3.1
- **Router:** [React Router DOM](https://reactrouter.com/) v6.30.1
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) v3.4.17
  - [TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) v1.0.7
  - [PostCSS](https://postcss.org/) v8.5.6 (with Autoprefixer)
- **UI Components & Primitives:**
  - [Radix UI](https://www.radix-ui.com/) (Extensive usage: Dialog, Dropdown, Tabs, ScrollArea, etc.)
  - [Shadcn/UI](https://ui.shadcn.com/) (Pattern used for `src/components/ui`)
  - [Lucide React](https://lucide.dev/) v0.462.0 (Icons)
  - [Embla Carousel](https://www.embla-carousel.com/) v8.6.0
  - [Swiper](https://swiperjs.com/) v12.0.3
  - [Sonner](https://sonner.emilkowal.ski/) v1.7.4 (Toasts)
- **Animation:**
  - [Framer Motion](https://www.framer.com/motion/) v12.25.0
  - [Anime.js](https://animejs.com/) v4.2.2 (Note: v4 API differs from v3)
  - [Lenis](https://lenis.darkroom.engineering/) v1.3.17 (Smooth scrolling)
- **State Management:**
  - [React Query (TanStack Query)](https://tanstack.com/query/latest) v5.83.0
  - Context API (`BrandContext`)
- **Forms:**
  - [React Hook Form](https://react-hook-form.com/) v7.61.1
  - [Zod](https://zod.dev/) v3.25.76 (Validation)
- **Internationalization:**
  - [react-i18next](https://react.i18next.com/) v16.5.1
  - [i18next](https://www.i18next.com/) v25.7.4

## Backend & Database
- **None.** This project is a static frontend.
- **Data Source:** Static TS/JSON files in `src/data/` (e.g., products, events, team).

## Authentication
- **None.** No user accounts or login required.

## Integrations & External APIs
- **None (Confirmed).** No `fetch`, `axios`, or `http` calls found in source code.
- **Email/Contact:** Likely handled via `mailto:` or static form submission (verify implementation in `Contact.tsx`).

## Image & Media Sources
- **Local Assets:**
  - `src/assets/` (Imported in code)
  - `public/images/` (Referenced via string paths e.g., `/images/foo.png`)
  - `public/products/`, `public/team/`, `public/blog/`
- **Remote Assets:**
  - Some placeholder images may utilize Google User Content URLs (e.g. `lh3.googleusercontent.com` seen in `MiceHome.tsx`).
  - **Policy:** Prefer local assets in `public/` for production stability.

## Environment Variables
- **None required currently.**
- App relies on hardcoded constants in `src/lib/` or `src/config/`.

## Scripts / Commands
Defined in `package.json`:
- `npm run dev`: Start Vite development server
- `npm run build`: Build production bundle
- `npm run build:dev`: Build in development mode
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint

## Deployment
- **Type:** Static Site
- **hosting Provider:** Any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`

## Constraints & TODOs
- **Anime.js v4:** Ensure all animations use the new v4 API (functional style) instead of v3 (class based). See `AnimatedSection.tsx` for correct usage.
- **Images:** Several googleusercontent URLs are hardcoded in `MiceHome.tsx`. These should be moved to local assets or a controlled CDN.
