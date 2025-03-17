import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notes | rohanth marem",
    description: "My thoughts, ideas, and notes on various topics",
};

export default function NotesPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Notes
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p className="text-neutral-800 dark:text-neutral-200">
                    A collection of my thoughts, ideas, and notes on various
                    topics.
                </p>

                <div className="mt-8 space-y-10">
                    <div>
                        <h2 className="text-xl font-medium">Note Title</h2>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                            January 1, 2023
                        </div>
                        <p>
                            Content of the note goes here. This is where I share
                            my thoughts on a particular topic.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium">Another Note</h2>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                            January 2, 2023
                        </div>
                        <p>
                            Content of the note goes here. This is where I share
                            my thoughts on a particular topic.
                        </p>
                    </div>

                    {/* Add more notes as needed */}
                </div>
            </div>
        </section>
    );
}
