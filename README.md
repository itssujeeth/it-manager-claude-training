# Claude for IT Support Managers — Training Portal

A 24-week, self-paced training curriculum for IT Support Managers learning to use Claude effectively across daily operations, people management, process improvement, and strategic AI adoption.

> **Not affiliated with or endorsed by Anthropic.** Independent community training resource.

**[→ Open the training portal](https://training.itssujeeth.com)**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## What's Inside

**6 modules · 24 weeks · ~90 min per week**

| Month | Focus | Weeks |
|-------|-------|-------|
| 1 | Claude Foundations | 1–4 |
| 2 | Ticket Ops & Incidents | 5–8 |
| 3 | People Management & Coaching | 9–12 |
| 4 | Process & Service Improvement | 13–16 |
| 5 | Advanced Techniques & Integration | 17–20 |
| 6 | AI Strategy, Governance & Adoption | 21–24 |

Each week includes:
- **Learning checklist** — 4 reading items, each with an inline article
- **Prompt pattern** — a tested, copyable prompt template for that week's use case
- **Weekly deliverable** — a hands-on project you keep
- **Quality rubric** — pass/fail criteria to self-assess your deliverable
- **Knowledge check** — one scenario-based question, unlocked after completing the readings
- **Notes field** — for reflections, prompt experiments, and evidence

Progress is tracked per-item in `localStorage`. Nothing leaves the browser.

---

## Using the Portal

**The easiest way is the live site — no installation needed.**

👉 **[training.itssujeeth.com](https://training.itssujeeth.com)**

Progress is saved in your browser's `localStorage`. Nothing is sent to a server. Use the **Export progress** button in the sidebar to back up your progress as a JSON file.

---

## Running Locally (contributors / self-hosting)

**Prerequisites:** [Node.js](https://nodejs.org) 18 or later

```bash
git clone https://github.com/itssujeeth/it-manager-claude-training.git
cd it-manager-claude-training
npm install
npm run dev
```

Open the URL shown in terminal (typically `http://localhost:5173`).

```bash
# Production build
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages.

---

## Repo Structure

```
it-manager-claude-training/
├── public/
│   ├── storage-shim.js        # Maps window.storage → localStorage
│   ├── _headers               # Security + cache headers (Netlify/Cloudflare)
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Layout.jsx         # App shell, sidebar, outlet context
│   │   ├── Sidebar.jsx        # Navigation, progress ring, import/export
│   │   ├── WeekCard.jsx       # Expandable week with checklist, rubric, quiz
│   │   ├── QuizBlock.jsx      # Per-week knowledge check
│   │   ├── ReadingModal.jsx   # Full-screen reading view + markdown renderer
│   │   ├── SearchBar.jsx
│   │   └── ProgressRing.jsx
│   ├── pages/
│   │   ├── CockpitPage.jsx    # Landing / dashboard
│   │   ├── PathPage.jsx       # Month tabs + week cards
│   │   └── WeekPage.jsx       # Individual week view
│   ├── data/
│   │   ├── months.js          # Full curriculum: weeks, projects, rubrics, quizzes
│   │   └── curriculum.js      # Derived exports (ALL_WEEKS, MONTHS, STORAGE_KEY)
│   ├── content/
│   │   ├── index.js           # Lazy-loads .md files on demand
│   │   └── *.md               # 62 inline reading articles (one per learning item)
│   ├── hooks/
│   │   └── useProgress.js     # localStorage read/write, derived stats
│   ├── App.jsx                # Router + lazy page imports
│   ├── main.jsx               # React mount
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Architecture Notes

### Storage

`window.storage` is the storage API used throughout the app — it maps directly to `localStorage` via `public/storage-shim.js`. This shim was retained from an earlier Claude artifact prototype and kept to avoid rewriting the hook layer. Progress is serialised as a single JSON object under the key `claude-learning-it-support-mgr-v1`.

Export/import buttons in the sidebar let users back up and restore progress as a JSON file.

### Content loading

The 62 reading articles (`.md` files) are **lazy-loaded** — each is a separate JS chunk that is fetched only when a user opens that specific reading item. The initial bundle does not include any article content. This keeps first-load JS under 350 kB gzipped.

### Bundle chunks

| Chunk | Contents | Size (gzip) |
|-------|----------|-------------|
| `vendor` | React, react-dom, react-router-dom | ~75 kB |
| `index` | App shell, data, hooks | ~34 kB |
| `WeekCard` | Largest component (loaded on all routes) | ~7 kB |
| `CockpitPage` / `PathPage` / `WeekPage` | Route-split pages | 2–6 kB each |
| 62 × `.md` | Reading articles, fetched on demand | 1–4 kB each |

### Quiz gating

Knowledge checks are hidden until all reading items for that week are checked off. Once submitted, the result remains visible regardless of checkbox state.

---

## Security

- No backend, no user accounts, no data leaves the browser
- Security headers set via `public/_headers`: `CSP`, `HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `COOP`, `Referrer-Policy`, `Permissions-Policy`
- Hashed assets in `/assets/*` served with `Cache-Control: immutable, 1 year`
- `npm audit` reports 0 vulnerabilities

---

## Contributing

Fork freely. To adapt the curriculum:

- **Add or edit weeks** — `src/data/months.js` is the single source of truth for all week metadata, projects, rubrics, and quiz questions
- **Add reading articles** — create a `.md` file in `src/content/` and reference it via `contentKey` in the matching reading item
- **Change styling** — `src/index.css` uses CSS custom properties for all design tokens

Issues and pull requests are welcome.

---

## License

[MIT](LICENSE)
