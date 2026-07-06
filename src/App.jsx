import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";

const CockpitPage = lazy(() => import("./pages/CockpitPage.jsx").then((m) => ({ default: m.CockpitPage })));
const PathPage    = lazy(() => import("./pages/PathPage.jsx").then((m) => ({ default: m.PathPage })));
const WeekPage    = lazy(() => import("./pages/WeekPage.jsx").then((m) => ({ default: m.WeekPage })));

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Suspense fallback={null}><CockpitPage /></Suspense>} />
          <Route path="path" element={<Suspense fallback={null}><PathPage /></Suspense>} />
          <Route path="week/:weekId" element={<Suspense fallback={null}><WeekPage /></Suspense>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
