import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { MONTHS, TOTAL_WEEKS } from "../data/curriculum.js";

function LandingOrientation() {
  return (
    <div className="landing-orientation">
      <div className="landing-orientation-grid">
        {[
          {
            title: "Who this is for",
            body: "IT support managers and team leads responsible for a support team of any size, with or without prior AI experience.",
          },
          {
            title: "What you need",
            body: "A Claude Pro or Team account. Each week takes ~90 minutes and produces one hands-on deliverable you keep.",
          },
          {
            title: "How it works",
            body: "Read the topic content, complete the hands-on prompt exercise, verify your output with the rubric, then check the box.",
          },
          {
            title: "Data safety",
            body: "Never paste real customer data, employee names, or credentials into Claude. All exercises use anonymized or mock data.",
          },
        ].map(({ title, body }) => (
          <div key={title} className="landing-orientation-item">
            <div className="landing-orientation-title">{title}</div>
            <div className="landing-orientation-body">{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CockpitPage() {
  const { stats, getMonthPercent } = useOutletContext();
  const isNew = stats.doneItems === 0;
  const nextWeek = stats.nextIncompleteWeek;
  const nextMonth = nextWeek
    ? MONTHS.find((m) => m.weeks.some((w) => w.week === nextWeek.week))
    : null;

  return (
    <div className="landing">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="landing-hero">
        <div className="landing-pills">
          <span className="landing-pill">6 modules</span>
          <span className="landing-pill">24 weeks</span>
          <span className="landing-pill">~90 min / week</span>
          <span className="landing-pill">Requires Claude Pro or Team</span>
          <span className="landing-pill landing-pill-disclaimer">Not affiliated with Anthropic</span>
        </div>

        <h1 className="landing-title">Claude for IT Support Managers</h1>
        <p className="landing-subtitle">
          A practical, self-paced curriculum for support leaders who want to use AI safely
          and effectively — from daily ticket ops to team governance and strategic adoption.
        </p>

        {isNew ? (
          <div className="landing-outcomes">
            {[
              "15+ tested prompt templates for daily IT ops",
              "AI governance and data-safety framework",
              "60-minute team training workshop design",
              "AI-augmented support operating model",
              "Weekly hands-on deliverables you keep",
              "Scenario-based knowledge checks per module",
            ].map((item) => (
              <div key={item} className="landing-outcome">
                <span className="landing-outcome-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="landing-stats">
            <div className="landing-stat">
              <div className="landing-stat-val">{stats.weeksCompleted}</div>
              <div className="landing-stat-lbl">of {TOTAL_WEEKS} weeks</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-val">{stats.deliverablesCompleted}</div>
              <div className="landing-stat-lbl">deliverables</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-val">{stats.rubricsCompleted}</div>
              <div className="landing-stat-lbl">of {stats.totalRubrics} rubrics</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-val">{stats.quizzesCompleted}</div>
              <div className="landing-stat-lbl">of {stats.totalQuizzes} checks</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat-val">{stats.overallPercent}%</div>
              <div className="landing-stat-lbl">overall</div>
            </div>
          </div>
        )}

        <div className="landing-ctas">
          {isNew ? (
            <>
              <Link to="/week/1" className="landing-btn-primary">
                Start Week 1 →
              </Link>
              <Link to="/path" className="landing-btn-secondary">
                Browse all modules
              </Link>
            </>
          ) : nextWeek ? (
            <>
              <Link
                to={`/week/${nextWeek.week}`}
                className="landing-btn-primary"
                style={{ background: nextMonth?.color }}
              >
                Continue: W{nextWeek.week} →
              </Link>
              <Link to="/path" className="landing-btn-secondary">
                All modules
              </Link>
            </>
          ) : (
            <>
              <div className="landing-complete-badge">Course complete ✓</div>
              <Link to="/path" className="landing-btn-secondary">
                Review full path
              </Link>
            </>
          )}
        </div>

        {!isNew && nextWeek && (
          <div className="landing-next-context">
            {nextWeek.title} · Month {nextMonth?.month}: {nextMonth?.shortTitle}
          </div>
        )}
      </div>

      {/* ── Orientation for new users ──────────────────────────────────────── */}
      {isNew && <LandingOrientation />}

      {/* ── Module grid ───────────────────────────────────────────────────── */}
      <div className="landing-section-label">Your learning path — 6 modules, 24 weeks</div>
      <div className="landing-modules">
        {MONTHS.map((m, i) => {
          const pct = getMonthPercent(m);
          const first = m.weeks[0].week;
          const last = m.weeks[m.weeks.length - 1].week;
          return (
            <Link
              key={m.month}
              to={`/path?month=${i}`}
              className="landing-module-card"
              style={{ borderColor: `${m.color}35` }}
            >
              <div className="landing-module-top">
                <div className="landing-module-dot" style={{ background: m.color }} />
                <div
                  className="landing-module-pct"
                  style={{ color: pct === 100 ? "var(--green)" : "var(--text-secondary)" }}
                >
                  {pct}%
                </div>
              </div>
              <div className="landing-module-num" style={{ color: m.color }}>
                Month {m.month}
              </div>
              <div className="landing-module-title">{m.shortTitle}</div>
              <div className="landing-module-weeks">W{first}–W{last} · 4 weeks</div>
              <div className="landing-module-bar">
                <div
                  className="landing-module-fill"
                  style={{ width: `${pct}%`, background: m.color }}
                />
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
