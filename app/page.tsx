import Link from "next/link";
import type { Metadata } from "next";
import { BlogPosts } from "app/components/posts";

export const metadata: Metadata = {
    title: "rohanth marem",
    description: "Personal website and blog",
};

export default function HomePage() {
    return (
        <section>
            {/* Section 1: Introduction */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter">
                    hey im rohanth
                </h1>
                <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-neutral-800 dark:text-neutral-200">
                        I'm a software engineer and researcher passionate about
                        technology, machine learning, and building solutions
                        that matter. Welcome to my personal corner of the
                        internet where I share my work, thoughts, and
                        experiences.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        Currently based in [City], where I [brief statement
                        about what you do]. I enjoy exploring the intersection
                        of [your interests, e.g., "technology and design" or "AI
                        and healthcare"].
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        Feel free to reach out to me on{" "}
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Twitter
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>
            </div>

            {/* Section 2: Current Projects */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter">
                    what im working on
                </h1>
                <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-neutral-800 dark:text-neutral-200">
                        Here are some of the projects I'm currently focused on:
                    </p>
                    <ul className="list-disc pl-4 text-neutral-800 dark:text-neutral-200 mt-2">
                        <li className="mb-2">
                            <Link
                                href="/portfolio/project-one"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Project One
                            </Link>{" "}
                            — A brief description of what this project is about
                            and what technologies you're using.
                        </li>
                        <li className="mb-2">
                            <Link
                                href="/portfolio/project-two"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Project Two
                            </Link>{" "}
                            — Another exciting project you're working on with
                            some details about its purpose.
                        </li>
                        <li>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Open Source Contributions
                            </a>{" "}
                            — Details about any open source projects you're
                            contributing to.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section 3: Past Work */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter">
                    in the past
                </h1>
                <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-neutral-800 dark:text-neutral-200">
                        Selected projects and experiences from my past work:
                    </p>
                    <ul className="list-disc pl-4 text-neutral-800 dark:text-neutral-200 mt-2">
                        <li className="mb-2">
                            <Link
                                href="/portfolio/project-three"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Past Project One
                            </Link>{" "}
                            — What you accomplished, technologies used, and its
                            impact.
                        </li>
                        <li className="mb-2">
                            <span className="font-medium">Company Name</span> —
                            Your role and key accomplishments during your time
                            there.
                        </li>
                        <li className="mb-2">
                            <a
                                href="https://example.com/publication"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Research Publication
                            </a>{" "}
                            — Any research papers or significant publications
                            you've contributed to.
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                See my full resume
                            </Link>{" "}
                            for more details about my past work and education.
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className="my-8">
                <BlogPosts />
            </div> */}
        </section>
    );
}
