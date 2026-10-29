# docbrown.ai

The DocBrown website. Next.js App Router, React, and TypeScript, deployed to Cloudflare Workers with OpenNext.

The homepage renders on the server for every request. All primary content and the search demo’s initial state are in the response HTML. Only the illustrative search demo needs client-side JavaScript; search queries are never sent to a server.

## Development

Use Node 22 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3100.

## Checks and deployment

```sh
npm run typecheck
npm run build:cloudflare
npm run preview
npm run deploy
```

Deployment targets the `docbrown-ai` Worker in the personal Cloudflare account declared in `wrangler.jsonc`. Authenticate with `npx wrangler login` before deployment, or configure Cloudflare’s GitHub build integration with build command `npm run build:cloudflare` and deploy command `npx opennextjs-cloudflare deploy`.

The site provides canonical metadata, a sitemap, robots.txt, a social preview image, and SoftwareApplication structured data. Download links go to the latest Mac app release on GitHub.

No website analytics, tracking scripts, tracking cookies, or runtime secrets are required.
