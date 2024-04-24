/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
