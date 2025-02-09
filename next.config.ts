/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique
  basePath: '/medxinnov', // Ajoutez cette ligne
  assetPrefix: '/medxinnov/', // Ajoutez cette ligne
  images: {
    unoptimized: true, // Désactive l'optimisation d'images
  },
};

module.exports = nextConfig;