/**
 * Base URL for the site: share links, Open Graph, canonical, sitemap.
 * Uses NEXT_PUBLIC_SITE_URL if set, otherwise Vercel deployment URL, otherwise localhost.
 * No fallback to a production domain so the link always matches where the app is actually running.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  const port = process.env.PORT ?? 3000;
  return `http://localhost:${port}`;
}
