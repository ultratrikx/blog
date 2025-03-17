/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: [
            // Add any external image domains you're using
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        // Disable remote patterns for simpler configuration
        unoptimized: process.env.NODE_ENV === "development",
    },
    // More efficient webpack configuration
    webpack(config) {
        // Disable verbose image-related logging
        if (process.env.NODE_ENV === "production") {
            config.infrastructureLogging = {
                level: "error",
            };
        }
        return config;
    },
};

module.exports = nextConfig;
