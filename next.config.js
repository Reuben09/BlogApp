/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  }
}
// const withImages = require('next-images')
// module.exports = withImages()

module.exports = nextConfig
