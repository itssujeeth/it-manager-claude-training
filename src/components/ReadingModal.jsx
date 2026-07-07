import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MD_COMPONENTS = {
  h1: ({ children }) => <h1 className="rm-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="rm-h2">{children}</h2>,
  h3: ({ children }) => <h3 className="rm-h3">{children}</h3>,
  p:  ({ children }) => <p  className="rm-p">{children}</p>,
  ul: ({ children }) => <ul className="rm-ul">{children}</ul>,
  ol: ({ children }) => <ol className="rm-ol">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => <blockquote className="rm-blockquote">{children}</blockquote>,
  code: ({ inline, className, children }) => {
    if (inline) return <code className="rm-inline-code">{children}</code>;
    const lang = (className || "").replace("language-", "");
    return (
      <div className="rm-code-wrap">
        {lang && <div className="rm-code-lang">{lang}</div>}
        <pre className="rm-code"><code>{children}</code></pre>
      </div>
    );
  },
  table:   ({ children }) => <div className="rm-table-wrap"><table className="rm-table">{children}</table></div>,
  thead:   ({ children }) => <thead>{children}</thead>,
  tbody:   ({ children }) => <tbody>{children}</tbody>,
  tr:      ({ children }) => <tr>{children}</tr>,
  th:      ({ children }) => <th>{children}</th>,
  td:      ({ children }) => <td>{children}</td>,
  strong:  ({ children }) => <strong>{children}</strong>,
  em:      ({ children }) => <em>{children}</em>,
  a:       ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
};

export function ReadingModal({ item, content, accentColor, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="rm-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true">
      <div className="rm-panel">

        {/* ── Top bar ───────────────────────────────────────────────────── */}
        <div className="rm-topbar">
          <button className="rm-back" onClick={onClose} aria-label="Close reading">
            ← Back
          </button>
          <div className="rm-topbar-title" style={{ color: accentColor }}>
            {item?.urlLabel || "Reading"}
          </div>
          <button className="rm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* ── Article ───────────────────────────────────────────────────── */}
        <div className="rm-body">
          <div className="rm-article">
            {content
              ? <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>{content}</ReactMarkdown>
              : <p className="rm-p" style={{ color: "var(--text-secondary)" }}>Loading…</p>
            }
          </div>
        </div>

      </div>
    </div>
  );
}
