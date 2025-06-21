/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // Hapus optimizePackageImports untuk framer-motion
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
  // Tambahkan konfigurasi untuk framer-motion
  transpilePackages: ['framer-motion']
};

module.exports = nextConfig;