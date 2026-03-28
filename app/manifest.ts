import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chessvine.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chessvine - AI Chess Analysis Platform",
    short_name: "Chessvine",
    description:
      "AI-powered chess game analysis platform. Upload your PGN files, get detailed insights, practice puzzles, and improve your chess game.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/app-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/app-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
