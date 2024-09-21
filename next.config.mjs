/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ytimg.com',
          port: '', // Jika tidak ada port spesifik
          pathname: '/**', // Mengizinkan semua path dari domain ini
        },
      ],
  },
};

export default nextConfig;
