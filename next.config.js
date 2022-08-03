/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: '/nextjs-gh-pages',
  assetPrefix: '/nextjs-gh-pages',
}

module.exports = nextConfig
