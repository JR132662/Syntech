/**
 * Base URL for sitemap/robots.
 *
 * - In production, set NEXT_PUBLIC_SITE_URL to your public site URL.
 * - In development (when unset), we fall back to localhost so sitemap/robots still work locally.
 *
 * NOTE: We intentionally do NOT guess a production domain or use Vercel dashboard URLs,
 * so social shares can rely on the actual page URL the user is on.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  const port = process.env.PORT ?? 3000;
  return `http://localhost:${port}`;
}
