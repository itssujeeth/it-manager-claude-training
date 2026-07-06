import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { ProgressRing } from "./ProgressRing.jsx";
import { TOTAL_WEEKS } from "../data/curriculum.js";

export function Sidebar({
  isOpen, onClose,
  months, getMonthPercent, stats,
  onExport, onImport,
  confirmingReset, onReset, onCancelReset,
}) {
  const importRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try { await onImport(file); }
    catch (err) { alert(err.message); }
    finally { e.target.value = ""; }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar${isOpen ? " drawer-open" : ""}`} aria-label="Course navigation">
        {/* Logo — links to cockpit */}
        <Link to="/" className="sidebar-logo" style={{ textDecoration: "none" }}>
          <div className="sidebar-logo-icon">C</div>
          <div className="sidebar-logo-text">Claude Training</div>
        </Link>

        {/* Overall progress */}
        <div className="sidebar-progress">
          <div className="sidebar-progress-ring-wrap">
            <ProgressRing percent={stats.overallPercent} size={68} stroke={5} color="#2EAD6B" />
            <span className="sidebar-progress-ring-label">{stats.overallPercent}%</span>
          </div>
          <div className="sidebar-progress-sub">
            {stats.weeksCompleted} of {TOTAL_WEEKS} weeks complete<br />
            {stats.doneItems} of {stats.totalItems} items done
          </div>
        </div>

        {/* Primary nav */}
        <nav className="sidebar-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `sidebar-nav-item${isActive ? " active" : ""}`}
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="sidebar-section-label">Learning path</div>

        {/* Month navigation */}
        <nav className="sidebar-months" aria-label="Months">
          {months.map((m, i) => {
            const pct = getMonthPercent(m);
            return (
              <Link
                key={i}
                to={`/path?month=${i}`}
                className="month-item"
                style={{ "--mc": m.color }}
                onClick={onClose}
              >
                <div className="month-item-row">
                  <div className="month-item-dot" style={{ background: m.color }} />
                  <div className="month-item-label">
                    <div className="month-item-num">Month {m.month}</div>
                    <div className="month-item-name">{m.shortTitle}</div>
                  </div>
                  <div className="month-item-pct">{pct}%</div>
                </div>
                <div className="month-item-bar">
                  <div className="month-item-fill" style={{ width: `${pct}%`, background: m.color }} />
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-divider" />

        {/* Actions */}
        <div className="sidebar-actions">
          <button className="sidebar-btn" onClick={onExport}>↓ Export progress</button>
          <button className="sidebar-btn" onClick={() => importRef.current?.click()}>↑ Import progress</button>
          <input ref={importRef} type="file" accept="application/json,.json" onChange={handleFileChange} style={{ display: "none" }} />

          <div className="sidebar-divider" />

          {confirmingReset ? (
            <>
              <button className="sidebar-btn" onClick={onCancelReset}>Cancel</button>
              <button className="sidebar-btn sidebar-btn-confirm" onClick={onReset}>Confirm reset</button>
            </>
          ) : (
            <button className="sidebar-btn sidebar-btn-danger" onClick={onReset}>Reset all progress</button>
          )}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          Not affiliated with or endorsed by Anthropic.{" "}
          Independent community training resource.
          <br /><br />
          Progress stored locally — nothing sent to a server. Never paste credentials or
          customer data into AI prompts.{" "}
          <a href="https://github.com/itssujeeth/it-manager-claude-training" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
        </div>
      </aside>
    </>
  );
}
