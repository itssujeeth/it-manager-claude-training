import { useEffect } from "react";

// ── Inline token renderer (bold, italic, inline code) ────────────────────────

function renderInline(text) {
  const tokens = [];
  // Split on **bold**, *italic*, `code` — in that priority order
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, match, key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) tokens.push(text.slice(last, match.index));
    const raw = match[0];
    if (raw.startsWith("**"))      tokens.push(<strong key={key++}>{raw.slice(2, -2)}</strong>);
    else if (raw.startsWith("*"))  tokens.push(<em key={key++}>{raw.slice(1, -1)}</em>);
    else                           tokens.push(<code key={key++} className="rm-inline-code">{raw.slice(1, -1)}</code>);
    last = match.index + raw.length;
  }
  if (last < text.length) tokens.push(text.slice(last));
  return tokens;
}

// ── Table renderer ────────────────────────────────────────────────────────────

function RenderTable({ lines, key: k }) {
  const rows = lines
    .filter((l) => !l.match(/^\|[-\s|]+\|$/))  // skip separator rows
    .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  if (rows.length === 0) return null;
  const [head, ...body] = rows;
  return (
    <div key={k} className="rm-table-wrap">
      <table className="rm-table">
        <thead>
          <tr>{head.map((c, i) => <th key={i}>{renderInline(c)}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>{row.map((c, j) => <td key={j}>{renderInline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Block parser ──────────────────────────────────────────────────────────────

function parseBlocks(markdown) {
  // Step 1 — preserve fenced code blocks before any line splitting
  const segments = [];
  const codeFenceRe = /```([^\n]*)\n([\s\S]*?)```/g;
  let last = 0, m;
  while ((m = codeFenceRe.exec(markdown)) !== null) {
    if (m.index > last) segments.push({ type: "text", raw: markdown.slice(last, m.index) });
    segments.push({ type: "code", lang: m[1].trim(), content: m[2] });
    last = m.index + m[0].length;
  }
  if (last < markdown.length) segments.push({ type: "text", raw: markdown.slice(last) });

  // Step 2 — parse text segments line-by-line into block groups
  const blocks = [];
  let key = 0;

  for (const seg of segments) {
    if (seg.type === "code") {
      blocks.push(
        <div key={key++} className="rm-code-wrap">
          {seg.lang && <div className="rm-code-lang">{seg.lang}</div>}
          <pre className="rm-code"><code>{seg.content.trimEnd()}</code></pre>
        </div>
      );
      continue;
    }

    // Group lines into logical blocks
    const lines = seg.raw.split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];

      // Blank line — skip
      if (line.trim() === "") { i++; continue; }

      // H1
      if (/^# /.test(line)) {
        blocks.push(<h1 key={key++} className="rm-h1">{renderInline(line.slice(2))}</h1>);
        i++; continue;
      }

      // H2
      if (/^## /.test(line)) {
        blocks.push(<h2 key={key++} className="rm-h2">{renderInline(line.slice(3))}</h2>);
        i++; continue;
      }

      // H3
      if (/^### /.test(line)) {
        blocks.push(<h3 key={key++} className="rm-h3">{renderInline(line.slice(4))}</h3>);
        i++; continue;
      }

      // Blockquote — collect consecutive
      if (/^> /.test(line)) {
        const qLines = [];
        while (i < lines.length && /^> /.test(lines[i])) {
          qLines.push(lines[i].slice(2));
          i++;
        }
        blocks.push(
          <blockquote key={key++} className="rm-blockquote">
            {qLines.map((l, j) => <p key={j}>{renderInline(l)}</p>)}
          </blockquote>
        );
        continue;
      }

      // Unordered list — collect consecutive
      if (/^[-*] /.test(line)) {
        const items = [];
        while (i < lines.length && /^[-*] /.test(lines[i])) {
          items.push(lines[i].replace(/^[-*] /, ""));
          i++;
        }
        blocks.push(
          <ul key={key++} className="rm-ul">
            {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
          </ul>
        );
        continue;
      }

      // Ordered list — collect consecutive
      if (/^\d+\. /.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\. /, ""));
          i++;
        }
        blocks.push(
          <ol key={key++} className="rm-ol">
            {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
          </ol>
        );
        continue;
      }

      // Table — collect consecutive pipe lines
      if (/^\|/.test(line)) {
        const tLines = [];
        while (i < lines.length && /^\|/.test(lines[i])) {
          tLines.push(lines[i]);
          i++;
        }
        blocks.push(<RenderTable key={key++} lines={tLines} />);
        continue;
      }

      // Paragraph — collect consecutive non-special lines
      const pLines = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !/^#{1,3} /.test(lines[i]) &&
        !/^[-*] /.test(lines[i]) &&
        !/^\d+\. /.test(lines[i]) &&
        !/^> /.test(lines[i]) &&
        !/^\|/.test(lines[i])
      ) {
        pLines.push(lines[i]);
        i++;
      }
      if (pLines.length > 0) {
        blocks.push(
          <p key={key++} className="rm-p">
            {renderInline(pLines.join(" "))}
          </p>
        );
      }
    }
  }

  return blocks;
}

// ── ReadingModal ──────────────────────────────────────────────────────────────

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
              ? parseBlocks(content)
              : <p className="rm-p" style={{ color: "var(--text-secondary)" }}>Loading…</p>
            }
          </div>
        </div>

      </div>
    </div>
  );
}
