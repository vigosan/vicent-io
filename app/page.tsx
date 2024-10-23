import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-12 text-gray-500 antialiased lg:gap-24 lg:px-24 lg:py-16">
      <header className="flex  flex-col justify-between">
        <Link href="/">
          <h1 className="font-medium tracking-wide text-gray-800">
            Vicent Gozalbes
          </h1>
        </Link>
        <span className="text-gray-400">Web Engineer</span>
      </header>

      <main className="flex flex-col gap-12 lg:gap-24">
        <article className="flex flex-col gap-6">
          <h2 className="font-medium text-gray-800">Today</h2>
          <p>
            I work at{" "}
            <a
              href="https://www.flywire.com"
              className="underline font-medium"
              target="_blank"
            >
              Flywire
            </a>{" "}
            as a full-stack developer with a specific passion for the frontend,
            contributing to several projects built in React.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="font-medium text-gray-800">Previously</h2>
          <p>
            As the Tech Lead at{" "}
            <a
              href="https://www.strands.com"
              className="underline font-medium"
              target="_blank"
            >
              Strands
            </a>
            , we launched the world&apos;s first sports social network, drawing
            in nearly a million users globally.
          </p>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="font-medium text-gray-800">Projects</h2>
          <div>
            <a href="https://gotwifi.vicent.io" className="font-medium underline">
              gotwifi.art
            </a>{" "}
            is an application that enhances the WiFi sharing experience by using
            QR codes. It allows you to easily share your WiFi connection with
            family or guests, adding a personal touch with your favorite photos.
            Forget about confusing network names and complicated passwords; just
            scan and connect instantly.
          </div>
        </article>

        <article className="flex flex-col gap-6">
          <h2 className="font-medium text-gray-800">More</h2>
          <p>
            You can check out my code on{" "}
            <a
              href="https://github.com/vigosan"
              className="underline font-medium"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and, if you&apos;re into electronic music, tune into my live
            sessions on{" "}
            <a
              href="https://www.twitch.tv/vigosan"
              className="underline font-medium"
              target="_blank"
            >
              Twitch
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/vigosan"
              className="underline font-medium"
              target="_blank"
            >
              Instagram
            </a>
            .
          </p>
        </article>
      </main>
    </div>
  );
}
