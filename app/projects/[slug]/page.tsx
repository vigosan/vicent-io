import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectStructuredData } from "@/app/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

async function findProject(params: Props["params"]) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return project;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await findProject(params);
  const title = `${project.name} by Vicent Gozalbes`;
  const url = `https://vicent.io/projects/${project.slug}`;

  return {
    title,
    description: project.description,
    keywords: [project.name, ...project.stack, "Vicent Gozalbes"],
    openGraph: {
      title,
      description: project.description,
      url,
      siteName: "Vicent Gozalbes",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description: project.description,
      creator: "@vigosan",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await findProject(params);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData(project)) }}
      />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-12 text-gray-500 antialiased lg:gap-24 lg:px-24 lg:py-16" style={{fontFamily: 'monospace'}}>
        <header className="flex flex-col justify-between">
          <Link href="/" className="focus:outline-none focus:ring-1 focus:ring-gray-400 rounded">
            <span className="font-medium tracking-wide text-gray-800">
              Vicent Gozalbes
            </span>
          </Link>
          <span className="text-gray-500">Web Engineer & UX Expert</span>
        </header>

        <main className="flex flex-col gap-8 lg:gap-12">
          <article className="flex flex-col gap-6">
            <div>
              <h1 className="text-lg font-medium text-gray-800">{project.name}</h1>
              <span className="text-sm text-gray-400">{project.year} • {project.stack.join(", ")}</span>
            </div>
            <p className="text-gray-600">{project.description}</p>
            <p>
              <span className="mr-3">→</span>
              <a
                href={project.url}
                className="font-medium underline hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} (opens in new tab)`}
              >
                Visit {project.name}
              </a>
            </p>
          </article>

          <nav>
            <Link
              href="/"
              className="underline hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
            >
              ← All projects
            </Link>
          </nav>
        </main>
      </div>
    </>
  );
}
