/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  basePath: process.env.BASE_PATH || '/app/stock', // Add this line
};

export default nextConfig;
