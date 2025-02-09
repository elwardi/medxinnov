/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique
  images: {
    unoptimized: true, // Désactive l'optimisation d'images
  },
  basePath: process.env.NODE_ENV === 'production' ? '/medxinnov' : '', // Remplacez par le nom de votre repo
};

module.exports = nextConfig;