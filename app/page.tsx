import Link from "next/link";
import SearchDemo from "@/components/search-demo";

// Render complete, indexable HTML on every request, including the demo's initial state.
export const dynamic = "force-dynamic";

const repository = "https://github.com/getdocbrown/docbrown-macos";

export default function Home() {
  return <div id="db-designs"><div className="db-site db-memory">
    <nav className="db-nav" aria-label="Main navigation">
      <Link className="db-logo" href="/" aria-label="DocBrown home"><span className="db-mark" aria-hidden="true">d<span>↶</span></span>docbrown<span className="db-domain">.ai</span></Link>
      <div className="db-navlinks"><Link href="/privacy">Privacy</Link><a href={repository}>GitHub</a></div>
    </nav>
    <main>
      <header className="db-hero">
        <h1>Your code has a history.<br /><em>Find the conversation.</em></h1>
        <p>A Mac app that indexes your Codex and Claude Code conversations locally.<br />Find the discussion behind a file, commit, or pull request.</p>
        <div className="db-actions"><a className="db-primary" href={`${repository}/releases/latest`}>Download the Mac app</a><a className="db-demo" href="#search-demo">Try the search demo</a></div>
        <div className="db-local-note">Runs on your Mac. Your conversations stay on your Mac. No account needed.</div>
        <div className="db-small">macOS 14+ <span>·</span> Apple silicon &amp; Intel <span>·</span> Open source</div>
      </header>
      <SearchDemo />
      <section className="db-bottom" aria-label="About DocBrown">
        <div><h2>Automatic import</h2><p>Reads your existing local Codex and Claude Code history and picks up new conversations as you work.</p></div>
        <div><h2>Connected to your code</h2><p>Search by repository, file, commit, or pull request. Read the original conversation with its surrounding context.</p></div>
        <div><h2>Stored on your Mac</h2><p>Conversations and search stay local. No account or telemetry. Optional GitHub lookup uses your existing login.</p></div>
      </section>
    </main>
    <footer className="db-footer"><span>docbrown.ai</span><a href={repository}>Source code</a></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "DocBrown", applicationCategory: "DeveloperApplication", operatingSystem: "macOS 14 or later", url: "https://docbrown.ai", downloadUrl: `${repository}/releases/latest`, description: "A local Mac app that indexes and searches Codex and Claude Code conversation history." }) }} />
  </div></div>;
}
