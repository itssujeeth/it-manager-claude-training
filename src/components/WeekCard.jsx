import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { loadContent, hasContent } from "../content/index.js";
import { QuizBlock } from "./QuizBlock.jsx";

const ReadingModal = lazy(() =>
  import("./ReadingModal.jsx").then((m) => ({ default: m.ReadingModal }))
);

// ── Icons ────────────────────────────────────────────────────────────────────

function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 5 }}>
      <path d="M6.5 3.5H3.5C2.948 3.5 2.5 3.948 2.5 4.5V12.5C2.5 13.052 2.948 13.5 3.5 13.5H11.5C12.052 13.5 12.5 13.052 12.5 12.5V9.5M9.5 2.5H13.5M13.5 2.5V6.5M13.5 2.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5V2.5A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Risk config ───────────────────────────────────────────────────────────────

const RISK_CONFIG = {
  Low:        { color: "#2EAD6B", bg: "#2EAD6B18" },
  Medium:     { color: "#D4783C", bg: "#D4783C18" },
  High:       { color: "#E04444", bg: "#E0444418" },
  Restricted: { color: "#E04444", bg: "#E0444418" },
};

const DIFFICULTY_COLOR = {
  Beginner:     "var(--text-secondary)",
  Intermediate: "#D4783C",
  Advanced:     "#E04444",
};

// ── Section badge ─────────────────────────────────────────────────────────────

function SectionBadge({ type, color }) {
  const BADGE = {
    Learn:      { label: "Learn",      defaultColor: "#3A7BE8" },
    Try:        { label: "Try",        defaultColor: "#9B5CF6" },
    Validate:   { label: "Validate",   defaultColor: "#2EAD6B" },
    Portfolio:  { label: "Portfolio",  defaultColor: "#D4783C" },
    SafeData:   { label: "Safe Data",  defaultColor: "#E04444" },
  };
  const cfg = BADGE[type];
  if (!cfg) return null;
  const c = color || cfg.defaultColor;
  return (
    <span className="section-badge" style={{ color: c, borderColor: `${c}40`, background: `${c}10` }}>
      {cfg.label}
    </span>
  );
}

// ── Prompt pattern block ──────────────────────────────────────────────────────

function PromptPattern({ pattern, accentColor }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pattern).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="prompt-pattern-wrap">
      <button
        className="prompt-pattern-toggle"
        onClick={() => setExpanded((p) => !p)}
        style={{ color: accentColor }}
      >
        <SectionBadge type="Try" color={accentColor} />
        <span className="ws-section-title">Prompt pattern</span>
        <span className="prompt-pattern-chevron" style={{ transform: expanded ? "rotate(180deg)" : "none" }}>▾</span>
      </button>
      {expanded && (
        <div className="prompt-pattern-body" style={{ borderColor: `${accentColor}25` }}>
          <pre className="prompt-pattern-pre">{pattern}</pre>
          <button className="prompt-copy-btn" onClick={handleCopy} style={{ color: accentColor }}>
            <CopyIcon /> {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

// ── WeekCard ──────────────────────────────────────────────────────────────────

export function WeekCard({ week, monthColor, progress, onToggleReading, onToggleProject, onAddNote, onToggleRubric, isExpanded, onToggle, isNextUp, quizState, onSubmitQuiz }) {
  const readingDone  = progress?.reading || [];
  const projectDone  = progress?.projectDone || false;
  const notes        = progress?.notes || "";
  const rubricDone   = progress?.rubric || [];
  const totalItems   = week.reading.length + 1;
  const doneItems    = readingDone.filter(Boolean).length + (projectDone ? 1 : 0);
  const weekPercent  = Math.round((doneItems / totalItems) * 100);

  const [loadedContent, setLoadedContent] = useState({});
  const [readingModal, setReadingModal] = useState(null); // { item, contentKey }

  const openReading = (item, contentKey) => {
    setReadingModal({ item, content: loadedContent[contentKey] ?? null });
    if (!loadedContent[contentKey]) {
      loadContent(contentKey).then((text) => {
        if (text) {
          setLoadedContent((p) => ({ ...p, [contentKey]: text }));
          setReadingModal((prev) => prev ? { ...prev, content: text } : prev);
        }
      });
    }
  };

  const [pulsing, setPulsing] = useState(false);
  const prevPct = useRef(weekPercent);
  useEffect(() => {
    if (weekPercent === 100 && prevPct.current < 100) {
      setPulsing(true);
      const t = setTimeout(() => setPulsing(false), 1400);
      return () => clearTimeout(t);
    }
    prevPct.current = weekPercent;
  }, [weekPercent]);

  const riskCfg   = week.riskLevel ? RISK_CONFIG[week.riskLevel] : null;
  const cardClass = ["week-card", pulsing ? "week-card-pulse" : ""].filter(Boolean).join(" ");

  return (
    <div
      className={cardClass}
      style={{
        background: "var(--card-bg)",
        borderRadius: 10,
        border: `1px solid ${isExpanded ? monthColor : "var(--border)"}`,
        marginBottom: 10,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "14px 18px",
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text)", fontFamily: "var(--font-body)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <span style={{
            background: weekPercent === 100 ? "var(--green)" : monthColor,
            color: "#fff", borderRadius: 6, padding: "2px 10px",
            fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 600, flexShrink: 0,
          }}>
            {weekPercent === 100 ? "✓" : `W${week.week}`}
          </span>
          {isNextUp && <span className="next-up-badge">Next up</span>}
          {riskCfg && (
            <span className="risk-badge" style={{ color: riskCfg.color, background: riskCfg.bg }}>
              {week.riskLevel}
            </span>
          )}
          <span style={{ fontWeight: 600, fontSize: 16, textAlign: "left" }}>{week.title}</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 8 }}>
          {week.difficulty && (
            <span className="difficulty-badge" style={{ color: DIFFICULTY_COLOR[week.difficulty] ?? "var(--text-secondary)" }}>
              {week.difficulty}
            </span>
          )}
          <span className="week-time-est">~90 min</span>
          <span style={{
            fontSize: 11, fontFamily: "var(--font-mono)",
            color: weekPercent === 100 ? "var(--green)" : "var(--text-secondary)",
            fontWeight: 600,
          }}>{weekPercent}%</span>
          <span style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", fontSize: 18, opacity: 0.5 }}>▾</span>
        </span>
      </button>

      {isExpanded && (
        <div style={{ padding: "0 18px 18px" }}>

          {/* ── Manager scenario ───────────────────────────────────────────── */}
          {week.scenario && (
            <div className="ws-scenario">
              <div className="ws-scenario-label">Manager scenario</div>
              <p className="ws-scenario-text">{week.scenario}</p>
            </div>
          )}

          {/* ── Learning checklist ─────────────────────────────────────────── */}
          <div style={{ marginBottom: 14 }}>
            <div className="ws-section-header">
              <SectionBadge type="Learn" color={monthColor} />
              <span className="ws-section-title">Learning checklist</span>
            </div>
            {week.reading.map((r, i) => {
              return (
                <div key={i} className="reading-item-wrap">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <input
                      type="checkbox"
                      id={`reading-${week.week}-${i}`}
                      checked={!!readingDone[i]}
                      onChange={() => onToggleReading(i)}
                      style={{ accentColor: monthColor, marginTop: 5, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
                    />
                    <label htmlFor={`reading-${week.week}-${i}`} style={{ flex: 1, fontSize: 15, lineHeight: 1.7, cursor: "pointer" }}>
                      <span style={{
                        textDecoration: readingDone[i] ? "line-through" : "none",
                        opacity: readingDone[i] ? 0.55 : 1,
                        color: "var(--text)",
                        transition: "opacity 0.2s",
                      }}>
                        {r.text}
                      </span>
                      {r.url && (
                        <a
                          href={r.url} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 4, marginLeft: 8,
                            fontSize: 11, color: monthColor, textDecoration: "none",
                            fontFamily: "var(--font-mono)", fontWeight: 600, opacity: 0.85,
                            borderBottom: `1px dashed ${monthColor}50`, paddingBottom: 1,
                            whiteSpace: "nowrap",
                          }}
                        >
                          <LinkIcon /> {r.urlLabel || "Open"}
                        </a>
                      )}
                      {hasContent(r.contentKey) && (
                        <button
                          onClick={(e) => { e.preventDefault(); openReading(r, r.contentKey); }}
                          className="read-toggle"
                          style={{ color: monthColor, borderColor: `${monthColor}40` }}
                        >
                          Read →
                        </button>
                      )}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Prompt pattern ─────────────────────────────────────────────── */}
          {week.promptPattern && (
            <div style={{ marginBottom: 14 }}>
              <PromptPattern pattern={week.promptPattern} accentColor={monthColor} />
            </div>
          )}

          {/* ── Safety gate ────────────────────────────────────────────────── */}
          {week.safetyWarnings?.length > 0 && (
            <div className="safety-gate">
              <div className="safety-gate-label">
                <SectionBadge type="SafeData" />
                <span className="ws-section-title">Before using real workplace data</span>
              </div>
              <ul className="safety-gate-list">
                {week.safetyWarnings.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          )}

          {/* ── Weekly deliverable ─────────────────────────────────────────── */}
          <div style={{ marginBottom: 14 }}>
            <div className="ws-section-header">
              <SectionBadge type="Portfolio" color={monthColor} />
              <span className="ws-section-title">Weekly deliverable</span>
            </div>
            <label
              htmlFor={`project-${week.week}`}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, lineHeight: 1.7,
                color: "var(--text)", background: projectDone ? "#2EAD6B15" : `${monthColor}10`,
                padding: "10px 14px", borderRadius: 8, cursor: "pointer",
                border: projectDone ? "1px solid #2EAD6B40" : "1px solid transparent",
                transition: "all 0.2s",
              }}
            >
              <input
                type="checkbox"
                id={`project-${week.week}`}
                checked={projectDone}
                onChange={onToggleProject}
                style={{ accentColor: "var(--green)", marginTop: 4, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
              />
              <span style={{ textDecoration: projectDone ? "line-through" : "none", opacity: projectDone ? 0.65 : 1 }}>
                {week.project}
              </span>
            </label>
          </div>

          {/* ── Rubric ─────────────────────────────────────────────────────── */}
          {week.rubric?.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div className="ws-section-header">
                <SectionBadge type="Validate" color={monthColor} />
                <span className="ws-section-title">Quality rubric</span>
                <span className="rubric-progress-label">
                  {rubricDone.filter(Boolean).length}/{week.rubric.length} criteria met
                </span>
              </div>
              <div className="rubric-table">
                {week.rubric.map((row, i) => (
                  <label
                    key={i}
                    htmlFor={`rubric-${week.week}-${i}`}
                    className={`rubric-row${rubricDone[i] ? " rubric-row-done" : ""}`}
                  >
                    <input
                      type="checkbox"
                      id={`rubric-${week.week}-${i}`}
                      checked={!!rubricDone[i]}
                      onChange={() => onToggleRubric(i)}
                      style={{ accentColor: "var(--green)", flexShrink: 0, cursor: "pointer" }}
                    />
                    <span className="rubric-criterion">{row.criterion}</span>
                    <span className="rubric-pass">{row.passCondition}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ── Notes ──────────────────────────────────────────────────────── */}
          <div style={{ marginBottom: 14 }}>
            <div className="ws-section-header">
              <span className="ws-section-title" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, fontFamily: "var(--font-mono)" }}>Notes &amp; evidence</span>
            </div>
            <textarea
              value={notes}
              onChange={(e) => onAddNote(e.target.value)}
              placeholder="Add takeaways, prompt experiments, results, or reflections…"
            />
          </div>

          {/* ── Skills ─────────────────────────────────────────────────────── */}
          <div style={{ marginBottom: week.quiz?.length > 0 ? 14 : 0 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 6, fontFamily: "var(--font-mono)" }}>
              Skills built
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {week.skills.map((s, i) => (
                <span key={i} style={{ fontSize: 11, background: `${monthColor}18`, color: monthColor, padding: "3px 10px", borderRadius: 20, fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── Knowledge check ────────────────────────────────────────────── */}
          {week.quiz?.length > 0 && onSubmitQuiz && (() => {
            const readingsDone = readingDone.filter(Boolean).length;
            const readingsTotal = week.reading.length;
            const unlocked = readingsDone === readingsTotal || quizState?.submitted;

            if (!unlocked) {
              const remaining = readingsTotal - readingsDone;
              return (
                <div className="quiz-locked">
                  <span className="quiz-locked-icon">🔒</span>
                  <span className="quiz-locked-text">
                    Complete {remaining} more reading{remaining !== 1 ? "s" : ""} to unlock the knowledge check
                  </span>
                </div>
              );
            }

            return (
              <QuizBlock
                week={week}
                monthColor={monthColor}
                quizState={quizState}
                onSubmit={onSubmitQuiz}
              />
            );
          })()}

        </div>
      )}

      {/* ── Reading modal ───────────────────────────────────────────────── */}
      {readingModal && (
        <Suspense fallback={null}>
          <ReadingModal
            item={readingModal.item}
            content={readingModal.content}
            accentColor={monthColor}
            onClose={() => setReadingModal(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
