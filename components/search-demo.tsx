"use client";

import { useRef, useState } from "react";
import { Search, GitPullRequest, LockKeyhole } from "lucide-react";

const examples = [
  { query: "authentication redirect", results: [
    { title: "Fix the authentication redirect loop", snippet: "Keep the return path before refreshing the session…", quote: "Keep the return path before refreshing the session. Otherwise, the callback sends you back to the login screen.", agent: "Claude Code", branch: "fix/auth-redirect", pr: 142 },
    { title: "Review session handling in middleware", snippet: "The redirect happens before the cookie is available.", quote: "The redirect happens before the cookie is available. Let’s handle the callback before evaluating the authentication guard.", agent: "Codex", branch: "auth-middleware", pr: 142 },
  ] },
  { query: "src/cache.ts", results: [
    { title: "Add invalidation to src/cache.ts", snippet: "Invalidate on write, then repopulate on the next read.", quote: "Invalidate on write, then repopulate on the next read. That keeps the cache logic in one place.", agent: "Claude Code", branch: "fix/cache-invalidation", pr: 158 },
    { title: "Investigate stale cache entries", snippet: "A short TTL still leaves a window for stale results.", quote: "A short TTL still leaves a window for stale results. Explicit invalidation fits this workflow better.", agent: "Codex", branch: "cache-investigation", pr: 158 },
  ] },
];

export default function SearchDemo() {
  const [query, setQuery] = useState(examples[0].query);
  const [selected, setSelected] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const excerpt = useRef<HTMLDivElement>(null);
  const results = examples.find((example) => example.query === query)?.results ?? (query.toLowerCase().includes("cache") ? examples[1].results : examples[0].results);
  const matches = query === "#142" || examples.some((example) => example.query === query) ? results : results.filter((result) => `${result.title} ${result.snippet} ${result.branch} ${result.agent}`.toLowerCase().includes(query.trim().toLowerCase()));
  const active = matches[Math.min(selected, Math.max(0, matches.length - 1))];

  return <section className="db-showcase" id="search-demo" aria-label="Interactive search demo">
    <div className="db-showcase-label"><span>Search from any app</span><span>⌘ D</span></div>
    <div className="db-search-window">
      <div className="db-searchbar"><Search aria-hidden="true" /><label className="db-sr" htmlFor="db-query">Search example conversations</label><input ref={input} id="db-query" value={query} spellCheck={false} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} onKeyDown={(event) => {
        if ((event.key === "ArrowDown" || event.key === "ArrowUp") && matches.length) { event.preventDefault(); setSelected((value) => (value + (event.key === "ArrowDown" ? 1 : matches.length - 1)) % matches.length); }
        if (event.key === "Enter") excerpt.current?.focus();
      }} /><kbd>↵</kbd></div>
      <div className="db-result-meta"><span>Conversations</span><span>Example history</span></div>
      {matches.length ? matches.map((result, index) => <button className={`db-result ${selected === index ? "db-selected" : ""}`} type="button" key={result.title} aria-pressed={selected === index} onClick={() => setSelected(index)}>
        <span className={`db-agent ${result.agent === "Codex" ? "db-codex" : ""}`} aria-hidden="true">{result.agent === "Codex" ? "⌘" : "C"}</span>
        <span className="db-result-copy"><strong>{result.title}</strong><span>“{result.snippet}”</span><small>web-app <b>/</b> {result.branch} <b>·</b> {result.agent}</small></span><span className="db-return" aria-hidden="true">{selected === index ? "↵" : ""}</span>
      </button>) : <p className="db-empty" role="status">No matches in this example. Try “authentication redirect” or “src/cache.ts”.</p>}
      {active && <div className="db-preview" ref={excerpt} tabIndex={-1} aria-label="Selected conversation excerpt" aria-live="polite"><span className="db-preview-label">Conversation excerpt</span><p>“{active.quote}”</p><span className="db-evidence"><GitPullRequest aria-hidden="true" /> PR #{active.pr} <span>·</span> Confirmed commit match</span></div>}
      <div className="db-windowfoot"><span><kbd>↑</kbd><kbd>↓</kbd> to select <kbd>↵</kbd> to read</span><span><LockKeyhole aria-hidden="true" /> On your Mac</span></div>
    </div>
    <div className="db-search-suggestions"><span>Search examples:</span>{["authentication redirect", "src/cache.ts", "#142"].map((value) => <button key={value} type="button" onClick={() => { setQuery(value); setSelected(0); input.current?.focus(); }}>{value}</button>)}</div>
  </section>;
}
