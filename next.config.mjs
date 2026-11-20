// The site is served from https://maisiyy.github.io/Mai-Portfolio/, so every
// production URL needs the /Mai-Portfolio prefix. Plain <img src="/..."> and
// <a href="/..."> tags don't get it automatically, so we expose it to the app
// as NEXT_PUBLIC_BASE_PATH and prefix those paths with `asset()`.
const basePath = process.env.NODE_ENV === 'production' ? '/Mai-Portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
