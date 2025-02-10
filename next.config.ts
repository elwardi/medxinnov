/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/medxinnov' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/medxinnov/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;