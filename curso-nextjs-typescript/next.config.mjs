/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'randomfox.ca',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
