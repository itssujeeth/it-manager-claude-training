// Loads markdown files lazily — each file is a separate chunk fetched on demand.
// Usage: await loadContent("w01-llm-basics") → markdown string | null

const loaders = import.meta.glob("./*.md", { query: "?raw", import: "default" });

export function loadContent(key) {
  const fn = loaders[`./${key}.md`];
  return fn ? fn() : Promise.resolve(null);
}

// hasContent lets callers check existence without triggering a load.
export function hasContent(key) {
  return !!(key && loaders[`./${key}.md`]);
}
