export type Project = {
  slug: string;
  name: string;
  url: string;
  year: number;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "cuts",
    name: "Cuts",
    url: "https://cuts.vicent.io",
    year: 2026,
    stack: ["Electron", "React 19", "TypeScript", "Tailwind", "FFmpeg"],
    description:
      "A Mac app that turns any long video into short clips for an Instagram carousel. Mark clips while you listen, fine-tune them on a timeline with video frames and the audio waveform, pick fades and Instagram crops per clip, and export them all at once in carousel order, entirely on the Mac with a bundled FFmpeg.",
  },
  {
    slug: "oh-my-dj",
    name: "Oh My DJ",
    url: "https://oh-my-dj.vicent.io",
    year: 2026,
    stack: ["C++", "Qt", "OBS", "libobs"],
    description:
      "An OBS plugin that makes life simple for DJs: a single dock to rotate cameras and scenes on a timer, and one-click multistreaming to several platforms at once. It reuses OBS's own encoder for zero extra CPU and replaces the heavyweight obs-multi-rtmp and Advanced Scene Switcher setup with one focused, friendly panel.",
  },
  {
    slug: "surco",
    name: "Surco",
    url: "https://getsurco.app",
    year: 2026,
    stack: ["Electron", "React 19", "TypeScript", "Tailwind", "ffmpeg"],
    description:
      "Desktop app for DJs to organize and prepare their audio tracks. Features waveform and spectrogram visualization, cutoff detection, audio conversion via ffmpeg, Discogs and Apple Music metadata enrichment, and a keyboard-driven command palette. Built as a monorepo with an Electron desktop app and a Vite product site.",
  },
  {
    slug: "welist",
    name: "Welist",
    url: "https://welist.io",
    year: 2026,
    stack: ["React 19", "TypeScript", "Hono", "Drizzle", "Neon", "TanStack Query/Router", "Leaflet", "Stripe"],
    description:
      "Collaborative bucket list app for creating, sharing, and completing lists together. Features public and collaborative modes, challenger progress tracking, geocoded places with interactive map view, internationalization, and Stripe-powered premium features.",
  },
  {
    slug: "mixxo",
    name: "Mixxo",
    url: "https://mixxo.io",
    year: 2025,
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "PostgreSQL", "PostGIS"],
    description:
      "SaaS platform for DJs to create, manage and share professional press kits. Features geographic search with PostGIS, public profiles, downloadable press kits with photos and QR codes, and analytics dashboard. Built as a Turborepo monorepo with separate public site and DJ dashboard applications.",
  },
  {
    slug: "onnme",
    name: "Onnme",
    url: "https://github.com/vigosan/onnme-app",
    year: 2025,
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"],
    description:
      "Modern restaurant order and payment system featuring QR code ordering, real-time kitchen display, and integrated Stripe payments. Customers scan QR codes to browse menus, order, and pay instantly without downloads. Dashboard provides menu management, order tracking with Kanban board, analytics, and multi-tenant support via subdomains. Built as a Turborepo monorepo with customer PWA and restaurant dashboard applications.",
  },
  {
    slug: "discospy",
    name: "DiscoSpy",
    url: "https://discospy.app",
    year: 2024,
    stack: ["Next.js", "React", "TypeScript"],
    description:
      "Helps vinyl collectors track records they want to buy with 24/7 automatic monitoring of Discogs marketplace. Manage your wantlist, get instant Telegram notifications when desired records become available, and never miss rare pressings or limited editions again.",
  },
  {
    slug: "gotwifi",
    name: "Gotwifi",
    url: "https://gotwifi.vicent.io",
    year: 2023,
    stack: ["React", "QR Generation"],
    description:
      "An application that enhances the WiFi sharing experience by using QR codes. It allows you to easily share your WiFi connection with family or guests, adding a personal touch with your favorite photos. Forget about confusing network names and complicated passwords; just scan and connect instantly.",
  },
];
