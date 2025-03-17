import type { Metadata } from "next";
import { getAllProjects, getAllTags } from "../../lib/projects";
import TagFilter from "./TagFilter";
import FilteredProjects from "./FilteredProjects";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Portfolio | rohanth marem",
    description: "My portfolio of projects and work",
};

export default async function PortfolioPage() {
    const projects = await getAllProjects();
    const allTags = await getAllTags(); // Use the getAllTags function directly

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

            {/* Wrap client components in Suspense boundary */}
            <Suspense
                fallback={
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-md mb-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
                                ></div>
                            ))}
                        </div>
                    </div>
                }
            >
                <TagFilter tags={allTags} />
                <FilteredProjects projects={projects} />
            </Suspense>
        </section>
    );
}
