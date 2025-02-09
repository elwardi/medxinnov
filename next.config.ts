/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/medxinnov",
  assetPrefix: "/medxinnov/",
  images: {
    domains: ['localhost'], // Ajouter les domaines utilisés
  },
};

export default nextConfig;