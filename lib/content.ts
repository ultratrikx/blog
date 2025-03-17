import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export async function getContentBySlug(slug: string): Promise<string> {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        return fileContents;
    } catch (error) {
        console.error(`Error loading content for ${slug}:`, error);
        return `# Error Loading Content\n\nSorry, the content for "${slug}" could not be loaded.`;
    }
}
