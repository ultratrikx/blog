import fs from "fs";
import path from "path";

export type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
};

export type BlogPost = {
    metadata: Metadata;
    slug: string;
    content: string;
};

function parseFrontmatter(fileContent: string): {
    metadata: Metadata;
    content: string;
} {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
        throw new Error("Frontmatter not found in content");
    }

    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        const colonPosition = line.indexOf(":");
        if (colonPosition !== -1) {
            const key = line.slice(0, colonPosition).trim();
            let value = line.slice(colonPosition + 1).trim();

            // Remove quotes if present
            value = value.replace(/^['"](.*)['"]$/, "$1");

            metadata[key as keyof Metadata] = value;
        }
    });

    return {
        metadata: {
            title: metadata.title || "Untitled",
            publishedAt: metadata.publishedAt || new Date().toISOString(),
            summary: metadata.summary || "",
            image: metadata.image,
        },
        content,
    };
}

function getMDXFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) {
        return [];
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): {
    metadata: Metadata;
    content: string;
} {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): BlogPost[] {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getBlogPosts(): BlogPost[] {
    return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function formatDate(date: string, includeRelative = false): string {
    let currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date);

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = "Today";
    }

    let fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}
