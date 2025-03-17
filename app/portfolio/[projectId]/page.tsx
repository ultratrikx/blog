import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Markdown from "react-markdown";
import { getProjectData } from "../../../lib/projects";

// Generate metadata for each project page
export async function generateMetadata({
    params,
}: {
    params: { projectId: string };
}): Promise<Metadata> {
    const project = await getProjectData(params.projectId);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Portfolio | rohanth marem`,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: { projectId: string };
}) {
    const project = await getProjectData(params.projectId);

    if (!project) {
        notFound();
    }

    // Log image path for debugging
    console.log(`Project detail page image path: ${project.image}`);

    return (
        <article className="max-w-4xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/portfolio"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition"
                >
                    ← Back to Portfolio
                </Link>
            </div>

            {/* Image header with inline styles matching the working card layout */}
            <div
                style={{
                    position: "relative",
                    height: "300px",
                    marginBottom: "2rem",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                }}
            >
                {/* Direct HTML img tag with inline styles like in the card */}
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        display: "block",
                    }}
                />

                {/* Darkening overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                ></div>

                {/* Text content */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        padding: "1.5rem",
                        color: "white",
                    }}
                >
                    <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                    <p className="text-lg opacity-90">{project.description}</p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Project Content (Markdown) */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <Markdown>{project.content}</Markdown>
            </div>
        </article>
    );
}
