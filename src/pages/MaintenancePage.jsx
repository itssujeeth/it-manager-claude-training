export function MaintenancePage() {
  return (
    <div className="maint-root">
      <div className="maint-card">

        <div className="maint-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
            <path d="M14.83 9.17a4 4 0 0 1 0 5.66" />
            <path d="M9.17 9.17a4 4 0 0 0 0 5.66" />
          </svg>
        </div>

        <div className="maint-eyebrow">Scheduled maintenance</div>
        <h1 className="maint-title">We'll be back shortly</h1>
        <p className="maint-body">
          We're making improvements to the Claude for IT Support Managers training portal.
          The site will be back online soon.
        </p>

        <div className="maint-divider" />

        <p className="maint-disclaimer">
          Not affiliated with or endorsed by Anthropic.
          Independent community training resource.
        </p>

      </div>
    </div>
  );
}
