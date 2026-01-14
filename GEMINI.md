# Project Rules: WellWorks Turkey Website (React 18 + Vite 5 + TypeScript + Tailwind + shadcn/ui)
# Primary goal: NO SLOP. Minimal, safe, reviewable changes.

## SYSTEM
You are a code-editing agent working on a production React+Vite+TypeScript SPA.
Optimize for correctness, minimal diffs, and preserving existing architecture.
Do not be verbose. Do not hand-wave. Do not claim completion without verification steps.

## PROJECT CONTEXT (AUTHORITATIVE)
- SPA: React 18 + Vite 5 + react-router-dom v6
- TypeScript everywhere, strict ESLint config
- Tailwind v3 + tailwindcss-animate, gradients/glassmorphism
- UI: shadcn/ui (Radix primitives)
- Global brand switching via BrandContext (Health vs MICE)
- i18n via react-i18next, src/lib/i18n.ts (locales: tr, en)
- Data: static catalogs under src/data/
- Animations: framer-motion (primary), animejs (secondary)
- Maps: react-leaflet / leaflet / maplibre-gl

## NON-NEGOTIABLE OUTPUT RULES
1) Minimal patches only:
   - Prefer targeted edits to existing files.
   - Do NOT rewrite whole files.
   - Do NOT reformat unrelated sections.
   - Keep diffs small and localized.
2) When editing, preserve:
   - BrandContext behavior and public API (no breaking changes).
   - Routing structure (Layout wrapping, route paths).
   - i18n keys and locale structure; no ad-hoc hardcoded strings.
3) If you must touch multiple files, explain why each is necessary.

## SLOP BANS (HARD)
- No vague claims like "this should fix it" without reasoning.
- No large rewrites when a small patch works.
- No overly long explanations; keep it concise and concrete.
- No "magic" APIs/paths/functions that don't exist in this repo.

## DECISION PROCESS (PRACTICAL STRICTNESS)
- If info is missing, ask up to 3 clarifying questions, then proceed with the safest minimal assumption.
- Any assumption MUST be labeled explicitly as ASSUMPTION and be easy to revert.
- If proceeding without confirmation risks breaking the build, STOP and request the file/log instead.

## CODE CHANGE PRINCIPLES
- Preserve existing patterns:
  - Use existing shadcn/ui components rather than introducing new UI libs.
  - Use Tailwind utilities consistent with the codebase.
  - Use existing motion patterns (framer-motion) rather than new animation systems.
- Prefer adding small helpers/utilities only if reused in 2+ places.
- Avoid new dependencies unless explicitly requested. If absolutely necessary:
  - Explain why, and list exact install command(s) for the user to run.

## I18N RULES (IMPORTANT)
- No user-facing text should be added without i18n unless explicitly requested.
- When adding new strings:
  - Add keys to BOTH `en` and `tr` locale files (or whatever structure exists).
  - Use descriptive, stable keys.
- Do not rename existing keys unless required; if required, update all references.

## BRAND CONTEXT RULES (IMPORTANT)
- Never break Health vs MICE "world switching".
- Any new shared component must be context-aware if it appears in shared layout.
- Never introduce brand-specific styling into shared components without using the context.

## ROUTING RULES
- Keep routes in App.tsx consistent with Layout wrapper.
- New pages must be added with minimal route changes.
- No route refactors unless explicitly requested.

## STYLE / FORMAT
- Follow existing lint/style conventions.
- Prefer small, readable functions.
- No mass formatting, no unrelated import sorting, no "cleanup" unless requested.

## SKELETON / LOADING UX
- If adding image-heavy UI, consider existing Skeleton approach.
- Do not introduce new loading libraries.

## WHAT TO OUTPUT (STRICT FORMAT)
When proposing changes, always output in this structure:

A) Intent (1–3 bullets)
B) Files touched (list)
C) Patch (diff-style or clearly separated file edits)
D) Verification (exact commands + quick manual checks)

## MINIMAL PATCH STANDARD
- Use the smallest set of edits that solves the task.
- If change affects UI, include 2–4 bullet manual QA steps.
- If change affects i18n, mention where keys were added.

## VERIFICATION & "DONE" RULE (MANDATORY)
You MUST perform a two-pass completion process:
Pass 1: Provide the patch + verification steps.
Pass 2: Review your own patch for:
  - TypeScript type safety
  - ESLint issues
  - i18n completeness (en+tr)
  - BrandContext correctness
  - Routing/layout consistency
  - Accidental large diffs / unnecessary edits
Then ONLY after Pass 2, you may say "Completed" and summarize.

The phrase "Completed" is forbidden unless Pass 2 review is included.

## SAFE DEFAULTS (ONLY IF USER DID NOT SPECIFY)
- Package manager ASSUMPTION: pnpm
- Tests ASSUMPTION: none (do not add tests unless requested)

## ERROR HANDLING
- If you encounter an error or missing file, ask for:
  - The relevant file path(s)
  - The exact console error
  - Steps to reproduce
Then propose the smallest fix.

## EXAMPLES OF GOOD BEHAVIOR
- "I will change 3 lines in Header.tsx to fix brand-aware nav; no other files touched."
- "Added i18n keys `health.contact.whatsappTitle` to en+tr and used t() in HealthContactPage."

## EXAMPLES OF BAD BEHAVIOR (FORBIDDEN)
- "I rewrote the entire component for clarity."
- "This should work."
- "Added a new UI library for convenience."

---

# GLOBAL USER RULES (FROM user_global)

1️⃣ Authority & Scope
- NO authority to create new files unless explicitly approved
- If required context is missing, STOP and ask
- Never assume project intent or future plans

2️⃣ Context Discipline
- Do NOT infer behavior from file names alone
- If ambiguous, ask for clarification before acting

3️⃣ Modification Rules
- Minimal diff only
- Touch only the lines required to satisfy the task
- No renaming unless explicitly requested
- No formatting changes unless required for correctness

5️⃣ File Safety
- If another file is required, explicitly ask for it

6️⃣ Read-Only First Rule
- If changes are going to be major (>3 files affected):
  - Summarize what existing code does
  - Identify assumptions and side effects
  - Confirm understanding with user
  - Only then propose changes

7️⃣ No Guessing Policy
- Never guess: Data formats, API contracts, Threading model, Lifecycle ownership
- If guessing is required → ask instead

9️⃣ Forbidden Behaviors (Hard Ban)
- ❌ Over-engineering
- ❌ "Best practice" refactors
- ❌ Silent fixes
- ❌ Large diffs
- ❌ Style-driven edits
- ❌ Introducing new patterns
- ❌ Making code "more robust" unless asked

🔟 Emergency Brake
- If uncertain: STOP. Request clarification.

✅ Success Criteria
- Follows all rules
- Produces minimal, reviewable change
- No assumptions made without confirmation
