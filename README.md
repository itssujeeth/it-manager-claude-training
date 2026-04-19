# Claude Learning Plan — IT Support Managers

A 24-week, self-paced interactive learning plan that teaches IT Support Managers how to use Claude effectively across daily operations, people management, process improvement, and strategic AI adoption.

Built as a single-file React component with Vite, persistent progress tracking via localStorage, and dark mode support.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Curriculum Overview

| Month | Focus | Weeks | What You'll Learn |
|-------|-------|-------|-------------------|
| 1 | Claude Foundations | 1–4 | What Claude is, prompt engineering, daily comms, responsible AI use |
| 2 | Ticket Ops & Incidents | 5–8 | AI-assisted triage, incident summarization, KB generation, data analysis |
| 3 | People Management | 9–12 | 1:1 coaching prep, QA feedback, training content, meeting productivity |
| 4 | Process Improvement | 13–16 | SOP generation, RCA with Claude, business cases, automation ideation |
| 5 | Advanced Techniques | 17–20 | System prompts, Claude Projects, file analysis, AI tool landscape |
| 6 | Strategy & Adoption | 21–24 | Adoption roadmaps, team training, governance, capstone operating model |

Each week includes a learning checklist (4 items), a hands-on deliverable, a notes section, and skill tags. Progress is tracked per-item with visual completion rings.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) 18 or later (ships with npm)

### Setup

```bash
git clone https://github.com/itssujeeth/it-manager-claude-training.git
cd it-manager-claude-training
npm install
npm run dev
```

Open the URL shown in terminal (typically `http://localhost:5173`).

That's it — all configuration files are already in the repo.

### Production Build

```bash
npm run build
npm run preview
```

The output goes to `dist/`. Deploy to GitHub Pages, Netlify, Vercel, or any static host.

---

## Repo Structure

```
it-manager-claude-training/
├── index.html                                      # Entry point (loads storage shim + app)
├── main.jsx                                        # React mount
├── claude-learning-plan-it-support-managers.jsx     # The entire app (single-file component)
├── storage-shim.js                                 # Maps window.storage → localStorage
├── vite.config.js                                  # Vite + React plugin config
├── package.json                                    # Dependencies & scripts
├── package-lock.json
├── LICENSE
└── README.md
```

### How Storage Works

The JSX component was originally built for Claude's artifact environment, which provides a `window.storage` API. The included `storage-shim.js` bridges this to the browser's `localStorage`, so your progress persists across browser sessions with no backend required.

---

## Obsidian Vault Integration

The React app handles quick checkbox tracking and visual progress. For deeper learning — prompt experiments, deliverable drafts, reflections — pair it with an Obsidian vault.

### Vault Setup

Create a vault (or folder in an existing vault) alongside the repo:

```
vault/
├── 00 — Dashboard.md
├── Month 1 — Claude Foundations/
│   ├── Week 01 — What Claude Is & How It Thinks.md
│   ├── Week 02 — Prompt Engineering Basics.md
│   ├── Week 03 — Daily Support Communications.md
│   └── Week 04 — Responsible AI Use.md
├── Month 2 — Ticket Ops & Incidents/
│   ├── Week 05 — Ticket Triage with Claude.md
│   ├── Week 06 — Incident Summarization.md
│   ├── Week 07 — Knowledge Article Generation.md
│   └── Week 08 — Analyzing Support Data.md
├── Month 3 — People Management & Coaching/
│   ├── Week 09 — 1-1 Prep & Coaching.md
│   ├── Week 10 — QA Feedback Assistance.md
│   ├── Week 11 — Training Content Creation.md
│   └── Week 12 — Meeting Productivity.md
├── Month 4 — Process & Service Improvement/
│   ├── Week 13 — SOP Generation.md
│   ├── Week 14 — RCA with Claude.md
│   ├── Week 15 — Business Cases & Proposals.md
│   └── Week 16 — Automation Ideation.md
├── Month 5 — Advanced Techniques/
│   ├── Week 17 — Advanced Prompting.md
│   ├── Week 18 — Claude Projects & Memory.md
│   ├── Week 19 — Files, Spreadsheets & Reports.md
│   └── Week 20 — AI Tool Landscape.md
├── Month 6 — Strategy & Adoption/
│   ├── Week 21 — AI Adoption Roadmap.md
│   ├── Week 22 — Team Training Workshop.md
│   ├── Week 23 — Governance & Ethics.md
│   └── Week 24 — Capstone Operating Model.md
├── Prompt Library/
│   ├── Triage Prompts.md
│   ├── Communication Prompts.md
│   ├── Coaching Prompts.md
│   └── Analysis Prompts.md
├── Deliverables/
│   └── ...
└── Templates/
    ├── Weekly Note Template.md
    └── Prompt Experiment Template.md
```

### Weekly Note Template

Save to `Templates/Weekly Note Template.md` and use Obsidian's Templater plugin to insert it:

````markdown
---
week: {{week_number}}
month: {{month_number}}
title: "{{week_title}}"
status: not-started | in-progress | complete
started: {{date}}
completed:
---

# Week {{week_number}} — {{week_title}}

## Learning Checklist
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3
- [ ] Item 4

## Weekly Deliverable
- [ ] {{deliverable_description}}

**Output:** [[Deliverables/Week {{week_number}} — Deliverable]]

## Prompt Experiments

### Experiment 1
**Goal:**
**Prompt:**
```
(paste prompt)
```
**Quality:** ⭐⭐⭐⭐☆
**Notes:**

## Key Takeaways
-

## Skills Built
`skill-1` `skill-2` `skill-3`

## Questions / Follow-ups
-
````

### Prompt Experiment Template

Save to `Templates/Prompt Experiment Template.md`:

````markdown
---
date: {{date}}
week: {{week_number}}
category: triage | communication | coaching | analysis | documentation | other
rating: 1-5
---

# Prompt Experiment — {{short_title}}

## Context
What I was trying to accomplish:

## The Prompt
```
(paste full prompt)
```

## Claude's Output
(paste or summarize)

## Assessment
- **Accuracy:** /5
- **Usefulness:** /5
- **Usable as-is?** Yes / Needs editing / No

## Iterations
What changed after refining:

## Final Prompt
```
(paste refined version)
```

## Added to Prompt Library?
- [ ] Yes → [[Prompt Library/{{category}} Prompts]]
````

### Dashboard

Create `00 — Dashboard.md`:

````markdown
# Claude Learning Plan — Dashboard

## Progress
| Month | Focus | Status |
|-------|-------|--------|
| 1 | Claude Foundations | 🔲 |
| 2 | Ticket Ops & Incidents | 🔲 |
| 3 | People Management | 🔲 |
| 4 | Process Improvement | 🔲 |
| 5 | Advanced Techniques | 🔲 |
| 6 | Strategy & Adoption | 🔲 |

## Prompt Library
- [[Prompt Library/Triage Prompts]]
- [[Prompt Library/Communication Prompts]]
- [[Prompt Library/Coaching Prompts]]
- [[Prompt Library/Analysis Prompts]]

## Deliverables
```dataview
TABLE status, completed
FROM "Deliverables"
SORT file.name ASC
```

## Recent Experiments
```dataview
TABLE category, rating, date
FROM "Month 1" OR "Month 2" OR "Month 3" OR "Month 4" OR "Month 5" OR "Month 6"
WHERE contains(file.name, "Experiment")
SORT date DESC
LIMIT 10
```
````

### Recommended Obsidian Plugins

| Plugin | Why |
|--------|-----|
| **Dataview** | Auto-updating dashboard tables from frontmatter |
| **Templater** | One-shortcut weekly note and experiment template insertion |
| **Kanban** | Drag weeks across Not Started → In Progress → Done |
| **Calendar** | Navigate weekly notes by date |
| **Checklist** | Aggregate open checklist items across all notes |

### How the App and Vault Work Together

| What | React App | Obsidian Vault |
|------|-----------|----------------|
| Quick tracking | ✅ Checkboxes, % rings | — |
| Deep notes | — | ✅ Long-form writing |
| Prompt library | — | ✅ Searchable, tagged |
| Deliverables | — | ✅ Full documents |
| Visual progress | ✅ Month tabs, stats | — |
| Portability | ✅ Browser-based | ✅ Local markdown |

**Daily workflow:**

1. Open the React app → see what's next, check off items as you go
2. Open the matching Obsidian weekly note → write deeper notes, paste prompt experiments, draft deliverables
3. Completed deliverables go in `Deliverables/` with a wiki-link from the weekly note
4. Proven prompts go in `Prompt Library/` for team reuse

---

## Git Workflow

The vault is plain markdown and diffs cleanly. App progress lives in localStorage (browser-side) and won't appear in git.

```bash
# After completing a week
git add vault/
git commit -m "Week 05: triage prompt template + experiments"

# If you want to back up app progress
# Open browser console → copy localStorage JSON → save to a file
```

### Suggested `.gitignore` additions

```
node_modules/
dist/
.DS_Store
```

---

## Contributing

This is a personal learning tool. Feel free to fork, adapt the curriculum to your team's needs, or submit issues if you spot errors in the content.

---

## License

[MIT](LICENSE)