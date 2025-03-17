import Link from "next/link";
import type { Metadata } from "next";
import { BlogPosts } from "app/components/posts";

export const metadata: Metadata = {
    title: "rohanth marem",
    description: "personal website and notes",
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
                        i'm a 17y/o high school student passionate about
                        robotics, drones, machine learning and building things
                        that matter. also sidequesting to make the panams in
                        karate. i love f1, matcha and celsius. based close
                        enough to toronto
                    </p>
                    <p className="dark:text-neutral-200">
                        this is my public notebook i share my work, thoughts and
                        experiences.
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
                            — building ai drones that create insights to combat
                            climate change. funded $5000 by{" "}
                            <Link
                                href="https://www.bloomberg.org/government-innovation/spurring-innovation-in-cities/youth-climate-action-fund/"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                {" "}
                                bloomberg philanthropies
                            </Link>{" "}
                            and backed by the{" "}
                            <Link
                                href="https://www.oakville.ca/town-hall/news-notices/2024-mayor-s-news-archive/mayor-rob-burton-announces-winners-of-the-2024-youth-climate-action-fund/"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                town of oakville
                            </Link>
                            .
                        </li>
                        <li className="mb-2">
                            <Link
                                href="/portfolio/woss-robotics"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                8433 VEX Robotics
                            </Link>{" "}
                            — leading a team of freshman in building high stakes
                            VEX robots. top 5 in canada, only public hs team
                            from ontario to qualify to world championships.
                            waterloo competition build award winners.
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

            {/* Section 3: Past Work */}
            <div className="mb-12">
                <h1 className="font-medium text-2xl mb-4 tracking-tighter dark:text-white">
                    some other shennanigans
                </h1>
                <div className="prose prose-invert">
                    <p className="dark:text-neutral-200">
                        i've also done some other things:
                    </p>
                    <ul className="list-disc pl-4 dark:text-neutral-200 mt-2">
                        <li className="mb-2">
                            <Link
                                href="https://karatecanada.org/"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                Karate Nationals Qualifier
                            </Link>{" "}
                            — elite kata athlete in karate, qualified for the
                            karate canada national champions in vancouver this
                            year. representing team ontario.
                        </li>
                        <li className="mb-2">
                            <Link
                                href="https://www.deca.org/conferences/icdc"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                DECA ICDC '25
                            </Link>{" "}
                            — 2x regional champ, current provincial champion in
                            buying and merchandising marketing. heading to
                            orlando for internationals.
                        </li>
                        <li className="mb-2">
                            <span className="font-medium dark:text-white">
                                Ontario Science Centre Volunteer
                            </span>{" "}
                            — spent time volunteering at the science centre over
                            the summer, helping out with the exhibits and
                            teaching the science behind them. at least i was
                            until the place got shutdown.
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                className="font-medium dark:text-white no-underline [text-decoration:none!important] relative after:absolute after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500"
                            >
                                See my full resume
                            </Link>{" "}
                            for more details about my past work, education and
                            accolades.
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
