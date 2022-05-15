/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://miftahshidiq.com/',
  },
}

module.exports = nextConfig
