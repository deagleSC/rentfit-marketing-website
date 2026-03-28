/**
 * Marketing site copy aligned with `rentfit-v1-web` (app metadata + product UX).
 */

export const SITE_NAME = "RentFit";

/** Matches `rentfit-v1-web` `layout.tsx` default description. */
export const SITE_DESCRIPTION = "Discover and list rental properties.";

/** Longer hero / SEO blurb derived from the app (search + map + chat). */
export const SITE_DESCRIPTION_LONG =
  "Describe what you want in plain language, explore listings on a map, and chat with an assistant that helps you find the right rental. Owners can list properties on a modern marketplace.";

export const SITE_TAGLINE =
  "Ask in natural language. See rentals on the map. List your place when you are ready.";

export const KEYWORDS = [
  "rental search",
  "rent apartments India",
  "rental marketplace",
  "AI rental assistant",
  "map rental listings",
  "list rental property",
  "RentFit",
  "Bangalore rentals",
  "Mumbai rentals",
  "Kolkata rentals",
] as const;

/** Canonical marketing site URL (this repo). */
export function getMarketingSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/+$/, "")}`;
  return "http://localhost:3000";
}

/** Deployed product app when `NEXT_PUBLIC_APP_URL` is unset (rentfit-v1-web on Vercel). */
export const DEFAULT_APP_URL = "https://rentfit-v1-web.vercel.app";

/**
 * Product app URL (`rentfit-v1-web`). Override with `NEXT_PUBLIC_APP_URL` (e.g. http://localhost:3000 for local app).
 */
export function getAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  return DEFAULT_APP_URL;
}
