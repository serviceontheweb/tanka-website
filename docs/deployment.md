# Cloudflare Pages deployment

## Project settings

Connect the `serviceontheweb/tanka-website` GitHub repository to Cloudflare Pages.

- Framework preset: Astro
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `22.23.4` (also recorded in `.node-version`)
- Build environment: `NODE_VERSION=22.23.4`

Pull requests should use Pages preview deployments. Merges or pushes to `main` trigger production deployments.

## Custom domains

Add `tanka.money` in the Pages project’s Custom domains panel after a preview deployment succeeds. Cloudflare’s Pages flow may create or request a DNS record; inspect existing records before accepting changes. Keep unrelated records intact. Add `www.tanka.money` as an alias only if its redirect to the apex domain is configured and verified. Enable HTTPS and verify certificate issuance and HTTP-to-HTTPS redirection.

This repository does not contain DNS credentials or zone-specific records. Do not copy DNS records from another zone or delete existing records to resolve a Pages validation error.

## Local development

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

The output is static HTML, CSS, JavaScript, and assets in `dist/`. The site has no database, authentication, or server-side runtime.
