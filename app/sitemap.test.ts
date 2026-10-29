import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists the home page so search engines index the site root", () => {
    expect(sitemap().map((entry) => entry.url)).toContain("https://vicent.io");
  });
});
