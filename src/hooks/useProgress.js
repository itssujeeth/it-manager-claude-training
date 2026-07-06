import { useState, useEffect, useCallback } from "react";
import { STORAGE_KEY, ALL_WEEKS, MONTHS } from "../data/curriculum.js";

export function useProgress() {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result?.value) setProgress(JSON.parse(result.value));
      } catch (e) {
        console.warn("Could not load saved progress:", e);
      }
      setLoaded(true);
    })();
  }, []);

  const saveProgress = useCallback(async (next) => {
    setProgress(next);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.error("Save failed:", e);
    }
  }, []);

  const toggleReading = (wn, ri) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    const nr = [...(wp.reading || [])];
    nr[ri] = !nr[ri];
    saveProgress({ ...progress, [wn]: { ...wp, reading: nr } });
  };

  const toggleProject = (wn) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    saveProgress({ ...progress, [wn]: { ...wp, projectDone: !wp.projectDone } });
  };

  const updateNote = (wn, note) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    saveProgress({ ...progress, [wn]: { ...wp, notes: note } });
  };

  const toggleRubric = (wn, ri) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "", rubric: [] };
    const nr = [...(wp.rubric || [])];
    nr[ri] = !nr[ri];
    saveProgress({ ...progress, [wn]: { ...wp, rubric: nr } });
  };

  const submitQuiz = (weekNum, answers) => {
    saveProgress({ ...progress, [`quiz_w${weekNum}`]: { answers, submitted: true } });
  };

  const getQuizState = (weekNum) => progress[`quiz_w${weekNum}`] || { answers: {}, submitted: false };

  const resetAll = async () => {
    setProgress({});
    try { await window.storage.delete(STORAGE_KEY); } catch (e) {}
  };

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `claude-training-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (typeof data !== "object" || Array.isArray(data))
            throw new Error("Unexpected format");
          await saveProgress(data);
          resolve();
        } catch {
          reject(new Error("Invalid progress file — could not restore data."));
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsText(file);
    });

  // ── Derived stats ────────────────────────────────────────────────────────

  const getWeekDone = (w) => {
    const wp = progress[w.week] || {};
    return (wp.reading || []).filter(Boolean).length + (wp.projectDone ? 1 : 0);
  };

  const getWeekTotal = (w) => w.reading.length + 1;

  const getMonthPercent = (m) => {
    const total = m.weeks.reduce((s, w) => s + getWeekTotal(w), 0);
    const done  = m.weeks.reduce((s, w) => s + getWeekDone(w),  0);
    return total > 0 ? Math.round((done / total) * 100) : 0;
  };

  const stats = (() => {
    const totalItems         = ALL_WEEKS.reduce((s, w) => s + getWeekTotal(w), 0);
    const doneItems          = ALL_WEEKS.reduce((s, w) => s + getWeekDone(w),  0);
    const overallPercent     = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
    const weeksCompleted     = ALL_WEEKS.filter((w) => getWeekDone(w) === getWeekTotal(w)).length;
    const totalStructured    = ALL_WEEKS.reduce((s, w) => s + w.reading.length, 0);
    const nextIncompleteWeek = ALL_WEEKS.find((w) => getWeekDone(w) < getWeekTotal(w));
    const deliverablesCompleted = ALL_WEEKS.filter((w) => progress[w.week]?.projectDone).length;
    const rubricsCompleted = ALL_WEEKS.filter((w) => {
      if (!w.rubric?.length) return false;
      const wp = progress[w.week] || {};
      return (wp.rubric || []).filter(Boolean).length >= w.rubric.length;
    }).length;
    const totalRubrics = ALL_WEEKS.filter((w) => w.rubric?.length > 0).length;
    const quizzesCompleted = ALL_WEEKS.filter((w) => w.quiz?.length > 0 && progress[`quiz_w${w.week}`]?.submitted).length;
    const totalQuizzes = ALL_WEEKS.filter((w) => w.quiz?.length > 0).length;
    return { totalItems, doneItems, overallPercent, weeksCompleted, totalStructured, nextIncompleteWeek, deliverablesCompleted, rubricsCompleted, totalRubrics, quizzesCompleted, totalQuizzes };
  })();

  return {
    progress,
    loaded,
    toggleReading,
    toggleProject,
    updateNote,
    toggleRubric,
    submitQuiz,
    getQuizState,
    resetAll,
    exportProgress,
    importProgress,
    getMonthPercent,
    stats,
  };
}
