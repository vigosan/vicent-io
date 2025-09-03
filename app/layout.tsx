import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vicent Gozalbes - Web Engineer & Full-Stack Developer",
  description: "Full-stack web developer specializing in React and frontend technologies. Currently at Flywire, previously Tech Lead at Strands. Based in Spain, available for interesting projects.",
  keywords: ["Vicent Gozalbes", "Web Engineer", "Full-Stack Developer", "React Developer", "Frontend Developer", "JavaScript", "TypeScript", "Flywire", "Strands"],
  authors: [{ name: "Vicent Gozalbes" }],
  creator: "Vicent Gozalbes",
  openGraph: {
    title: "Vicent Gozalbes - Web Engineer",
    description: "Full-stack web developer specializing in React and frontend technologies. Currently at Flywire, previously Tech Lead at Strands.",
    url: "https://vicent.io",
    siteName: "Vicent Gozalbes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Vicent Gozalbes - Web Engineer",
    description: "Full-stack web developer specializing in React and frontend technologies.",
    creator: "@vigosan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vicent.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
      <Analytics />
    </html>
  );
}
