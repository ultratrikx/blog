import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define types
export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    tags: string[];
    content: string;
};

const projectsDirectory = path.join(process.cwd(), "projects");

// Simple function to handle image paths
function getImagePath(imageName: string): string {
    // If empty, use default
    if (!imageName) {
        return "/projects/images/default.jpg";
    }

    // If it's already a full URL or path, return it
    if (imageName.startsWith("http") || imageName.startsWith("/")) {
        return imageName;
    }

    // For debugging - log image path
    const imagePath = `/projects/images/${imageName}`;
    console.log(`Creating path for image: ${imageName} -> ${imagePath}`);

    // For testing, let's also log the complete URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const fullUrl = `${baseUrl}${imagePath}`;
    console.log(`Full URL would be: ${fullUrl}`);

    return imagePath;
}

// Get all project IDs
export function getProjectIds() {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            return {
                id: fileName.replace(/\.md$/, ""),
            };
        });
}

// Get project data by ID
export function getProjectData(id: string): Project | null {
    const fullPath = path.join(projectsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    // Read markdown file as string
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Ensure all required fields are present
    const data = matterResult.data;

    // Get the image path with simple logging for debugging
    const imagePath = getImagePath(data.image || "default.jpg");
    console.log(`[DEBUG] Project ${id} image path: ${imagePath}`);

    return {
        id,
        title: data.title || "Untitled Project",
        description: data.description || "",
        image: imagePath,
        date: data.date || new Date().toISOString(),
        tags: Array.isArray(data.tags) ? data.tags : [],
        content: matterResult.content,
    };
}

// Get all projects - with fallback for testing
export function getAllProjects(): Project[] {
    if (!fs.existsSync(projectsDirectory)) {
        // Return dummy data for development if no projects folder exists yet
        return [
            {
                id: "project-one",
                title: "Project One",
                description: "A short description of the first project.",
                image: "/projects/images/default.jpg",
                date: "2023-01-01",
                tags: ["React", "TypeScript", "Tailwind CSS"],
                content: "# Project One\n\nThis is the content of project one.",
            },
            {
                id: "project-two",
                title: "Project Two",
                description: "A short description of the second project.",
                image: "/projects/images/default.jpg",
                date: "2023-01-02",
                tags: ["Next.js", "Node.js", "MongoDB"],
                content: "# Project Two\n\nThis is the content of project two.",
            },
            {
                id: "project-three",
                title: "Project Three",
                description: "A short description of the third project.",
                image: "/projects/images/default.jpg",
                date: "2023-01-03",
                tags: ["React Native", "Firebase", "Expo"],
                content:
                    "# Project Three\n\nThis is the content of project three.",
            },
        ];
    }

    const ids = getProjectIds();
    const projects = ids
        .map(({ id }) => getProjectData(id))
        .filter((project): project is Project => project !== null)
        // Sort projects by date
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    return projects;
}

// Get all unique tags from projects
export function getAllTags(): string[] {
    const projects = getAllProjects();
    return Array.from(
        new Set(projects.flatMap((project) => project.tags))
    ).sort();
}
