/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: [
            // Add any external image domains you're using
        ],
        // Remove the unoptimized option to ensure images are properly processed
    },
    // This ensures that images work in development mode
    webpack(config) {
        return config;
    },
};

module.exports = nextConfig;
