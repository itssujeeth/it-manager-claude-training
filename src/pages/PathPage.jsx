import { useState, useMemo, useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { MONTHS, ALL_WEEKS } from "../data/curriculum.js";
import { SearchBar } from "../components/SearchBar.jsx";
import { WeekCard } from "../components/WeekCard.jsx";

export function PathPage() {
  const {
    progress, toggleReading, toggleProject, updateNote, toggleRubric,
    submitQuiz, getQuizState, stats, getMonthPercent,
  } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialMonth = Math.max(0, Math.min(5, parseInt(searchParams.get("month") ?? "0", 10)));
  const [expandedMonth, setExpandedMonth] = useState(initialMonth);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectMonth = (i) => {
    setExpandedMonth(i);
    setSearchQuery("");
    setSearchParams(i === 0 ? {} : { month: String(i) }, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const m = parseInt(searchParams.get("month") ?? "0", 10);
    if (!isNaN(m) && m >= 0 && m < MONTHS.length) setExpandedMonth(m);
  }, [searchParams]);

  const toggleWeek = (wn) =>
    setExpandedWeeks((p) => ({ ...p, [wn]: !p[wn] }));

  const expandAllInMonth = (month) => {
    const updates = {};
    month.weeks.forEach((w) => { updates[w.week] = true; });
    setExpandedWeeks((p) => ({ ...p, ...updates }));
  };

  const collapseAllInMonth = (month) => {
    const updates = {};
    month.weeks.forEach((w) => { updates[w.week] = false; });
    setExpandedWeeks((p) => ({ ...p, ...updates }));
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return ALL_WEEKS.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.skills.some((s) => s.toLowerCase().includes(q)) ||
        w.reading.some((r) => r.text.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const renderWeekCard = (w, color) => (
    <WeekCard
      key={w.week}
      week={w}
      monthColor={color}
      progress={progress[w.week]}
      onToggleReading={(idx) => toggleReading(w.week, idx)}
      onToggleProject={() => toggleProject(w.week)}
      onAddNote={(note) => updateNote(w.week, note)}
      onToggleRubric={(idx) => toggleRubric(w.week, idx)}
      isExpanded={!!expandedWeeks[w.week]}
      onToggle={() => toggleWeek(w.week)}
      isNextUp={stats.nextIncompleteWeek?.week === w.week}
      quizState={getQuizState(w.week)}
      onSubmitQuiz={(answers) => submitQuiz(w.week, answers)}
    />
  );

  const activeMonth = MONTHS[expandedMonth];

  return (
    <>
      <SearchBar
        query={searchQuery}
        onChange={setSearchQuery}
        resultCount={searchResults?.length ?? 0}
      />

      {searchResults !== null ? (
        /* ── Search results ───────────────────────────────────────────────── */
        <div>
          <div className="search-results-header">
            {searchResults.length === 0
              ? `No weeks match "${searchQuery}"`
              : `${searchResults.length} week${searchResults.length !== 1 ? "s" : ""} matching "${searchQuery}"`}
          </div>
          {searchResults.length === 0 ? (
            <div className="search-empty">Try a skill name like "governance" or a topic like "incident".</div>
          ) : (
            MONTHS.map((m) => {
              const monthResults = searchResults.filter((w) => w.monthNum === m.month);
              if (monthResults.length === 0) return null;
              return (
                <div key={m.month}>
                  <div className="search-month-label" style={{ color: m.color }}>
                    Month {m.month} · {m.shortTitle}
                  </div>
                  {monthResults.map((w) => renderWeekCard(w, m.color))}
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* ── Month view ───────────────────────────────────────────────────── */
        <>
          {/* ── Month tab bar ─────────────────────────────────────────────── */}
          <div className="month-tabs" role="tablist" aria-label="Modules">
            {MONTHS.map((m, i) => {
              const pct = getMonthPercent(m);
              const active = expandedMonth === i;
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active}
                  className={`month-tab${active ? " month-tab-active" : ""}`}
                  style={active ? { borderColor: m.color, color: m.color } : {}}
                  onClick={() => handleSelectMonth(i)}
                >
                  <div className="month-tab-num">M{m.month}</div>
                  <div className="month-tab-title">{m.shortTitle}</div>
                  <div className="month-tab-bar-wrap">
                    <div
                      className="month-tab-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: active ? m.color : "var(--text-secondary)",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Active month header ────────────────────────────────────────── */}
          <div className="month-header">
            <div className="month-header-left">
              <div className="month-tag">
                <span className="month-tag-label" style={{ color: activeMonth.color }}>
                  MONTH {activeMonth.month}
                </span>
                <span className="month-tag-pct">{getMonthPercent(activeMonth)}% complete</span>
              </div>
              <h2 className="month-title">{activeMonth.title}</h2>
              <p className="month-subtitle">{activeMonth.subtitle}</p>
            </div>
            <div className="expand-controls">
              <button className="expand-btn" onClick={() => expandAllInMonth(activeMonth)}>
                Expand all
              </button>
              <button className="expand-btn" onClick={() => collapseAllInMonth(activeMonth)}>
                Collapse all
              </button>
            </div>
          </div>

          {/* ── Module objectives ─────────────────────────────────────────── */}
          {activeMonth.objectives?.length > 0 && (
            <div className="module-objectives">
              <div className="module-objectives-label">By the end of this module, you can</div>
              <ul className="module-objectives-list">
                {activeMonth.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
            </div>
          )}

          {/* ── Week cards ────────────────────────────────────────────────── */}
          {activeMonth.weeks.map((w) => (
            <div key={w.week} id={`week-card-${w.week}`}>
              {renderWeekCard(w, activeMonth.color)}
            </div>
          ))}

          {/* ── Module navigation ─────────────────────────────────────────── */}
          <div className="module-nav">
            {expandedMonth > 0 && (
              <button className="module-nav-btn" onClick={() => handleSelectMonth(expandedMonth - 1)}>
                ← Month {MONTHS[expandedMonth - 1].month}: {MONTHS[expandedMonth - 1].shortTitle}
              </button>
            )}
            {expandedMonth < MONTHS.length - 1 && (
              <button
                className="module-nav-btn module-nav-btn-next"
                onClick={() => handleSelectMonth(expandedMonth + 1)}
              >
                Month {MONTHS[expandedMonth + 1].month}: {MONTHS[expandedMonth + 1].shortTitle} →
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
