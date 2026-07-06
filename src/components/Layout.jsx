import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar.jsx";
import { MONTHS } from "../data/curriculum.js";
import { useProgress } from "../hooks/useProgress.js";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [confirmingReset, setConfirmingReset] = useState(false);

  const {
    progress, loaded,
    toggleReading, toggleProject, updateNote, toggleRubric,
    submitQuiz, getQuizState,
    resetAll, exportProgress, importProgress,
    getMonthPercent, stats,
  } = useProgress();

  const handleReset = async () => {
    if (!confirmingReset) { setConfirmingReset(true); return; }
    setConfirmingReset(false);
    await resetAll();
  };

  if (!loaded) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
        Loading…
      </div>
    );
  }

  const outletContext = {
    progress, toggleReading, toggleProject, updateNote, toggleRubric,
    submitQuiz, getQuizState,
    stats, getMonthPercent,
  };

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        months={MONTHS}
        getMonthPercent={getMonthPercent}
        stats={stats}
        onExport={exportProgress}
        onImport={importProgress}
        confirmingReset={confirmingReset}
        onReset={handleReset}
        onCancelReset={() => setConfirmingReset(false)}
      />

      <main className="main-content">
        <div className="mobile-header">
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            ☰
          </button>
          <span className="mobile-header-title">Claude Training</span>
          <span className="mobile-header-pct">{stats.overallPercent}%</span>
        </div>

        <div className="main-inner">
          <Outlet context={outletContext} />
        </div>
      </main>
    </div>
  );
}
