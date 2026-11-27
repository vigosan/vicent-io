import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "./page";
import { projects } from "./projects";

describe("home page", () => {
  const html = renderToStaticMarkup(<Home />);

  it("links to every project page so crawlers can follow them from the home page", () => {
    for (const { slug } of projects) {
      expect(html).toContain(`href="/projects/${slug}"`);
    }
  });

  it("keeps a direct link to every live product", () => {
    for (const { url } of projects) {
      expect(html).toContain(`href="${url}"`);
    }
  });

  it("gives every link the shared link style so they all respond the same to hover, press and keyboard focus", () => {
    const anchors = html.match(/<a [^>]*>/g)!;

    for (const anchor of anchors) {
      expect(anchor).toMatch(/class="[^"]*\blink\b/);
    }
  });

  it("takes its typeface from the theme instead of an inline style, so every system renders the same monospace", () => {
    expect(html).not.toContain("font-family");
  });
});
