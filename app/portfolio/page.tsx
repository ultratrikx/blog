import type { Metadata } from "next";
import { getAllProjects } from "../../lib/projects";
import TagFilter from "./TagFilter";
import FilteredProjects from "./FilteredProjects";

export const metadata: Metadata = {
    title: "Portfolio | rohanth marem",
    description: "My portfolio of projects and work",
};

export default async function PortfolioPage() {
    const projects = await getAllProjects();

    // Extract all unique tags from projects
    const allTags = Array.from(
        new Set(projects.flatMap((project) => project.tags))
    ).sort();

    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Portfolio
            </h1>
            <div className="mb-6 prose prose-neutral dark:prose-invert">
                <p className="text-neutral-800 dark:text-neutral-200">
                    Here's a collection of my projects and work. Click on any
                    project to learn more.
                </p>
            </div>

            {/* Tag Filtering */}
            <TagFilter tags={allTags} />

            {/* Projects Grid with Filtering */}
            <FilteredProjects projects={projects} />
        </section>
    );
}
