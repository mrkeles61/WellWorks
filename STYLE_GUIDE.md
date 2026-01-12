# Style Guide

> **Status:** Single Source of Truth
> **Last Updated:** 2026-01-12

## Design Goals
WellWorks Turkey utilizes a **Dual-Brand Design System** to distinguish its two main business arms while maintaining a unified premium feel.
1.  **Health (Dailyshot):** Trustworthy, clean, scientific, scientific-blue.
2.  **MICE (Events):** Energetic, bold, premium, vibrant-green on dark.

## Brand Tokens

### Colors (Tailwind Variables)
We use CSS variables mapped to Tailwind utility classes.

#### 🔵 Health Brand (Dailyshot)
- **Primary:** `#00A3E0` (Sky Blue) -> `health-primary`
- **Secondary:** `#0055A4` (Dark Blue) -> `health-secondary`
- **Backgrounds:**
  - Dark Navy: `hsl(220 25% 10%)` -> `health-bg`
  - Lighter Navy: `hsl(220 25% 14%)` -> `health-bg-alt`
- **Text:** White / Light Grey

#### 🟢 MICE Brand (Events)
- **Primary:** `#39B54A` (Kelly Green) -> `mice-primary`
- **Secondary:** `#2ECC71` -> `mice-secondary`
- **Backgrounds:**
  - True Black: `#0a0a0a` -> `mice-bg`
  - Dark Grey: `#1a1a1a` -> `mice-bg-alt`
- **Text:** White (Oswald font for headings)

### Typography
Fonts are applied globally or per-brand via CSS classes/attributes.

| Brand | Element | Font Family | Tailwind Class | Characteristics |
|-------|---------|-------------|----------------|-----------------|
| **Global** | Body | Inter | `font-inter` | Clean, modern, legible |
| **Health** | Headings | Poppins | `font-poppins` | Friendly, geometric, rounded |
| **MICE** | Headings | Oswald | `font-oswald` | Condensed, bold, UPPERCASE |

### Spacing & Layout
- **Container:** Standard centralized container with `max-w-7xl` (1280px).
- **Section Padding:**
  - Desktop: `py-20` or `py-24`
  - Mobile: `py-12` or `py-16`
- **Grid:** Use `gap-6` or `gap-8` for card grids.

## Components Rules

### 1. Buttons (`.btn-health`, `.btn-mice`)
- **Shape:** Full rounded (`rounded-full`).
- **Effect:** Subtle float on hover + shadow expansion.
- **Do:** Use `asChild` with Radix Slot for link buttons.
- **Don't:** Use sharp corners or flat colors without hover states.

```tsx
// Example Health Button
<Button className="bg-health-primary hover:bg-health-primary-hover rounded-full shadow-lg hover:shadow-xl transition-all">
  Discover Products
</Button>
```

### 2. Cards (`.glass-card`, `.glass-card-dark`)
- **Health:** White background, thin blue border, soft shadow.
- **MICE:** Dark semi-transparent background (`baidu-blur`), white/green border accent.
- **Interactive:** Lift up (`-translate-y-1`) on hover.

### 3. Gradients & Hero Sections
- **Avoid Banding:** ALWAYS use dithering or `via-` stops for large gradients.
- **Health Hero:** Linear gradient from Soft Cream/White to Gray.
- **MICE Hero:** Dark radial gradients or video backgrounds with overlays.

**✅ Correct Gradient Usage:**
```tsx
// Good: Smooth multi-stop gradient
<div className="bg-gradient-to-br from-[#fdf8f4] via-[#f9f5f0] to-[#f5f0eb]" />
```

**❌ Incorrect Usage:**
```tsx
// Bad: Two contrasting colors causing banding
<div className="bg-gradient-to-b from-white to-black" />
```

## "No Duplicate Style" Policy
- **Global Styles:** Put shared resets and variables in `src/index.css` -> `@layer base`.
- **Component Styles:** Use Tailwind utility classes directly in JSX.
- **Complex/Reusable Styles:**
  - Create a custom class in `src/index.css` -> `@layer components` OR
  - Create a reusable React component (e.g., `SectionHeading.tsx`).
- **New Colors:** Add to `tailwind.config.ts` under `extend.colors`. **Do not hardcode hex values** repeatedly in components.

## Imagery Rules
- **Format:** WEBP or Optimized JPG/PNG.
- **Location:** `public/images/` for static site assets.
- **Remote:** minimal usage. Ideally replace Google User Content URLs with local assets for reliability.
- **Alt Text:** Mandatory for SEO and Accessiblity.

## Accessibility (a11y)
- **Contrast:** Ensure white text on brand backgrounds passes AA standard.
- **Focus:** Default focus rings are customized to match brand colors (`ring-health-primary` / `ring-mice-primary`).
- **Motion:** All animations respect `prefers-reduced-motion` (implemented in `src/index.css`).
