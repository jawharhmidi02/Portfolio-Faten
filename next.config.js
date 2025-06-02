/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "fatenselmi.vercel.app"],
    unoptimized: true,
  },
  env: {
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
