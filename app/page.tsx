import Link from "next/link";
import type { Metadata } from "next";
import { BlogPosts } from "app/components/posts";

export const metadata: Metadata = {
    title: "rohanth marem",
    description: "Personal website and blog",
};

export default function HomePage() {
    return (
        <section className="dark:bg-dark-900">
            {/* Section 1: Introduction */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter dark:text-white">
                    hey i'm rohanth
                </h1>
                <div className="prose prose-invert">
                    <p className="dark:text-neutral-200">
                        i'm a high school stduent passionate about robotics,
                        drones, machine learning and building things that
                        matter. this is my public notebook i share my work,
                        thoughts and experiences.
                    </p>
                    <p className="dark:text-neutral-200">
                        currently based in [Toronto]. I enjoy exploring the
                        intersection of [your interests, e.g., "technology and
                        design" or "AI and healthcare"].
                    </p>
                    <p className="dark:text-neutral-200">
                        feel free to reach out to me on{" "}
                        <a
                            href="https://twitter.com/rohanthmarem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                        >
                            Twitter
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://linkedin.com/in/rohanth-marem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>
            </div>
            {/* Section 2: Current Projects */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter dark:text-white">
                    what im working on
                </h1>
                <div className="prose prose-invert">
                    <p className="dark:text-neutral-200">
                        lately i've been doing a couple things:
                    </p>
                    <ul className="list-disc pl-4 dark:text-neutral-200 mt-2">
                        <li className="mb-2">
                            <Link
                                href="/portfolio/tensorforest"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                TensorForest
                            </Link>{" "}
                            — ai drones that create climate insights
                        </li>
                        <li className="mb-2">
                            <Link
                                href="/portfolio/woss-robotics"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                8433 VEX Robotics
                            </Link>{" "}
                            — leading a team of freshman in building high stakes
                            robots
                        </li>
                        {/* <li>
                            <a
                                href="https://github.com/ultratrikx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                Open Source Contributions
                            </a>{" "}
                            — Details about any open source projects you're
                            contributing to.
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* Section 3: Past Work
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter dark:text-white">
                    in the past
                </h1>
                <div className="prose prose-invert">
                    <p className="dark:text-neutral-200">
                        i've done some things:
                    </p>
                    <ul className="list-disc pl-4 dark:text-neutral-200 mt-2">
                        <li className="mb-2">
                            <Link
                                href="/portfolio/project-three"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                Past Project One
                            </Link>{" "}
                            — What you accomplished, technologies used, and its
                            impact.
                        </li>
                        <li className="mb-2">
                            <span className="font-medium dark:text-white">
                                Company Name
                            </span>{" "}
                            — Your role and key accomplishments during your time
                            there.
                        </li>
                        <li className="mb-2">
                            <a
                                href="https://example.com/publication"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                Research Publication
                            </a>{" "}
                            — Any research papers or significant publications
                            you've contributed to.
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                See my full resume
                            </Link>{" "}
                            for more details about my past work and education.
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div className="my-8">
                <BlogPosts />
            </div> */}
        </section>
    );
}
