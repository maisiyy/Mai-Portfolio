# 🌙 Mai's Portfolio

My personal portfolio site: skills, work experience, and projects across web development, game development, and VR.

**Live site:** https://maisiyy.github.io/Mai-Portfolio/

## Tech stack

- **Next.js** (App Router, static export)
- **React**
- **Three.js** via `@react-three/fiber` and `@react-three/drei`
- **Framer Motion** for animation
- **React Icons**

## Running locally

```bash
git clone https://github.com/maisiyy/Mai-Portfolio.git
cd Mai-Portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Building

```bash
npm run build
```

This produces a static site in `out/` (`output: 'export'` in `next.config.mjs`).

## Deployment

Every push to `master` is built and deployed to GitHub Pages by
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml). The workflow's
`configure-pages` step sets the `/Mai-Portfolio` base path automatically.

## Editing content

All portfolio content (experience, skills, projects, social links) lives in
[`src/data/portfolio.js`](src/data/portfolio.js). The components only handle
how it's displayed, so most updates only touch that one file.
