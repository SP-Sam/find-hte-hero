/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.annihil.us'],
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
