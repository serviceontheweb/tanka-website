# Tanka Website

Official website for Tanka — an independent digital currency for everyday payments.

The site is built with Astro, TypeScript, and Tailwind CSS and is intended for static hosting on Cloudflare Pages. Tanka is in development; the site describes planned work without suggesting that the network, wallet, mining, or payment services are live.

## Development

```sh
npm install
npm run dev
npm run check
npm run build
```

## Deployment

See [docs/deployment.md](docs/deployment.md) for Cloudflare Pages settings, branch behavior, and custom-domain guidance.

## Architecture

- `src/pages/` contains static routes.
- `src/layouts/` contains the shared document shell.
- `src/styles/` contains design tokens and global styles.
- `public/` contains the approved Tanka brand assets and generated SEO files.

The production build is static (`dist/`) with no database, authentication, or server runtime.
