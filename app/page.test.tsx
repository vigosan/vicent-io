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
});
