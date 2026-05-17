/** Canonical site URL for metadata and Open Graph (set NEXT_PUBLIC_SITE_URL in production). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const cfPages = process.env.CF_PAGES_URL?.trim();
  if (cfPages) {
    const withProtocol = cfPages.startsWith("http") ? cfPages : `https://${cfPages}`;
    return withProtocol.replace(/\/$/, "");
  }

  return "https://advanced-energy-sa-website.workers.dev";
}
