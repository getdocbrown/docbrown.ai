import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://docbrown.ai"),
  title: { default: "DocBrown — Find the conversation behind your code", template: "%s | DocBrown" },
  description: "A local Mac app that indexes your Codex and Claude Code conversations. Search by file, commit, or pull request. No account, no telemetry.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "DocBrown", url: "https://docbrown.ai", title: "Your code has a history. Find the conversation.", description: "Search your Codex and Claude Code conversations locally on your Mac.", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "DocBrown — Find the conversation behind your code", description: "A local Mac app for your coding conversations.", images: ["/opengraph-image"] },
  icons: { icon: "/docbrown.png", apple: "/docbrown.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
