# Upgrade Plan — Claude for IT Support Managers

This document synthesises a full internal analysis plus two independent outsider audits (one pre-launch,
one post-launch review of the live site at training.itssujeeth.com) into a prioritised, phased upgrade
plan. The goal is to take the existing v1 from a functional learning tool into a polished,
shareable, production-grade product.

Current verdict from the external audit:
> "Ready with minor improvements — for a public, open-source, self-paced learning path.
> Not yet enterprise-grade, but the core curriculum is useful, practical, and well sequenced.
> Keep the 24-week structure; add objectives, rubrics, examples, accessibility fixes,
> deep links, and a stronger completion model."

Overall readiness score from external audit: **7/10**
Specific gap scores: Assessment design 5/10 · SPA platform/UX 5.5/10 · Course discoverability 6.5/10

---

## Reading the priority labels

| Label | Meaning |
|-------|---------|
| `P0`  | Fix before anything else — correctness or hygiene blockers |
| `P1`  | High-value, do as part of the redesign sprint |
| `P2`  | Meaningful improvements once P0/P1 are shipped |
| `P3`  | Nice-to-have, post-launch polish |

---

## Phase 0 — Immediate Fixes (pre-redesign cleanup) `P0` ✅ Complete

- [x] **Fix `package.json` license** — changed `"license": "ISC"` to `"license": "MIT"`.
- [x] **Fix `package.json` module type** — changed `"type": "commonjs"` to `"type": "module"`.
- [x] **Add `public/robots.txt`** — allows all crawlers, points to sitemap.
- [x] **Add `public/sitemap.xml`** — canonical URL listed; expand once week-level URLs exist.
- [x] **Add `public/_headers`** — X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy, HSTS, COOP headers in place for Cloudflare Pages.
- [x] **Add `public/security.txt`** — contact details included.
- [x] **Add favicon** — `public/favicon.svg` (warm orange "C" on rounded rect), wired into `index.html`.
- [x] **Add `public/manifest.webmanifest`** — name, short_name, display: standalone, theme color.
- [x] **Fix the `confirm()` dialog in `resetProgress()`** — replaced with inline two-step
  confirmation using `confirmingReset` state.

---

## Phase 1 — Technical Foundation `P1` ✅ Complete

### 1.1 Font strategy
- [x] **Remove Google Fonts import from inside JSX** — eliminated network dependency and CSP conflict.
- [x] **Switch to system font stack** — `--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI',
  system-ui, Roboto, 'Helvetica Neue', Arial, sans-serif`. Body text bumped to 15px with 1.6
  line-height and antialiasing. Reading checklist items at 15px/1.7. Week titles at 16px.
  Month titles at 24px. Notes textarea uses `--font-body` at 14px. Logo "C" retains Georgia.
  Rationale: sans-serif renders sharper on screen for 30+ users and scales with OS accessibility
  settings.

### 1.2 CSS architecture
- [x] **CSS custom properties moved to `:root` in `src/index.css`** — all design tokens at root.
- [x] **Dark mode fixed** — `@media (prefers-color-scheme: dark)` overrides are in `:root`.
- [x] **Created `src/index.css`** — CSS reset, design tokens, focus styles, scrollbar styling.
- [ ] **Migrate all component styles from inline objects to CSS classes** — deferred; non-blocking.

### 1.3 Storage and persistence
- [x] **Add progress export** — sidebar downloads a dated JSON file.
- [x] **Add progress import** — hidden file input reads JSON and restores state.
- [x] **Guard against corrupted localStorage** — `useProgress` hook logs `console.warn` on load
  failure; import validates that the parsed value is a plain object.

### 1.4 Component split
- [x] **Monolith split into separate files** — old 596-line file deleted. New structure:
  - `src/data/curriculum.js` — MONTHS array + derived constants, no JSX
  - `src/hooks/useProgress.js` — all storage/progress/stats logic
  - `src/components/ProgressRing.jsx`, `WeekCard.jsx`, `Sidebar.jsx`, `Hero.jsx`, `SearchBar.jsx`
  - `src/App.jsx` — layout only, no data or storage logic

---

## Phase 2 — Full UI Redesign `P1` ✅ Complete

### 2.1 Layout
- [x] **Two-zone layout** — 248px fixed sidebar + fluid main content. Sidebar scrolls independently.

### 2.2 Hero / Onboarding
- [x] **"Start here" hero** — visible when `stats.doneItems === 0`. Shows who it's for, 4 outcome
  bullets, time commitment pill, Claude Pro/Team pill. Auto-hides once any item is checked.
  "Dismiss" stores flag in localStorage. "Begin Week 1 →" CTA scrolls to week 1 and expands it.

### 2.3 Month navigation
- [x] **Sidebar month list** — colored dot, "Month N" label, shortTitle, progress %, animated
  progress bar per month. Active month highlighted with color-mix background. Mobile: drawer.

### 2.4 Week cards
- [x] **"~90 min" time estimate** on every week card header.
- [x] **"Next up" badge** on the first incomplete week across all 24.
- [x] **Expand all / Collapse all** per active month.
- [x] **Completion pulse animation** — fires for 1.3s when weekPercent transitions to 100%.

### 2.5 Progress visualization
- [x] **Sidebar progress ring** — 68px SVG ring with % label, weeks complete, items done.
- [ ] **Streak indicator** — deferred to Phase 3.

### 2.6 Search
- [x] **Cross-week search** — filters all 24 weeks by title, skill tag, or reading item text.
  Results grouped by month. Custom clear button. Native cancel button suppressed.

### 2.7 Deep links / URL routing
- [ ] **Client-side routing** — hash routing or react-router-dom so learners can share/resume at
  `#/week/14` or `/month/4/week/14`. Prerequisite for SSG and shareable links.
  External audit: "Everything lives under /. Month selection and week expansion are React state,
  not URL state."

### 2.8 Accessibility
- [x] **Focus styles** — `:focus-visible` ring on all interactive elements.
- [x] **Checkbox labels** — all checkboxes have `htmlFor` / `id` associations.
- [x] **Sidebar nav** — `aria-label="Course navigation"`, `aria-current` on active month.
- [x] **Week card toggle** — `aria-expanded` on the toggle button.
- [x] **Mobile header** — `aria-label="Open navigation"` on hamburger.
- [ ] **Formal Lighthouse / axe audit** — run automated tool pass; external audit found no ARIA
  in the original source (we added it post-review). Verify current state meets WCAG 2.1 AA.
  Specifically check: keyboard-only tab order, screen reader output for accordion/tab pattern,
  color contrast ratios on secondary text and disabled states.

### 2.9 Module-level learning objectives `NEW`
- [ ] **Add "By the end of this module, you can…" block** at the top of each month section.
  The external audit scored Learning Outcomes 6.5/10: "Outcomes are implied through projects,
  but not stated as measurable objectives per module." These can live in `curriculum.js` as an
  `objectives: []` array per month and render above the week card list.

---

## Phase 3 — Content Depth & Assessment `P2`

The external audit's primary content gap: the app "behaves more like an interactive checklist
than a full course platform." Assessment Design scored 5/10. The items below directly address
the highest-impact gaps without rebuilding the course structure.

### 3.1 Sample deliverables (model answers)
- [ ] **Add one example output per week** — a collapsible "Example deliverable" section in each
  week card. Priority order from the external audit:
  - W1: Sample "What Claude can/cannot do" brief (2-page format, IT Support context)
  - W4: Sample acceptable-use policy with data classification table
  - W5: Sample triage benchmark with scoring rubric and answer key for 15-ticket set
  - W6: Sample post-incident report with timeline and multi-audience versions
  - W8: Sample weekly ops summary from anonymized ticket data + downloadable CSV template
  - W10: Sample QA feedback report comparing AI review vs manual review
  - W11: Sample onboarding quiz with explicit answer key
  - W14: Sample 5-Why RCA worksheet with evidence log and confidence scores
  - W22: Sample 1-hour workshop agenda + prompt library export
  - W23: Sample governance framework + regulatory reference table
  - W24: Sample capstone operating model (the "excellent" bar for self-assessment)

### 3.2 Assessment rubrics
- [ ] **Add rubrics for key deliverables** — "Not yet / Good / Excellent" criteria per output.
  Priority rubrics from the external audit:
  - **Prompt quality rubric** (W2): specificity, context, format instruction, constraints,
    verification step, risk check
  - **Triage accuracy rubric** (W5): correct category, justified priority, routing confidence,
    missing context flagged, escalation decision, risk rating
  - **Incident report rubric** (W6): timeline accuracy, audience calibration, action items,
    blame-free language, prevention section
  - **RCA quality rubric** (W14): evidence first, assumptions labeled, no blame language,
    validation owner identified, confidence score, required artifacts listed
  - **Governance framework rubric** (W23): regulatory coverage, data classification,
    human-review checkpoints, escalation paths, metrics defined
  - **Capstone rubric** (W24): business value, use-case prioritization, data governance,
    human-review points, success metrics, rollout plan, training design, risk controls

### 3.3 Resource density
- [ ] **Audit all `url: null` reading items** and add authoritative links:
  - Anthropic docs for prompting, memory, projects, file analysis, thinking controls
  - ITIL/ITSM references for ticket ops, problem management, change
  - ServiceNow/Jira/Freshdesk docs for embedded AI features (Month 5)
  - GDPR/HIPAA/SOX references for Month 6 governance content
- [ ] **Fix Week 18 link** — `https://docs.claude.com` goes to the homepage; replace with the
  direct Claude Projects documentation page.

### 3.4 Privacy and data safety notice
- [ ] **Add visible privacy/safe-data note** above the week list (not just the footer):
  > "Your progress and notes are stored only in this browser. Never paste credentials, PII,
  > customer data, ticket logs, or proprietary configs into AI prompts."
  Module-specific additions from the audit:
  - W9/W10: explicit "what NOT to paste" list for HR/coaching context — names, protected-class
    data, medical/leave details, compensation, unapproved disciplinary records.

### 3.5 Content accuracy fixes `NEW`
These are curriculum-level correctness issues identified by the external audit:

- [ ] **W1 — Update Claude capability framing** — "Claude generates, it doesn't retrieve" is now
  too broad. Distinguish: base chat, file upload, Claude Projects, web search, tool-enabled
  workflow. Add an "operating modes" reference diagram or callout.
- [ ] **W5 — Add triage scoring definition** — "Score accuracy" is mentioned but not defined.
  Add: correct category, justified priority, routing confidence, missing-context flag,
  escalation need, risk rating.
- [ ] **W14 — Add AI-RCA caution** — Claude can help generate hypotheses and structure a 5-Why,
  but must not be treated as determining root cause without logs, SME validation, and evidence.
  Add explicit "AI-assisted RCA rules": evidence first, assumptions labeled, validation owner,
  confidence score, required artifacts.
- [ ] **W17 — Update chain-of-thought language** — Replace "ask Claude to think step-by-step /
  chain-of-thought prompting" with current framing: structured reasoning instructions, request
  concise rationale, require verification steps, and use Claude's thinking controls where
  available. Add prompt pattern: `<context>`, `<ticket>`, `<constraints>`, `<output_format>`,
  `<risk_check>`, `<verification_steps>`.
- [ ] **W18 — Add privacy/IP caution for Claude Projects** — Projects store documents
  persistently; warn learners about what not to upload: customer PII, credentials, proprietary
  configs, unapproved vendor contracts.
- [ ] **W19 — Add file-size and model limitations note** — document current context window limits
  and file-type support so learners know when to split files or use summarization first.
- [ ] **W20 — Add update-cadence caveat** — AI tool landscape changes rapidly; advise learners
  to re-run their evaluation matrix every 6 months rather than treat it as permanent.
- [ ] **W24 — Add capstone completion criteria** — define what a complete vs incomplete capstone
  looks like; add the rubric from 3.2 above inline on the week card.

### 3.6 Module knowledge checks `NEW`
- [ ] **Add a 3-question module quiz** at the end of each month (after all week cards) — confirms
  understanding before learner self-declares the module complete. Question types:
  scenario-based (not just recall), with answer rationale shown on submission.
  External audit: "Weekly deliverables are useful, but learners are never told what 'good'
  looks like." Assessment Design scored 5/10.

### 3.7 Completion portfolio and certificate flow `NEW`
- [ ] **Add "Download completion summary"** — when overall progress reaches 100%, show a
  completion state in the sidebar ring and offer a lightweight PDF/markdown export of:
  completed weeks, deliverable descriptions, skills acquired, total items done, and completion
  date. Even a lightweight one-page export materially improves shareability for enterprise use.
- [ ] **Download all templates CTA** — a ZIP of blank deliverable templates (one markdown file
  per week, headers pre-filled from curriculum data). Strong lead magnet for sharing.

### 3.8 Orientation section `NEW`
- [ ] **Add a "Before you start" section** — visible before Month 1, covering:
  prerequisites (Claude Pro or Team account), time commitment (90 min/week for 24 weeks),
  safe-data rules (never paste PII/credentials), how to use the notes field as a learning
  artifact, and what outputs the learner will leave with.
  External audit: "Add explicit Start Here, prerequisites, target learner, time commitment,
  and safe-data rules" as Immediate Fix #1.

### 3.9 Streak indicator
- [ ] **Weekly streak counter** in the sidebar — tracks consecutive weeks with at least one item
  completed. Resets if a week is skipped. Lightweight motivation signal.

### 3.10 GitHub and "Fork this" CTA
- [ ] **"Fork this curriculum" prompt** in the sidebar footer — links to repo with a brief
  explanation of what can be customized.

### 3.11 Inline reading content per topic `NEW` — tailored for IT managers
Each reading checklist item currently has a short label and an optional external link.
The learner must already know where to look, or leave the app to read background material.
This phase adds a `content` field per reading item: a short, self-contained reading passage
(~200–350 words) written specifically for IT support managers — practical, scenario-framed,
no academic language. Items that are practice activities ("Practice X with Claude") do not
need content; those already describe the action. Items that are conceptual ("Understand X",
"Learn Y", "Study Z") are the priority targets.

**Data model change (months.js only):**
```js
{
  text: "Learn the anatomy of a good prompt: context, role, task, format, constraints, examples",
  url: "https://docs.anthropic.com/...",
  urlLabel: "Anthropic docs",
  content: `
## What makes a prompt work?

Claude doesn't read between the lines — it responds to exactly what you give it.
When your output is vague or off-target, the problem is almost always in the input.
A well-structured prompt has six parts: ...
  `
}
```

**UI change (WeekCard.jsx):**
- Reading items with `content` get a small **"Read ↓"** toggle button alongside the label
- Clicking expands an inline panel directly below that item (not a modal)
- Panel renders the markdown content with the month's accent color for headings
- Collapsed by default; state is per-item, not persisted

**Content writing scope (priority order):**
1. **Month 1** (Foundations) — highest leverage; every learner sees W1–W4 first
2. **Month 2** (Ticket Ops) — W5–W8; most directly applicable to daily work
3. **Month 6** (Strategy & Gov.) — W21–W24; governance content needs more depth than a label
4. **Month 3** (People & Coaching) — W9–W12; coaching data-rules items need nuance
5. **Month 4** (Process & Service) — W13–W16
6. **Month 5** (Advanced) — W17–W20; Anthropic doc links already cover most of the conceptual load

**Content writing standards:**
- Open with a concrete IT support scenario (e.g. "Your L1 analyst just escalated a P2 outage at 2am…")
- Write for a manager with 5–10 years in IT ops, not an AI researcher
- Use short paragraphs (2–4 sentences), never bullet walls for the reading body
- End with one "manager takeaway" sentence in bold
- Avoid "AI will transform everything" language; stay operational and specific
- Max 350 words per item; aim for 200–250

---

## Phase 4 — SEO and Content Portability `P2`

The external audit's primary technical concern: curriculum content is not in the initial HTML,
making it invisible to crawlers and AI search agents.

- [ ] **Implement client-side routing first** (2.7 above) — prerequisite for all of Phase 4.
- [ ] **Evaluate static site generation** — options in order of lift:
  1. **`vite-plugin-ssg`** — lowest lift, stays in the current stack. Pre-renders the homepage
     and generates static HTML for each week route.
  2. **Astro** — better long-term fit if the site expands to MDX content pages.
  3. **Next.js static export** — heavier than needed for this use case.
  Recommendation: start with `vite-plugin-ssg`. Migrate to Astro if content grows to
  dozens of pages.
- [ ] **Create static week pages** (`/week/1` through `/week/24`) once routing exists. Each page
  should include the week title, reading list, and deliverable in `<head>` metadata.
- [ ] **Create a `/curriculum` overview page** — all 24 weeks listed with titles, skills, and
  deliverable summaries. This is the page a Google/AI crawler should be able to read.
- [ ] **Update `sitemap.xml`** with the new week-level URLs once routes exist.

---

## Phase 5 — Open-Source Maturity `P3`

- [ ] **Add Playwright smoke tests** — at minimum:
  - App loads and renders the title
  - Expanding a month shows week cards
  - Checking a reading item updates the progress percentage
  - Notes input saves and persists on refresh
  - Export produces a valid JSON file
  - Import restores exported state
  - Keyboard-only navigation reaches all interactive controls
- [ ] **Add Lighthouse CI** — run accessibility, performance, and best-practices audits on
  every PR. Fail on WCAG violations. This replaces the manual audit in 2.8.
- [ ] **Publish a v1.0 release** on GitHub with release notes summarising the curriculum scope.
- [ ] **Add a CONTRIBUTING.md** — how to add weeks, fix links, or submit rubrics.
- [ ] **Add a CODE_OF_CONDUCT.md** — standard Contributor Covenant.

---

## Implementation order (recommended sprint sequence)

```
Sprint 1 (done) — Phase 0: quick fixes, security headers, favicon, PWA, robots.
Sprint 2 (done) — Phase 1: fonts, CSS architecture, component split.
Sprint 3 (done) — Phase 2: sidebar layout, hero, week cards, search, accessibility.
Sprint 4 (now)  — Phase 3.5 (content accuracy fixes) + Phase 3.8 (orientation)
                  + Phase 2.9 (learning objectives) + Phase 2.8 (Lighthouse audit)
                  These are low-risk, high-credibility gains and address the audit's
                  "Immediate Fixes" list.
Sprint 5        — Phase 3.11 (inline reading content) — Month 1 & 2 first
                  Add content field + Read toggle UI, write M1–M2 content (W1–W8).
                  Validate writing standards before expanding to remaining months.
Sprint 5B       — Phase 3.11 continued (M3–M6) + Phase 3.3 (remaining URL verification)
                  + Phase 3.1 (sample deliverables) + Phase 3.2 (rubrics)
                  + Phase 3.6 (knowledge checks)
                  Hardest content work; do this incrementally, one module at a time.
Sprint 6        — Phase 2.7 (routing) + Phase 4 (SSG)
                  Technical spike; routing unblocks deep links, SSG, and the sitemap.
Sprint 7        — Phase 3.7 (completion portfolio) + Phase 5 (tests, Lighthouse CI, release)
```

---

## Readiness scorecard (from external audit, post Sprint 3)

| Area | Score | Target | Gap |
|------|-------|--------|-----|
| Course discoverability | 6.5 | 8 | Routing + SSG (Sprint 6) |
| Audience fit | 8.5 | 9 | Minor prerequisite framing (Sprint 4) |
| Learning outcomes | 6.5 | 8.5 | Module objectives (Sprint 4) |
| Curriculum structure | 8 | 9 | Orientation module (Sprint 4) |
| Content quality | 7 | 8.5 | Content fixes + citations (Sprint 4–5) |
| Practical application | 8.5 | 9 | Sample datasets + templates (Sprint 5) |
| Assessment design | 5 | 8 | Rubrics + quizzes + portfolio (Sprint 5) |
| Learner experience | 7 | 8.5 | Deep links + objectives + completion flow |
| SPA platform / UX | 5.5 | 8 | Routing + Lighthouse (Sprint 6–7) |
| Professional relevance | 8.5 | 9 | RCA/W17/W18 fixes (Sprint 4) |
| **Overall** | **7** | **8.5** | Achievable in 3–4 more sprints |

---

## What is NOT changing

- The 24-week curriculum structure — the external audit explicitly validated it.
- The localStorage-only persistence model — no backend is needed for the self-paced use case.
- The core interaction model — expandable week cards, checklist + deliverable + notes + skills.
- The React/Vite stack — Astro is an option later, but not a prerequisite for anything in Sprint 4–5.
