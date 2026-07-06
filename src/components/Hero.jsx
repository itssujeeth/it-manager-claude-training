import { useState } from "react";

const DISMISSED_KEY = "claude-training-hero-dismissed";

export function Hero({ stats, onBegin }) {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(DISMISSED_KEY) === "1"
  );

  // Auto-hide once any progress has been made
  if (dismissed || stats.doneItems > 0) return null;

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="hero">
      <div className="hero-pills">
        <span className="hero-pill">24 weeks</span>
        <span className="hero-pill">~90 min / week</span>
        <span className="hero-pill">IT Support Managers</span>
        <span className="hero-pill">Claude Pro or Team</span>
      </div>

      <h2>Build AI skills that move your support team forward</h2>

      <p className="hero-desc">
        A self-paced curriculum covering daily operations, people management, process improvement,
        and strategic AI adoption. Each week has a reading checklist, one hands-on deliverable,
        and a notes field — everything you need to learn by doing.
      </p>

      <div className="hero-outcomes">
        <div className="hero-outcome">
          <span className="hero-check">✓</span>
          <span>15+ tested prompt library</span>
        </div>
        <div className="hero-outcome">
          <span className="hero-check">✓</span>
          <span>AI governance framework</span>
        </div>
        <div className="hero-outcome">
          <span className="hero-check">✓</span>
          <span>Team training workshop</span>
        </div>
        <div className="hero-outcome">
          <span className="hero-check">✓</span>
          <span>AI-augmented operating model</span>
        </div>
      </div>

      <div className="hero-actions">
        <button className="hero-cta" onClick={onBegin}>Begin Week 1 →</button>
        <button className="hero-dismiss" onClick={handleDismiss}>Dismiss</button>
      </div>
    </div>
  );
}
