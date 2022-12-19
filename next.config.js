/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
   loader : "akamai",
   path: "",
  },
  basePath:`${process.env.NEXT_PUBLIC_PATH}`,
  assetPrefix:`${process.env.NEXT_PUBLIC_PATH}`,
}

module.exports = nextConfig
