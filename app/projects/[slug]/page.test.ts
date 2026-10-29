import { describe, expect, it } from "vitest";
import { projects } from "@/app/projects";
import ProjectPage, { generateMetadata, generateStaticParams } from "./page";

const params = (slug: string) => ({ params: Promise.resolve({ slug }) });

describe("project page", () => {
  it("prerenders a page for every project so each one can be indexed on its own URL", () => {
    expect(generateStaticParams()).toEqual(projects.map(({ slug }) => ({ slug })));
  });

  it("titles the page with the project name so searches for it match", async () => {
    const metadata = await generateMetadata(params("cuts"));

    expect(metadata.title).toBe("Cuts by Vicent Gozalbes");
  });

  it("uses the project description as the search snippet", async () => {
    const cuts = projects.find(({ slug }) => slug === "cuts")!;

    const metadata = await generateMetadata(params("cuts"));

    expect(metadata.description).toBe(cuts.description);
    expect(metadata.openGraph?.description).toBe(cuts.description);
  });

  it("declares its own canonical URL so search engines don't fold it into the home page", async () => {
    const metadata = await generateMetadata(params("oh-my-dj"));

    expect(metadata.alternates?.canonical).toBe("https://vicent.io/projects/oh-my-dj");
  });

  it("returns a 404 for unknown projects instead of an empty indexable page", async () => {
    await expect(ProjectPage(params("missing"))).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });
});
