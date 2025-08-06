import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // This can help when exporting as a static site
  trailingSlash: true, // This ensures URLs have a trailing slash

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  images: {
    domains: ['cdn.builder.io'],
    unoptimized: true
  }
}

export default nextConfig
