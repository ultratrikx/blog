import { getBlogPosts } from "./blog/utils";
import { MetadataRoute } from "next";

// Define the base URL - change this to your production URL
export const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://rohanth-marem.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts();

    const blogEntries = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt),
    }));

    const routes = [
        "",
        "/blog",
        "/portfolio",
        "/values",
        "/inspiration",
        "/resume",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    return [...routes, ...blogEntries];
}
