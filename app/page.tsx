import Link from "next/link";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vicent Gozalbes",
    jobTitle: "Web Engineer & UX Expert",
    description: "Full-stack web developer and usability expert specializing in React, user experience design, and creating intuitive interfaces",
    url: "https://vicent.io",
    email: "hello@vicent.io",
    sameAs: [
      "https://github.com/vigosan",
      "https://www.twitch.tv/vigosan",
      "https://www.instagram.com/vigosan"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Flywire",
      url: "https://www.flywire.com"
    },
    alumniOf: {
      "@type": "Organization",
      name: "Strands",
      url: "https://www.strands.com"
    },
    knowsAbout: [
      "React",
      "JavaScript",
      "TypeScript",
      "Full-Stack Development",
      "Frontend Development",
      "Web Development",
      "User Experience Design",
      "Usability Testing",
      "Interface Design",
      "User Research"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-12 text-gray-500 antialiased lg:gap-24 lg:px-24 lg:py-16" style={{fontFamily: 'monospace'}}>
      <header className="flex flex-col justify-between">
        <Link href="/" className="focus:outline-none focus:ring-1 focus:ring-gray-400 rounded">
          <h1 className="font-medium tracking-wide text-gray-800">
            Vicent Gozalbes
          </h1>
        </Link>
        <span className="text-gray-500">Web Engineer & UX Expert</span>
      </header>

      <main className="flex flex-col gap-8 lg:gap-12">
        <article className="flex flex-col gap-6">
          <h2 className="text-lg font-medium text-gray-800">Today</h2>
          <p>
            I work at{" "}
            <a
              href="https://www.flywire.com"
              className="underline font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Flywire (opens in new tab)"
            >
              Flywire
            </a>{" "}
            as a full-stack developer with expertise in usability and user experience. 
            I focus on creating intuitive interfaces and optimizing user flows, 
            contributing to several React-based projects with a user-centered approach.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="text-lg font-medium text-gray-800">Previously</h2>
          <p>
            As the Tech Lead at{" "}
            <a
              href="https://www.strands.com"
              className="underline font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strands (opens in new tab)"
            >
              Strands
            </a>
            , we launched the world&apos;s first sports social network, drawing
            in nearly a million users globally.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="text-lg font-medium text-gray-800">Projects</h2>
          <div className="flex flex-col gap-4">
            <div className="border-l-2 border-gray-300 pl-4 hover:border-gray-500 sm:pl-6">
              <div className="mb-2">
                <a 
                  href="https://discospy.app" 
                  className="font-medium underline hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DiscoSpy (opens in new tab)"
                >
                  DiscoSpy
                </a>
                <span className="ml-3 text-sm text-gray-400 block sm:inline mt-1 sm:mt-0">2024 • Next.js, React, TypeScript</span>
              </div>
              <p className="text-gray-600">
                Helps vinyl collectors track records they want to buy with 24/7 automatic monitoring 
                of Discogs marketplace. Manage your wantlist, get instant Telegram notifications 
                when desired records become available, and never miss rare pressings or limited 
                editions again.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 hover:border-gray-500 sm:pl-6">
              <div className="mb-2">
                <a 
                  href="https://gotwifi.vicent.io" 
                  className="font-medium underline hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gotwifi (opens in new tab)"
                >
                  Gotwifi
                </a>
                <span className="ml-3 text-sm text-gray-400 block sm:inline mt-1 sm:mt-0">2023 • React, QR Generation</span>
              </div>
              <p className="text-gray-600">
                An application that enhances the WiFi sharing experience by using
                QR codes. It allows you to easily share your WiFi connection with
                family or guests, adding a personal touch with your favorite photos.
                Forget about confusing network names and complicated passwords; just
                scan and connect instantly.
              </p>
            </div>
          </div>
        </article>

        <section className="flex flex-col gap-6">
          <h2 className="text-lg font-medium text-gray-800">Contact</h2>
          <address className="border border-gray-300 p-4 not-italic" style={{backgroundColor: 'rgba(0,0,0,0.02)'}}>
            <div className="mb-4">
              <span className="mr-3">→</span>
              <a 
                href="mailto:hello@vicent.io" 
                className="font-medium underline hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              >
                hello@vicent.io
              </a>
            </div>
            <p className="text-gray-600 pl-6">Available for interesting projects and collaborations.</p>
          </address>
        </section>

        <article className="flex flex-col gap-6">
          <h2 className="text-lg font-medium text-gray-800">More</h2>
          <p>
            You can check my code on{" "}
            <a
              href="https://github.com/vigosan"
              className="underline font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in new tab)"
            >
              GitHub
            </a>{" "}
            and, if you&apos;re into electronic music, tune into my live
            sessions on{" "}
            <a
              href="https://www.twitch.tv/vigosan"
              className="underline font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch (opens in new tab)"
            >
              Twitch
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/vigosan"
              className="underline font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in new tab)"
            >
              Instagram
            </a>
            .
          </p>
        </article>
      </main>
    </div>
    </>
  );
}
