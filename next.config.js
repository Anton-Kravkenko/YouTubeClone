/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  async rewrites() {
    return  [{
      source: '/api/:path',
      destination: 'https://localhost:4200/api/:path*'
    }, {source: '/uploads/:path',
      destination: 'https://localhost:4200/uploads/:path*'}]
  },
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