import { useState, useEffect, useRef } from "react";

function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 5 }}>
      <path d="M6.5 3.5H3.5C2.948 3.5 2.5 3.948 2.5 4.5V12.5C2.5 13.052 2.948 13.5 3.5 13.5H11.5C12.052 13.5 12.5 13.052 12.5 12.5V9.5M9.5 2.5H13.5M13.5 2.5V6.5M13.5 2.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Minimal markdown renderer: ## headings, **bold**, paragraph breaks
function ContentBlock({ markdown, accentColor }) {
  const blocks = markdown.trim().split(/\n\n+/);
  return (
    <div className="reading-content">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h4 key={i} className="reading-content-heading" style={{ color: accentColor }}>
              {block.slice(3)}
            </h4>
          );
        }
        // inline **bold**
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="reading-content-p">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={j}>{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
}

export function WeekCard({ week, monthColor, progress, onToggleReading, onToggleProject, onAddNote, isExpanded, onToggle, isNextUp }) {
  const readingDone = progress?.reading || [];
  const projectDone = progress?.projectDone || false;
  const notes       = progress?.notes || "";
  const totalItems  = week.reading.length + 1;
  const doneItems   = readingDone.filter(Boolean).length + (projectDone ? 1 : 0);
  const weekPercent = Math.round((doneItems / totalItems) * 100);

  const [expandedContent, setExpandedContent] = useState(new Set());

  const toggleContent = (i) => {
    setExpandedContent((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  // Pulse animation on completion
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
          <span style={{ fontWeight: 600, fontSize: 16, textAlign: "left" }}>{week.title}</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 8 }}>
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
          {/* Learning checklist */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
              Learning Checklist
            </div>
            {week.reading.map((r, i) => {
              const contentOpen = expandedContent.has(i);
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
                      {r.content && (
                        <button
                          onClick={(e) => { e.preventDefault(); toggleContent(i); }}
                          className="read-toggle"
                          style={{ color: monthColor, borderColor: `${monthColor}40` }}
                          aria-expanded={contentOpen}
                        >
                          {contentOpen ? "Close ↑" : "Read ↓"}
                        </button>
                      )}
                    </label>
                  </div>
                  {r.content && contentOpen && (
                    <div className="reading-content-panel" style={{ borderColor: `${monthColor}25` }}>
                      <ContentBlock markdown={r.content} accentColor={monthColor} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Weekly deliverable */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
              Weekly Deliverable
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

          {/* Notes */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
              Notes & Evidence
            </div>
            <textarea
              value={notes}
              onChange={(e) => onAddNote(e.target.value)}
              placeholder="Add takeaways, prompt experiments, results, or reflections…"
            />
          </div>

          {/* Skills */}
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 6, fontFamily: "var(--font-mono)" }}>
              Skills Built
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {week.skills.map((s, i) => (
                <span key={i} style={{ fontSize: 11, background: `${monthColor}18`, color: monthColor, padding: "3px 10px", borderRadius: 20, fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
