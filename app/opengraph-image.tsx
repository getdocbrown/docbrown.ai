import { ImageResponse } from "next/og";
export const alt = "DocBrown — Your code has a history. Find the conversation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f7f8fa", display: "flex", flexDirection: "column", padding: "65px 80px", color: "#202930", fontFamily: "sans-serif" }}><div style={{ fontSize: 30 }}>docbrown.ai</div><div style={{ display: "flex", flexDirection: "column", marginTop: 95, fontSize: 67, letterSpacing: -3, lineHeight: 1.12 }}><div>Your code has a history.</div><div style={{ color: "#345f9c" }}>Find the conversation.</div></div><div style={{ marginTop: 52, fontSize: 25, color: "#65717e" }}>A local Mac app for your coding conversations.</div></div>, size);
}
