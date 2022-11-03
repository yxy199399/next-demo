/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  alias: {
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, './pages')
      config.resolve.alias['@c'] = path.resolve(__dirname, './components')
      return config
    },
  },
}

module.exports = nextConfig
