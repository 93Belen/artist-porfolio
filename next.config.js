/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // loader: 'custom',
    // loaderFile: './src/app/loader.js',
    domains: ['drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flic.kr',
        port: '',
        pathname: '/**',
      },
    ],
},
}

module.exports = nextConfig

