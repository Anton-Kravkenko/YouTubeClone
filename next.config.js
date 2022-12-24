/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['www.pngitem.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  cssModules: true,
  
}

module.exports = nextConfig