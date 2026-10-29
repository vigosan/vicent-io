import { describe, expect, it } from "vitest";
import { projects } from "./projects";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists the home page so search engines index the site root", () => {
    expect(sitemap().map((entry) => entry.url)).toContain("https://vicent.io");
  });

  it("lists every project page so search engines discover all of them", () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const { slug } of projects) {
      expect(urls).toContain(`https://vicent.io/projects/${slug}`);
    }
  });
});
