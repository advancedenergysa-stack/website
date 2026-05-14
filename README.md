# Advanced Energy SA — website

Coming soon landing page for [Advanced Energy SA](https://github.com/advancedenergysa-stack), built with [Next.js](https://nextjs.org), [shadcn/ui](https://ui.shadcn.com), and the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare) for [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Workers

**Workers Builds:** use build command `npm run build` and deploy command `npx wrangler deploy` (or `npm run deploy` if your pipeline runs a single script). The default `build` script runs the OpenNext Cloudflare builder so `.open-next/` exists before Wrangler deploys.

Preview in the Workers runtime (after a production build):

```bash
npm run preview
```

Deploy:

```bash
npm run deploy
```

Set `NEXT_PUBLIC_CONTACT_EMAIL` if you want the contact link to use a specific address (defaults to `info@advancedenergysa.com` in the UI).

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Cloudflare Next.js guide](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/)
