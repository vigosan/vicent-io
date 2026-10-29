import { describe, expect, it } from "vitest";
import { projects, projectStructuredData } from "./projects";

describe("projects", () => {
  it("has unique slugs so every project gets its own URL", () => {
    const slugs = projects.map(({ slug }) => slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("projectStructuredData", () => {
  const surco = projects.find(({ slug }) => slug === "surco")!;
  const data = projectStructuredData(surco);

  it("tells search engines the project is software made by Vicent", () => {
    expect(data).toMatchObject({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Surco",
      author: { "@type": "Person", name: "Vicent Gozalbes", url: "https://vicent.io" },
    });
  });

  it("points to the live product and to its page on vicent.io", () => {
    expect(data.url).toBe("https://getsurco.app");
    expect(data.mainEntityOfPage).toBe("https://vicent.io/projects/surco");
  });

  it("exposes the release year and stack as searchable facts", () => {
    expect(data.datePublished).toBe("2026");
    expect(data.keywords).toBe(surco.stack.join(", "));
  });
});
