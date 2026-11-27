import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./globals.css", import.meta.url), "utf8");

describe("global styles", () => {
  it("follows the system dark mode so the page doesn't glare at readers who browse at night", () => {
    expect(css).toContain("prefers-color-scheme: dark");
  });

  it("only paints hover backgrounds on devices that can hover, so a tap on a phone doesn't leave a link highlighted", () => {
    expect(css).toMatch(/@media \(hover: hover\) and \(pointer: fine\)\s*{\s*\.link:hover/);
  });

  it("shows the focus ring for keyboard users only, so clicking with a mouse doesn't flash an outline", () => {
    expect(css).toContain(".link:focus-visible");
    expect(css).not.toMatch(/\.link:focus\s*{/);
  });

  it("acknowledges a press immediately so links feel like they heard the click", () => {
    expect(css).toContain(".link:active");
  });
});
