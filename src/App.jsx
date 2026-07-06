import { useState, useMemo } from "react";
import { MONTHS, ALL_WEEKS } from "./data/curriculum.js";
import { useProgress } from "./hooks/useProgress.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { Hero } from "./components/Hero.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { WeekCard } from "./components/WeekCard.jsx";

export default function App() {
  const [expandedMonth, setExpandedMonth]   = useState(0);
  const [expandedWeeks, setExpandedWeeks]   = useState({});
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [sidebarOpen, setSidebarOpen]       = useState(false);
  const [searchQuery, setSearchQuery]       = useState("");

  const {
    progress, loaded,
    toggleReading, toggleProject, updateNote,
    resetAll, exportProgress, importProgress,
    getMonthPercent, stats,
  } = useProgress();

  // ── Week expand helpers ───────────────────────────────────────────────────
  const toggleWeek = (wn) => setExpandedWeeks((p) => ({ ...p, [wn]: !p[wn] }));

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

  // ── Reset ─────────────────────────────────────────────────────────────────
  const handleReset = async () => {
    if (!confirmingReset) { setConfirmingReset(true); return; }
    setConfirmingReset(false);
    await resetAll();
  };

  // ── Month selection (closes sidebar on mobile, clears search) ─────────────
  const handleSelectMonth = (i) => {
    setExpandedMonth(i);
    setSearchQuery("");
    setSidebarOpen(false);
  };

  // ── Hero CTA — open month 1, expand week 1, scroll to it ─────────────────
  const handleBeginWeek1 = () => {
    setExpandedMonth(0);
    setExpandedWeeks((p) => ({ ...p, 1: true }));
    setSidebarOpen(false);
    setTimeout(() => {
      document.getElementById("week-card-1")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  // ── Search across all weeks ───────────────────────────────────────────────
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

  // ── Week card renderer (shared between normal and search view) ────────────
  const renderWeekCard = (w, color) => (
    <WeekCard
      key={w.week}
      week={w}
      monthColor={color}
      progress={progress[w.week]}
      onToggleReading={(idx) => toggleReading(w.week, idx)}
      onToggleProject={() => toggleProject(w.week)}
      onAddNote={(note) => updateNote(w.week, note)}
      isExpanded={!!expandedWeeks[w.week]}
      onToggle={() => toggleWeek(w.week)}
      isNextUp={stats.nextIncompleteWeek?.week === w.week}
    />
  );

  if (!loaded) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
        Loading…
      </div>
    );
  }

  const activeMonth = MONTHS[expandedMonth];

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        months={MONTHS}
        expandedMonth={expandedMonth}
        onSelectMonth={handleSelectMonth}
        getMonthPercent={getMonthPercent}
        stats={stats}
        onExport={exportProgress}
        onImport={importProgress}
        confirmingReset={confirmingReset}
        onReset={handleReset}
        onCancelReset={() => setConfirmingReset(false)}
      />

      <main className="main-content">
        {/* Mobile header */}
        <div className="mobile-header">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
            ☰
          </button>
          <span className="mobile-header-title">Claude Training</span>
          <span className="mobile-header-pct">{stats.overallPercent}%</span>
        </div>

        <div className="main-inner">
          {/* Hero — visible only on first visit (no progress made yet) */}
          <Hero stats={stats} onBegin={handleBeginWeek1} />

          {/* Search */}
          <SearchBar
            query={searchQuery}
            onChange={setSearchQuery}
            resultCount={searchResults?.length ?? 0}
          />

          {/* ── Search results ────────────────────────────────────────────── */}
          {searchResults !== null ? (
            <div>
              <div className="search-results-header">
                {searchResults.length === 0
                  ? `No weeks match "${searchQuery}"`
                  : `${searchResults.length} week${searchResults.length !== 1 ? "s" : ""} matching "${searchQuery}"`
                }
              </div>
              {searchResults.length === 0 ? (
                <div className="search-empty">Try a skill name like "governance" or a topic like "incident".</div>
              ) : (
                /* Group results by month */
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
            /* ── Active month view ───────────────────────────────────────── */
            <div>
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

              {activeMonth.weeks.map((w) => (
                <div key={w.week} id={`week-card-${w.week}`}>
                  {renderWeekCard(w, activeMonth.color)}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
