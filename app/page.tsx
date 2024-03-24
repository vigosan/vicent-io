import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-12 text-gray-500 antialiased lg:gap-24 lg:px-24 lg:py-16">
      <header className="flex flex flex-col justify-between">
        <Link href="/">
          <h1 className="font-medium font-normal tracking-wide text-gray-800">
            Vicent Gozalbes
          </h1>
        </Link>
        <span className="text-gray-400">Web Engineer</span>
      </header>

      <main className="flex flex-col gap-12 lg:gap-24">
        <article className="flex flex-col gap-6">
          <h2 className="font-medium font-normal text-gray-800">Today</h2>
          <p>
            I work at{" "}
            <a
              href="https://www.flywire.com"
              className="underline"
              target="_blank"
            >
              Flywire
            </a>{" "}
            as a full-stack developer with a specific passion for the frontend,
            contributing to several projects built in React.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="font-medium font-normal text-gray-800">Previously</h2>
          <p>
            At{" "}
            <a
              href="https://www.strands.com"
              className="underline"
              target="_blank"
            >
              Strands
            </a>
            , as Tech Lead, we created the first sports social network which
            garnered thousands of users around the world.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="font-medium font-normal text-gray-800">More</h2>
          <p>
            You can check out my coding projects on{" "}
            <a
              href="https://github.com/vigosan"
              className="underline"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and, if you&apos;re into electronic music, tune into my live
            sessions on{" "}
            <a
              href="https://www.twitch.tv/vigosan"
              className="underline"
              target="_blank"
            >
              Twitch
            </a>
            .
          </p>
        </article>
      </main>
    </div>
  );
}
