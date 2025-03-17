"use client";

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Project } from "../../lib/projects";

type FilteredProjectsProps = {
    projects: Project[];
};

// Project card component with hover effects
function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="relative h-64 overflow-hidden rounded-lg shadow-md"
            whileHover={{
                y: -5,
                transition: { duration: 0.2 },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            layout
        >
            {/* Ultra-simple card layout with direct HTML for image */}
            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                {/* Direct HTML img tag for maximum compatibility */}
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

                {/* Simple darkening overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                ></div>

                {/* Content */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1.5rem",
                        color: "white",
                    }}
                >
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Link */}
                <Link
                    href={`/portfolio/${project.id}`}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    aria-label={`View ${project.title} details`}
                />
            </div>
        </motion.div>
    );
}

export default function FilteredProjects({ projects }: FilteredProjectsProps) {
    const searchParams = useSearchParams();
    const tagFilter =
        searchParams.get("tags")?.split(",").filter(Boolean) || [];

    // Filter projects based on active tags
    const filteredProjects =
        tagFilter.length > 0
            ? projects.filter((project) =>
                  tagFilter.some((tag) => project.tags.includes(tag))
              )
            : projects;

    return (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" layout>
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
                <motion.div
                    className="col-span-2 text-center py-8 text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    No projects found with the selected tags.
                </motion.div>
            )}
        </motion.div>
    );
}
