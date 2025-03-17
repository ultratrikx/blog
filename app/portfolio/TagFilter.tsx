"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

type TagFilterProps = {
    tags: string[];
};

export default function TagFilter({ tags }: TagFilterProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get active tags from URL
    const activeTags =
        searchParams.get("tags")?.split(",").filter(Boolean) || [];

    // Toggle a tag's active state
    const toggleTag = (tag: string) => {
        const newActiveTags = activeTags.includes(tag)
            ? activeTags.filter((t) => t !== tag)
            : [...activeTags, tag];

        // Update URL with new active tags
        const params = new URLSearchParams(searchParams);
        if (newActiveTags.length > 0) {
            params.set("tags", newActiveTags.join(","));
        } else {
            params.delete("tags");
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    // Clear all active filters
    const clearFilters = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("tags");
        router.replace(pathname);
    };

    return (
        <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <h2 className="text-sm font-medium mr-2">Filter by:</h2>

                {tags.map((tag) => (
                    <motion.button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            activeTags.includes(tag)
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tag}
                    </motion.button>
                ))}

                {activeTags.length > 0 && (
                    <motion.button
                        onClick={clearFilters}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Clear filters
                    </motion.button>
                )}
            </div>

            {activeTags.length > 0 && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Showing projects with tags: {activeTags.join(", ")}
                </div>
            )}
        </div>
    );
}
