/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: [
            // Add domains for external images
            "github.com",
            "raw.githubusercontent.com",
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        // Allow unoptimized images in development for faster builds
        unoptimized: process.env.NODE_ENV === "development",
    },
    // // Add Vercel Analytics optimization hint
    // analyticsId: process.env.VERCEL_ANALYTICS_ID,
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
