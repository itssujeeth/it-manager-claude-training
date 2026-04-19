# Claude Learning Plan — IT Support Managers

A 24-week, self-paced interactive learning plan that teaches IT Support Managers how to use Claude effectively across daily operations, people management, process improvement, and strategic AI adoption.

Built as a single-file React component with persistent progress tracking.

---

## What's Inside

```
claude-learning-plan/
├── README.md
├── claude-learning-plan-it-support-managers.jsx   # The app
├── package.json                                    # Created during setup
├── index.html                                      # Created during setup
├── vault/                                          # Obsidian vault (optional)
│   ├── Week 01 — What Claude Is & How It Thinks.md
│   ├── Week 02 — Prompt Engineering Basics.md
│   └── ...
└── deliverables/                                   # Your weekly project outputs
    ├── week-01-claude-brief.md
    ├── week-05-triage-template.md
    └── ...
```

---

## Local Setup

### Prerequisites

- **Node.js** 18+ — [download here](https://nodejs.org)
- **npm** or **yarn** (comes with Node)
- A modern browser (Chrome, Firefox, Edge, Safari)

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd claude-learning-plan
```

### 2. Initialize the project

```bash
npm init -y
```

### 3. Install Vite and React

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
```

### 4. Create `vite.config.js`

Create a file called `vite.config.js` in the project root:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### 5. Create `index.html`

Create `index.html` in the project root:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Claude Learning Plan — IT Support Managers</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: #f5f4f0; min-height: 100vh; }
      @media (prefers-color-scheme: dark) {
        body { background: #141413; }
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>
```

### 6. Create `main.jsx`

Create `main.jsx` in the project root:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import LearningPlan from "./claude-learning-plan-it-support-managers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LearningPlan />
  </React.StrictMode>
);
```

### 7. Handle the storage API

The JSX file uses `window.storage` (a Claude artifact API). For local use, you need a localStorage shim. Create `storage-shim.js` in the project root:

```js
// Shim that maps window.storage calls to localStorage
window.storage = {
  async get(key) {
    const value = localStorage.getItem(key);
    return value !== null ? { key, value } : null;
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { key, value };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return { key, deleted: true };
  },
  async list(prefix) {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!prefix || k.startsWith(prefix)) keys.push(k);
    }
    return { keys };
  },
};
```

Then add the shim to `index.html` **before** the module script:

```html
    <script src="/storage-shim.js"></script>
    <script type="module" src="/main.jsx"></script>
```

### 8. Add npm scripts

Open `package.json` and add to the `"scripts"` block:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 9. Run the app

```bash
npm run dev
```

Open the URL shown in terminal (typically `http://localhost:5173`). Your progress will persist in the browser's localStorage.

### 10. Build for production (optional)

```bash
npm run build
```

The output goes to `dist/` — you can serve it with any static file server or deploy to GitHub Pages, Netlify, or Vercel.

---

## Obsidian Vault Integration

The learning plan works great alongside an Obsidian vault where you keep deeper notes, deliverables, evidence, and reflections. Here's how to set it up.

### Vault Structure

Create a vault (or a folder inside an existing vault) with this layout:

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
│   ├── Week 01 — Claude Brief.md
│   ├── Week 05 — Triage Template.md
│   └── ...
└── Templates/
    ├── Weekly Note Template.md
    └── Prompt Experiment Template.md
```

### Weekly Note Template

Use this template for each week's note. In Obsidian, save it to `Templates/Weekly Note Template.md` and use the Templater or Templates core plugin to insert it.

```markdown
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

**Deliverable:** [[Deliverables/Week {{week_number}} — Deliverable]]

## Prompt Experiments

### Prompt 1
**Goal:**
**Prompt used:**
```
(paste prompt here)
```
**Output quality:** ⭐⭐⭐⭐☆
**Notes:**

### Prompt 2
**Goal:**
**Prompt used:**
```
(paste prompt here)
```
**Output quality:** ⭐⭐⭐☆☆
**Notes:**

## Key Takeaways
-

## Skills Built
`skill-1` `skill-2` `skill-3`

## Questions / Follow-ups
-

## Links & References
-
```

### Prompt Experiment Template

Save this to `Templates/Prompt Experiment Template.md` for logging individual prompt experiments in more detail:

```markdown
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
(paste full prompt here)
```

## Claude's Output
(paste or summarize output)

## Assessment
- **Accuracy:** /5
- **Usefulness:** /5
- **Would I use this as-is?** Yes / Needs editing / No

## Iterations
Did I refine the prompt? What changed?

## Final Prompt (if iterated)
```
(paste refined version)
```

## Added to Prompt Library?
- [ ] Yes → [[Prompt Library/{{category}} Prompts]]
```

### Dashboard Note

Create `00 — Dashboard.md` as your landing page:

```markdown
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

## Current Week
![[Week XX — Title]]

## Prompt Library
- [[Prompt Library/Triage Prompts]]
- [[Prompt Library/Communication Prompts]]
- [[Prompt Library/Coaching Prompts]]
- [[Prompt Library/Analysis Prompts]]

## Deliverables Index
```dataview
TABLE status, completed
FROM "Deliverables"
SORT file.name ASC
```

## Recent Prompt Experiments
```dataview
TABLE category, rating, date
FROM "Month 1" OR "Month 2" OR "Month 3" OR "Month 4" OR "Month 5" OR "Month 6"
WHERE contains(file.name, "Experiment")
SORT date DESC
LIMIT 10
```
```

### Recommended Obsidian Plugins

These community plugins make the workflow smoother:

| Plugin | Purpose |
|--------|---------|
| **Dataview** | Dashboard tables that auto-update from frontmatter |
| **Templater** | Insert weekly note and prompt experiment templates with one shortcut |
| **Kanban** | Visualize weeks as cards across Not Started → In Progress → Done |
| **Calendar** | Navigate weekly notes by date |
| **Checklist** | Aggregate incomplete checklist items across all week notes |

### Workflow: Connecting the App and the Vault

The React app and Obsidian vault serve different purposes and stay loosely coupled:

| Concern | React App | Obsidian Vault |
|---------|-----------|----------------|
| Quick tracking | ✅ Checkboxes, progress % | — |
| Deep notes | — | ✅ Long-form writing |
| Prompt library | — | ✅ Searchable, tagged |
| Deliverables | — | ✅ Full documents |
| Visual progress | ✅ Rings, month tabs | — |
| Portability | ✅ Browser-based | ✅ Local markdown |

**Daily workflow:**

1. Open the React app to see what's next and check items off as you go
2. Open the corresponding Obsidian weekly note to write detailed notes, paste prompt experiments, and draft deliverables
3. When you complete a deliverable, save it in `Deliverables/` and link it from the weekly note
4. Tested prompts that work well go into `Prompt Library/` for team reuse

Both the app progress (localStorage) and the vault (markdown files) live in the same git repo, so everything is versioned together.

---

## Git Workflow

```bash
# Initial setup
git init
echo "node_modules/\ndist/\n.DS_Store" > .gitignore
git add .
git commit -m "Initial commit: Claude learning plan for IT support managers"

# Weekly commits
git add vault/ deliverables/
git commit -m "Week 05: completed triage template + prompt experiments"
```

The Obsidian vault is plain markdown — it diffs cleanly and works well with git. The app's progress lives in localStorage (browser-side), so it won't appear in git. If you want to back up app progress too, you can export localStorage to a JSON file periodically.

---

## License

Personal use. Adapt freely for your team or organization.
