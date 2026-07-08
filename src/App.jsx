import { MaintenancePage } from "./pages/MaintenancePage.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

// ── MAINTENANCE MODE ──────────────────────────────────────────────────────────
// All routes resolve to the maintenance page.
// To go live: replace this file with App.live.jsx (see that file for the full
// routed app).
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </HashRouter>
  );
}
