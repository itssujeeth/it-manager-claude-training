import { useState } from "react";

const DISMISSED_KEY = "claude-training-orientation-dismissed";

export function Orientation() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(DISMISSED_KEY) === "1"
  );

  if (dismissed) return null;

  return (
    <div className="orientation">
      <div className="orientation-header">
        <span className="orientation-label">Before you start</span>
        <button
          className="orientation-close"
          onClick={() => { localStorage.setItem(DISMISSED_KEY, "1"); setDismissed(true); }}
          aria-label="Dismiss orientation"
        >
          ×
        </button>
      </div>

      <div className="orientation-grid">
        <div className="orientation-item">
          <div className="orientation-item-title">Who this is for</div>
          <div className="orientation-item-body">
            IT Support Managers and team leads who want to apply Claude in daily operations,
            coaching, incident response, process improvement, and AI adoption planning.
          </div>
        </div>

        <div className="orientation-item">
          <div className="orientation-item-title">What you need</div>
          <div className="orientation-item-body">
            A Claude Pro or Team account. No coding required. Each week takes roughly 90 minutes
            — one focused session is enough to complete the reading and deliverable.
          </div>
        </div>

        <div className="orientation-item">
          <div className="orientation-item-title">Safe data rules</div>
          <div className="orientation-item-body">
            Never paste customer PII, employee records, credentials, proprietary configs, or
            ticket data that identifies real people into any AI prompt. Use anonymized examples
            throughout this course.
          </div>
        </div>

        <div className="orientation-item">
          <div className="orientation-item-title">What you will leave with</div>
          <div className="orientation-item-body">
            An AI use case catalog, a tested prompt library (15+ prompts), a governance framework,
            a team training workshop, an adoption roadmap, and a complete AI-augmented operating
            model for your support team.
          </div>
        </div>
      </div>
    </div>
  );
}
