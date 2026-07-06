# Upgrade Plan — Claude for IT Support Managers

This document synthesises a full internal analysis with an independent outsider audit into a
prioritised, phased upgrade plan. The goal is to take the existing v1 from a functional
learning tool into a polished, shareable, production-grade product.

---

## Reading the priority labels

| Label | Meaning |
|-------|---------|
| `P0`  | Fix before anything else — correctness or hygiene blockers |
| `P1`  | High-value, do as part of the redesign sprint |
| `P2`  | Meaningful improvements once P0/P1 are shipped |
| `P3`  | Nice-to-have, post-launch polish |

---

## Phase 0 — Immediate Fixes (pre-redesign cleanup) `P0`

These are quick wins and correctness fixes that should land before any visual work begins.
None require a redesign.

- [x] **Fix `package.json` license** — changed `"license": "ISC"` to `"license": "MIT"`.
- [x] **Fix `package.json` module type** — changed `"type": "commonjs"` to `"type": "module"`.
- [x] **Add `public/robots.txt`** — allows all crawlers, points to sitemap.
- [x] **Add `public/sitemap.xml`** — canonical URL listed; expand once week-level URLs exist.
- [x] **Add `public/_headers`** — X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy, HSTS, COOP headers in place for Cloudflare Pages.
- [x] **Add `public/security.txt`** — contact details included.
- [x] **Add favicon** — `public/favicon.svg` (warm orange "C" on rounded rect), wired into
  `index.html`. PNG variants deferred until Phase 2 design system is finalised.
- [x] **Add `public/manifest.webmanifest`** — name, short_name, display: standalone, theme color.
- [x] **Fix the `confirm()` dialog in `resetProgress()`** — replaced with inline two-step
  confirmation (Reset → "Confirm reset" / Cancel) using `confirmingReset` state.

---

## Phase 1 — Technical Foundation (prerequisite to redesign) `P1`

Before the visual redesign lands, the underlying architecture needs to be solid.

### 1.1 Font strategy
- [x] **Remove Google Fonts import from inside JSX** — removed the `@import` from the JSX
  `<style>` tag entirely.
- [x] **Switch to system font stack** — `Georgia, 'Palatino Linotype', serif` for body;
  `ui-monospace, 'Cascadia Code', 'SF Mono', 'Fira Code', monospace` for code. Defined as
  `--font-serif` and `--font-mono` CSS custom properties in `src/index.css`. Eliminates the
  Google Fonts network dependency and enables a stricter CSP.

### 1.2 CSS architecture
- [x] **CSS custom properties moved to `:root` in `src/index.css`** — `--text`, `--card-bg`,
  `--border`, `--bg`, `--green`, `--red`, `--font-serif`, `--font-mono` all defined at root.
  Removed these from the React inline `style` object on the root `<div>`.
- [x] **Dark mode fixed** — `@media (prefers-color-scheme: dark)` overrides are in the `:root`
  block in `src/index.css`. Propagates correctly to all elements.
- [x] **Created `src/index.css`** — CSS reset, design tokens, focus styles, textarea global
  style, and scrollbar styling. Imported in `main.jsx`.
- [ ] **Migrate all component styles from inline objects to CSS classes** — deferred to Phase 2
  redesign. Components still use inline style objects; they reference CSS vars correctly.

### 1.3 Storage and persistence
- [x] **Add progress export** — "Export" button in StatsBar downloads a dated JSON file.
- [x] **Add progress import** — "Import" button opens a hidden file input; reads JSON and
  restores state. Shows an `alert` on invalid files (will be replaced with inline UI in Phase 2).
- [x] **Guard against corrupted localStorage** — `useProgress` hook now logs a visible warning
  (`console.warn`) on load failure; import validates that the parsed value is a plain object.

### 1.4 Component split
- [x] **Monolith split into separate files** — old 596-line file deleted. New structure:
  - `src/data/curriculum.js` — MONTHS array + derived constants, no JSX
  - `src/hooks/useProgress.js` — all storage/progress/stats logic; exports `useProgress()`
  - `src/components/ProgressRing.jsx`
  - `src/components/WeekCard.jsx` — checkbox labels now properly associated via `htmlFor`
  - `src/components/MonthNav.jsx` — `role="tablist"` / `role="tab"` / `aria-selected` added
  - `src/components/StatsBar.jsx` — Export / Import / Reset all here
  - `src/App.jsx` — layout only, no data or storage logic
  - `main.jsx` — updated to import `src/App.jsx` and `src/index.css`

---

## Phase 2 — Full UI Redesign `P1`

The current UI is functionally sound but visually sparse, has no onboarding entry point for new
visitors, and has UX gaps (no jump-to-next-week, cramped mobile nav, no search). This phase is
the full rebuild.

### 2.1 Layout
- [x] **Two-zone layout shipped** — 248px fixed sidebar + fluid main content. `margin-left` on
  main pushes content clear of the sidebar. Sidebar scrolls independently.

### 2.2 Hero / Onboarding section
- [x] **"Start here" hero** — visible when `stats.doneItems === 0`. Shows who it's for, 4 outcome
  bullets, time commitment pill, Claude Pro/Team pill. Disappears automatically once any item is
  checked. Explicit "Dismiss" button stores flag in localStorage. "Begin Week 1 →" CTA scrolls
  to week 1 and expands it.

### 2.3 Month navigation
- [x] **Cramped M1–M6 tab strip replaced** — sidebar has a full month list with colored dot,
  "Month N" label, short title, progress %, and a thin animated progress bar per month.
  Active month highlighted with color-mix background. Mobile: full list in drawer.

### 2.4 Week cards
- [x] **"~90 min" time estimate** on every week card header.
- [x] **"Next up" badge** on the first incomplete week across all 24 (`stats.nextIncompleteWeek`
  from the hook). Auto-scrolls on "Begin Week 1 →" click.
- [x] **Expand all / Collapse all** buttons in the month header. Work per active month.
- [x] **Completion pulse animation** — CSS keyframe `week-complete-pulse` fires for 1.3s when
  `weekPercent` transitions to 100% for the first time (`useEffect` + `useRef` tracking).

### 2.5 Progress visualization
- [x] **Sidebar progress ring** — 68px ring with % label, weeks complete, items done count.
  Per-month progress bars in the month list serve as mini indicators.
- [ ] **Streak indicator** — deferred to Phase 3 polish.

### 2.6 Search and filter
- [x] **Search input** filters across all 24 weeks by title, skill tag, or reading item text.
  Results grouped by month with colored month label. Empty state guides user to try skill names.
  Clear button (×) dismisses search and returns to month view.
  Fixed browser native `type="search"` cancel button conflict with `::-webkit-search-cancel-button`.

### 2.7 Deep links / URL routing
- [ ] **Client-side routing** — deferred; requires react-router-dom or hash routing. Will land
  in a follow-up sprint once base redesign is stable in production.

### 2.8 Accessibility
- [x] **Focus styles** — `:focus-visible` ring (2px var(--accent)) on all interactive elements
  in `src/index.css`.
- [x] **Checkbox labels** — all checkboxes have proper `htmlFor` / `id` associations in WeekCard.
- [x] **Sidebar nav** — `aria-label="Course navigation"`, `aria-current` on active month item.
- [x] **Week card toggle** — `aria-expanded` on the toggle button.
- [x] **Mobile header** — `aria-label="Open navigation"` on hamburger button.
- [ ] **Color contrast formal audit** — deferred; visually verified, formal tool audit pending.

---

## Phase 3 — Feature Expansion `P2`

These are meaningful product improvements that add depth without changing the core learning flow.

### 3.1 Sample deliverables
- [ ] **Add one example output per week** — a collapsible "Example deliverable" section in each
  week card showing what a good week output looks like. For example:
  - Week 1: a sample "What Claude can/cannot do" brief
  - Week 6: a sample post-incident report
  - Week 14: a sample 5-Why RCA
  - Week 23: a sample governance checklist
  These are the highest-leverage content additions per the outsider audit.

### 3.2 Assessment rubrics
- [ ] **Add a "Good / Better / Excellent" rubric** per weekly deliverable — criteria that help
  managers self-assess whether their output is actually usable, not just complete.

### 3.3 Resource density
- [ ] **Audit all `url: null` reading items** and add authoritative links where they exist:
  - Anthropic docs for prompting, memory, projects, file analysis
  - ITIL/ITSM references for ticket ops, problem management, change
  - ServiceNow/Jira/Freshdesk docs for embedded AI features (Month 5)
  - GDPR/HIPAA/SOX references for Month 6 governance content
- [ ] **Fix Week 18 link** — `https://docs.claude.com` goes to the homepage. Replace with a
  direct link to the Claude Projects documentation page.

### 3.4 Privacy notice
- [ ] **Add a visible privacy/data-safety note** on the page (not just the footer blurb):
  > "Your progress and notes are stored only in this browser. Never paste credentials, PII,
  > customer data, logs, or proprietary configs into notes or AI prompts."
  This is consistent with the responsible AI theme and the localStorage-only architecture.

### 3.5 GitHub and "Fork this" CTA
- [ ] **Add a GitHub link** in the sidebar/footer with a "Fork this curriculum" prompt.
- [ ] **Add a "Download all templates" CTA** that triggers a ZIP of blank deliverable templates
  (could be auto-generated markdown files — one per week with headers pre-filled from the
  curriculum data). This is a strong lead magnet for sharing.

---

## Phase 4 — SEO and Content Portability `P2`

The outsider audit's primary technical concern: curriculum content is not in the initial HTML.

- [ ] **Evaluate static site generation** — the current Vite SPA renders nothing server-side.
  Options in order of migration effort:
  1. **Vite SSG plugin (`vite-plugin-ssg`)** — lowest lift, stays in the current stack.
     Pre-renders the homepage and generates static HTML for each week route.
  2. **Astro** — better long-term fit if the site expands to MDX content pages. Requires
     rewriting the React components as Astro components or using the React integration.
  3. **Next.js static export** — most familiar to most developers, heavier than needed for this
     use case.
  - Recommendation: start with `vite-plugin-ssg` since the stack doesn't need to change. If the
    content grows to dozens of pages, migrate to Astro.
- [ ] **Create static week pages** (`/week/1` through `/week/24`) once routing exists. Each page
  should include the week title, reading list, and deliverable in the `<head>` metadata for
  indexing.
- [ ] **Create a `/curriculum` overview page** — all 24 weeks listed with titles, skills, and
  deliverable summaries. This is the page a Google/AI crawler should be able to read.

---

## Phase 5 — Open-Source Maturity `P3`

- [ ] **Add Playwright smoke tests** — at minimum:
  - App loads and renders the title
  - Expanding a month tab shows week cards
  - Checking a reading item updates the progress percentage
  - Notes input saves and persists on refresh
  - Export produces a valid JSON file
  - Import restores exported state
- [ ] **Publish a v1.0 release** on GitHub with release notes summarising the curriculum scope.
- [ ] **Add a CONTRIBUTING.md** — how to add weeks, fix links, or submit rubrics.
- [ ] **Add a CODE_OF_CONDUCT.md** — standard Contributor Covenant is fine.

---

## Implementation order (recommended sprint sequence)

```
Sprint 1 (1–2 days)
  Phase 0 all items — quick fixes, no risk, deployable immediately.

Sprint 2 (2–3 days)
  Phase 1.1 (fonts) + 1.2 (CSS architecture) + 1.4 (component split)
  This is the scaffolding that makes the redesign possible.

Sprint 3 (3–5 days)
  Phase 2 — full UI redesign.
  Build the sidebar layout, hero section, revised week cards, search, deep links.

Sprint 4 (1–2 days)
  Phase 1.3 (export/import) + Phase 3 (privacy note, GitHub CTA, resource links, rubrics)

Sprint 5 (ongoing)
  Phase 4 (SSG) + Phase 5 (tests, releases)
```

---

## What is NOT changing

- The curriculum content and 24-week structure — it is strong as-is.
- The localStorage-only persistence model — no backend is needed.
- The storage shim pattern — it is fine; just needs the CSS/font issues around it fixed.
- The core interaction model — monthly tabs, expandable week cards, checklist + deliverable
  + notes + skills — this is the right UX skeleton; the redesign improves it, not replaces it.
