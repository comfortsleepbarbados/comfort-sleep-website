/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Add this if you get image errors
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.comfortsleepbarbados.com',
      },
    ],
  },
};

module.exports = nextConfig;

