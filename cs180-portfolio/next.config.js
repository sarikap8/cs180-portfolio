/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // project page lives at /cs180-portfolio
  basePath: '/cs180-portfolio',
  assetPrefix: '/cs180-portfolio/',
};

module.exports = nextConfig;
