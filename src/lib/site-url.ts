function normalizeUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, "");
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
}

/**
 * Canonical site URL for metadata and Open Graph.
 * On Vercel, set NEXT_PUBLIC_SITE_URL to your custom domain for best link previews.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeUrl(explicit);
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction && process.env.VERCEL_ENV === "production") {
    return normalizeUrl(vercelProduction);
  }

  const vercelDeployment = process.env.VERCEL_URL?.trim();
  if (vercelDeployment) {
    return normalizeUrl(vercelDeployment);
  }

  const cfPages = process.env.CF_PAGES_URL?.trim();
  if (cfPages) {
    return normalizeUrl(cfPages);
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://advanced-energy-sa-website.vercel.app";
}
