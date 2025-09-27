/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Comment out for local development, uncomment for GitHub Pages deployment
  basePath: '/cs180-portfolio',
  assetPrefix: '/cs180-portfolio/',
};

module.exports = nextConfig;
