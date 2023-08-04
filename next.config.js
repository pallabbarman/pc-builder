/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        BASE_URL: process.env.BASE_URL,
    },
};

module.exports = nextConfig;
