import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * `npm run build` runs `opennextjs-cloudflare build`, which must invoke Next.js
 * via a different script name to avoid recursively calling `npm run build`.
 */
export default {
  ...defineCloudflareConfig(),
  buildCommand: "npm run build:next",
};
