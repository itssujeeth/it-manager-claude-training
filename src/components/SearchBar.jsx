export function SearchBar({ query, onChange, resultCount }) {
  return (
    <div className="search-wrap">
      <span className="search-icon">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <input
        type="search"
        className="search-input"
        placeholder="Search weeks by title or skill tag…"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search curriculum"
      />
      {query && (
        <button className="search-clear" onClick={() => onChange("")} aria-label="Clear search">
          ×
        </button>
      )}
    </div>
  );
}
