# Upgrade Plan — Claude for IT Support Managers

This document synthesises a full internal analysis, two independent outsider audits (one pre-launch,
one post-launch), and a full UX guidelines review (`it-manager-ai-course-ux-guidelines.md`) into a
prioritised, phased upgrade plan. The goal is to evolve the app from a functional learning checklist
into a **manager workbench** — a tool that helps IT managers learn, practice safely, validate output,
and build a reusable AI-enabled operating model.

UX guidelines north star:
> A busy IT manager should open the course and immediately understand what to learn this week, why
> it matters to their support organization, what they can safely try, what artifact they will produce,
> how they know it is good, and how it moves them toward an AI-enabled support operating model.

External audit overall score: **7/10**
Gap scores: Assessment design 5/10 · SPA platform/UX 5.5/10 · Course discoverability 6.5/10

---

## Priority labels

| Label | Meaning |
|-------|---------|
| `P0`  | Correctness or hygiene blocker — fix before anything else |
| `P1`  | Core workbench — required to meet the UX north star |
| `P2`  | High-value content and assessment depth |
| `P3`  | Nice-to-have polish, post-launch |

---

## Phase 0 — Immediate Fixes `P0` ✅ Complete

- [x] Fix `package.json` license and module type
- [x] Add `public/robots.txt`, `sitemap.xml`, `_headers`, `security.txt`
- [x] Add favicon and `manifest.webmanifest`
- [x] Replace `confirm()` in resetProgress with inline two-step confirmation

---

## Phase 1 — Technical Foundation `P1` ✅ Complete

- [x] System font stack, CSS custom properties at `:root`, dark mode
- [x] Progress export and import (JSON), localStorage guard
- [x] Component split: `curriculum.js`, `useProgress.js`, `WeekCard`, `Sidebar`, `Hero`, `SearchBar`
- [x] Data/code separation: `months.js` (pure data) + `curriculum.js` (barrel exports)
- [x] Inline reading content per topic: one `.md` file per conceptual item under `src/content/`,
      loaded at build time via `import.meta.glob`, rendered with a minimal markdown renderer in WeekCard
- [ ] Migrate all component styles from inline objects to CSS classes — deferred, non-blocking

---

## Phase 2 — Full UI Redesign `P1` ✅ Complete

- [x] Two-zone layout: 248px sidebar + fluid main
- [x] "Before you start" dismissible orientation panel
- [x] Sidebar: month list, colored dot, progress %, animated bar, active highlight
- [x] Week cards: time estimate, "Next up" badge, Expand all / Collapse all, completion pulse
- [x] Progress ring: 68px SVG, weeks complete, items done
- [x] Cross-week search by title, skill tag, or reading item text
- [x] Module-level "By the end of this module, you can…" objectives block per month
- [x] Accessibility: focus styles, checkbox labels, aria-expanded, aria-label, aria-current
- [ ] Formal Lighthouse / axe audit — verify WCAG 2.1 AA (tab order, contrast, screen reader output)

---

## Phase 2B — Workbench UX Foundation `P1`

The UX guidelines (`it-manager-ai-course-ux-guidelines.md`) define the course as a
**role-based AI workbench**, not a checklist. This phase adds the structural elements that
transform the current accordion into a genuine workbench. Prerequisite for Phase 3 content depth.

### 2B.1 Client-side routing and deep links
- [ ] Add hash routing (`#/week/6`, `#/month/2`) so every week has a shareable, bookmarkable URL
- [ ] Route-specific `<title>` tags per week/month
- [ ] Update `sitemap.xml` once week-level hashes exist
- [ ] "Copy link" action on each week header

### 2B.2 Course cockpit / dashboard
Replace the current hero with a proper cockpit for returning learners. Required elements per §5.1:
- [ ] "Continue Learning" card — current week title + primary next action
- [ ] Outcome progress counters: artifacts created, prompts saved, rubrics passed (alongside the % ring)
- [ ] "Ready to use at work" card — completed artifacts available for reuse
- [ ] "Needs review before team use" indicator for medium/high-risk week outputs
- [ ] Capstone readiness bar — shows how weekly work feeds the final operating model
- [ ] Auto-switch: cockpit for returning learners, orientation for first visit

### 2B.3 Week workspace template
The week card currently has: checklist + deliverable checkbox + notes + skills.
The UX spec requires a structured workspace per week (§5.4). Add these sections:
- [ ] **Manager scenario** — 2–3 sentence realistic IT support situation that frames the week
- [ ] **Prompt pattern** — reusable structured prompt template with Role/Context/Input/Audience/Constraints/Output/Verification fields
- [ ] **Safety gate** — inline warning before any activity using workplace data: what not to paste
- [ ] **Rubric** — 5-criterion pass/fail table (Accuracy, Completeness, Audience fit, Actionability, Safety)
- [ ] **Portfolio action bar** — Save prompt / Save artifact / Add reflection / Mark reviewed / Export markdown
- [ ] **Next step** — "Continue to Week N →" at the bottom of each expanded card

Data model additions required in `months.js`:
```js
{
  managerProblem: "string — what support problem this week solves",
  scenario: "string — realistic 2–3 sentence IT support situation",
  riskLevel: "Low | Medium | High | Restricted",
  difficulty: "Beginner | Intermediate | Advanced",
  promptPattern: "string — reusable structured template",
  safetyWarnings: ["string"],
  portfolioCategory: "string",
  capstoneInput: true | false,
  rubric: [{ criterion: "string", passCondition: "string" }]
}
```

### 2B.4 Status badges
Add per-activity section badges as defined in §7.1:
- [ ] `Learn` — conceptual reading section
- [ ] `Try` — hands-on prompt exercise
- [ ] `Validate` — rubric or verification step
- [ ] `Apply` — workplace adaptation activity
- [ ] `Safe Data` — uses mock or anonymized data only
- [ ] `Human Review` — output requires human approval before use
- [ ] `Portfolio` — creates a reusable artifact
- [ ] `Governance` — involves policy, risk, or compliance
- [ ] `Capstone Input` — feeds the final operating model

### 2B.5 Risk level display
- [ ] Show risk level badge on each week card header (Low / Medium / High / Restricted)
- [ ] Risk level drives safety gate visibility — Medium and above always show the safety gate
- [ ] Color coding: Low = green, Medium = amber, High = red, Restricted = red + lock icon

### 2B.6 Outcome-oriented progress (§3.5, §7.3)
- [ ] Track and display: artifacts saved, prompts saved, rubrics passed (separate from checklist %)
- [ ] Show "Capability unlocked" label when a month completes (e.g. "AI-assisted incident communication")
- [ ] Replace "0 of 119 items done" with dual counter: items + artifacts

### 2B.7 Embedded safety gates per activity (§3.4)
- [ ] Move safe-data rules from the "Before you start" panel into individual activities
- [ ] W9/W10/W12: explicit "what NOT to paste" for coaching/HR context
- [ ] Every activity with a `Try` or `Apply` badge must have an inline safety reminder

### 2B.8 Start Here page upgrade (§5.2)
The current "Before you start" panel covers ~4 of the 10 required sections. Add:
- [ ] Who this course is NOT for
- [ ] Prerequisites (Claude Pro or Team account required)
- [ ] How to use sample/mock data for exercises
- [ ] What artifacts the learner will build (complete list)
- [ ] How progress is measured and what completion means
- [ ] Persona selector: Individual learner / Service desk lead / IT ops manager / Enterprise evaluator
      (used to personalize exercise suggestions, not to gate content)

### 2B.9 Mobile experience (§8)
- [ ] Sticky bottom action bar on mobile: "Continue", "Save", or "Complete" depending on week state
- [ ] Convert wide tables (rubric, prompt pattern) to stacked cards on small screens
- [ ] Large tap targets on all checkboxes and toggle buttons

---

## Phase 3 — Content Depth and Assessment `P2`

### 3.1 Sample deliverables (model answers)
- [ ] Add one collapsible "Example deliverable" per priority week:
  - W1: "What Claude can/cannot do" brief (IT Support context)
  - W4: Acceptable-use policy with data classification table
  - W5: Triage benchmark with scoring rubric and 15-ticket answer key
  - W6: Post-incident report with multi-audience versions (exec / technical / customer)
  - W8: Weekly ops summary from anonymized ticket data + CSV template
  - W10: QA feedback report comparing AI vs manual review
  - W11: Onboarding quiz with explicit answer key
  - W14: 5-Why RCA worksheet with evidence log and confidence scores
  - W22: 1-hour workshop agenda + prompt library export
  - W23: Governance framework + regulatory reference table
  - W24: Complete capstone operating model (the "excellent" bar for self-assessment)

### 3.2 Assessment rubrics
- [ ] Prompt quality rubric (W2): specificity, context, format, constraints, verification, risk check
- [ ] Triage accuracy rubric (W5): category, priority, routing confidence, missing context, escalation, risk
- [ ] Incident report rubric (W6): timeline accuracy, audience calibration, actions, blame-free, prevention
- [ ] RCA quality rubric (W14): evidence first, assumptions labeled, validation owner, confidence score
- [ ] Governance framework rubric (W23): regulatory coverage, data classification, human-review checkpoints
- [ ] Capstone rubric (W24): business value, use-case priority, governance, metrics, rollout, training, risk

### 3.3 Resource density
- [ ] Audit all `url: null` reading items across months 2–6 and add authoritative links:
  - Anthropic docs: prompting, memory, Projects, file analysis, thinking controls
  - ITIL/ITSM: ticket ops, problem management, change
  - ServiceNow/Jira/Freshdesk: embedded AI features (Month 5)
  - GDPR/HIPAA/SOX: governance content (Month 6)
- [ ] Fix Week 18 link — `https://docs.claude.com` → Claude Projects direct docs page

### 3.4 Privacy and data safety notice
- [ ] Add visible privacy/safe-data note above the week list (not just in "Before you start")
- [ ] W9/W10: explicit "what NOT to paste" list for HR/coaching context

### 3.5 Content accuracy fixes
- [ ] W1 — Update Claude capability framing: add operating modes (base chat / Projects / web search / tool-calling)
- [ ] W5 — Add triage scoring definition: category, priority, routing confidence, missing-context flag
- [ ] W14 — Add AI-RCA caution: evidence first, assumptions labeled, validation owner, confidence score
- [ ] W17 — Update chain-of-thought language to current framing; add structured prompt pattern
- [ ] W18 — Add privacy/IP caution for Claude Projects (what not to upload)
- [ ] W19 — Add file-size and model limitation note (context window, file-type support)
- [ ] W20 — Add update-cadence caveat: re-run evaluation matrix every 6 months
- [ ] W24 — Add explicit capstone completion criteria with inline rubric

### 3.6 Module knowledge checks
- [ ] Add a 3-question scenario-based quiz at the end of each month
- [ ] Show answer rationale on submission (not just correct/incorrect)
- [ ] Gate "month complete" on quiz attempt (not necessarily passing score)

### 3.7 Completion portfolio and certificate flow
- [ ] When overall progress reaches 100%: show completion state in sidebar ring
- [ ] Export a lightweight PDF/markdown summary: completed weeks, deliverable descriptions,
      skills acquired, total items, completion date
- [ ] "Download all templates" CTA — ZIP of blank deliverable markdown files, one per week

### 3.8 Inline reading content — months 2–6
Month 1 content is complete (W1–W4, 12 `.md` files). Remaining months:
- [ ] Month 2 (Ticket Ops) — W5–W8 conceptual items: triage logic, ticket categories, KB standards, ops reporting
- [ ] Month 3 (People & Coaching) — W9–W12: coaching frameworks, onboarding, team training, HR data rules
- [ ] Month 4 (Process & Service) — W13–W16: SOP structure, RCA, business case framing, service improvement
- [ ] Month 5 (Advanced) — W17–W20: structured reasoning, Projects, file analysis, vendor evaluation
- [ ] Month 6 (Strategy & Gov.) — W21–W24: adoption planning, governance, compliance, capstone framing

Writing standards (same as Month 1):
- Open with a concrete IT support scenario
- Written for a manager with 5–10 years in IT ops, not an AI researcher
- Short paragraphs (2–4 sentences), no bullet walls in the reading body
- End with one bolded "Manager takeaway" sentence
- 200–300 words per item

### 3.9 Prompt library page (§5.6)
- [ ] New `/prompt-library` route (or `#/prompt-library`)
- [ ] Course-recommended prompts, one per week where applicable
- [ ] Category filter: Ticket triage / Incident communication / KB writing / QA / Coaching / SOP / RCA / Business case / Governance / Team training
- [ ] Copy button per prompt, risk level badge, related week link
- [ ] Learner-saved prompts (saved from the week workspace portfolio action)

### 3.10 Resources page (§5.5)
- [ ] New `/resources` route
- [ ] Downloadable templates: SOP, RCA, governance, adoption roadmap, capstone
- [ ] Sample data: mock ticket exports, incident notes, KB articles for exercises
- [ ] Each resource: title, type, related week, download format, risk note

### 3.11 Portfolio page (§5.7)
- [ ] New `/portfolio` route
- [ ] Artifact categories: Communication / Ticket & incident / Knowledge management / Coaching / Process improvement / Governance / Operating model
- [ ] Per artifact: title, related week, type, status (Draft / Reviewed / Ready to use / Needs SME review / Restricted)
- [ ] Export all artifacts as markdown

### 3.12 Capstone builder (§5.8)
- [ ] New `/capstone` route
- [ ] Guided sections: org context / use-case catalog / prompt library / data safety rules / human review model / governance / training plan / metrics / risk register / 30-60-90 rollout
- [ ] Readiness indicators: completed weeks, required artifacts, governance checklist, roadmap drafted
- [ ] Export as a complete markdown document

### 3.13 Streak indicator
- [ ] Weekly streak counter in sidebar — consecutive weeks with at least one item completed

### 3.14 GitHub and "Fork this" CTA
- [ ] "Fork this curriculum" link in sidebar footer with repo link

---

## Phase 4 — SEO and Content Portability `P2`

- [ ] Routing (2B.1) is prerequisite for all of Phase 4
- [ ] Evaluate `vite-plugin-ssg` for static pre-rendering of week routes
- [ ] Create static week pages once routing exists; include week title + reading list in `<head>`
- [ ] Create a `/curriculum` overview page — all 24 weeks visible to crawlers
- [ ] Update `sitemap.xml` with week-level URLs

---

## Phase 5 — Open-Source Maturity `P3`

- [ ] Playwright smoke tests: load, expand, check item, save notes, export/import, keyboard nav
- [ ] Lighthouse CI on every PR — fail on WCAG violations
- [ ] Publish v1.0 GitHub release with curriculum scope notes
- [ ] Add `CONTRIBUTING.md` (how to add weeks, fix links, submit rubrics)
- [ ] Add `CODE_OF_CONDUCT.md`

---

## Sprint sequence

```
Sprint 1–4 (done) — Phases 0–2: fixes, foundation, redesign, orientation, objectives.
Sprint 5  (done)  — Phase 1 (content refactor): Month 1 reading content as individual .md files.
                    12 files under src/content/, content loader, contentKey refs, WeekCard updated.

Sprint 6  (done)  — Phase 2B.1 (routing) + Phase 2B.2 (cockpit) + Phase 2B.3 (week workspace).
                    HashRouter, CockpitPage, PathPage, WeekPage. Scenario/prompt/safety/rubric
                    sections in WeekCard. Sidebar NavLink, week deep links.

Sprint 7  (done)  — Phase 2B.4–2B.7 (badges, risk levels, outcome counters, safety gates).
                    Status badges (Learn/Try/Validate/Portfolio/SafeData), risk/difficulty badges,
                    rubric checkboxes with progress counter, workspace data for W1–W4.
                    Note: 2B.8 (Start Here upgrade) and 2B.9 (mobile) deferred to Sprint 10.

Sprint 8  (done)  — Phase 3.6 (knowledge checks) + Phase 3.8 Months 2–3 reading content.
                    QuizBlock component, 3 scenario-based questions per month (M1–M3 data written).
                    20 reading .md files (W5–W12). Workspace data (W5–W12). Quiz stats in cockpit.

Sprint 9  (done)  — Phase 3.8 continued: Months 4–6 reading content (W13–W24).
                    Workspace data (W13–W24: scenario, promptPattern, rubric, riskLevel, difficulty).
                    Quiz data for M4–M6. 32 reading .md files (W13–W24). Build clean at 102 modules.

Sprint 10         — UX gap remediation:
                    Phase 2B.8 (Start Here upgrade: persona selector, prerequisites, artifact list).
                    Phase 2B.9 (mobile: sticky action bar, responsive tables).
                    Phase 3.1 (sample deliverables — model answers for priority weeks).
                    Phase 3.9–3.12 (prompt library, resources, portfolio, capstone pages).

Sprint 11         — Phase 4 (SSG evaluation, crawlable week routes) +
                    Phase 5 (Playwright tests, Lighthouse CI, v1.0 release).
```

---

## UX guidelines alignment scorecard

Assessed against `it-manager-ai-course-ux-guidelines.md` (July 2026).

| Guideline area | Status | Sprint to close |
|---|---|---|
| Visual design — cockpit aesthetic, cards, typography | ✅ Done | — |
| Progressive disclosure — Read ↓ per topic | ✅ Done | — |
| Export / import progress | ✅ Done | — |
| Routing and deep links | ✅ Done | — |
| Week workspace (scenario, prompt, rubric, safety gate) | ✅ Done | — |
| Status badges (Learn/Try/Validate etc.) | ✅ Done | — |
| Risk levels per week | ✅ Done | — |
| Outcome-oriented progress (rubrics passed, deliverables) | ✅ Done | — |
| Embedded safety gates per activity | ✅ Done | — |
| Knowledge checks (module quizzes) | ✅ M1–M6 done | — |
| Reading content — Month 1–3 | ✅ Done | — |
| Reading content — Months 4–6 | ✅ Done | — |
| Workspace data — W13–W24 | ✅ Done | — |
| Content accuracy fixes (3.5) | ✅ Done (in workspace data + reading items) | — |
| Orientation / Start Here upgrade (2B.8) | 🔶 40% | Sprint 10 |
| Mobile sticky action + responsive tables (2B.9) | ❌ 0% | Sprint 10 |
| Sample deliverables (3.1) | ❌ 0% | Sprint 10 |
| Prompt library page (3.9) | ❌ 0% | Sprint 10 |
| Resources page (3.10) | ❌ 0% | Sprint 10 |
| Portfolio page (3.11) | ❌ 0% | Sprint 10 |
| Capstone builder (3.12) | ❌ 0% | Sprint 10 |
| Accessibility full audit (Lighthouse/axe) | 🔶 40% | Sprint 11 |
| Completion portfolio / certificate (3.7) | ❌ 0% | Sprint 11 |
| SSG / crawlable content (Phase 4) | ❌ 0% | Sprint 11 |

---

## Acceptance criteria for public beta (§15)

- [ ] A learner can start without explanation from the author
- [ ] Every week has a clear outcome, scenario, and artifact
- [ ] Every activity has a safety rule where needed
- [ ] Every major deliverable has a rubric
- [ ] Progress survives browser refresh ✅
- [ ] Learners can deep-link to a week
- [ ] Keyboard navigation works
- [ ] Mobile layout is usable
- [ ] Sample data exists for sensitive exercises
- [ ] The learner can export progress or artifacts ✅

---

## What is NOT changing

- The 24-week curriculum structure — validated by external audit
- The localStorage-only persistence model — no backend needed for self-paced use
- The core week card interaction — expandable accordion with checklist + deliverable + notes + skills
- The React/Vite stack — Astro is an option post-v1.0 if content grows significantly
