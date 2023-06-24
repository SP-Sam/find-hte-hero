/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.annihil.us'],
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true,
    appDir: true,
  },
}

module.exports = nextConfig
