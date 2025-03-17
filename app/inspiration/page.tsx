import type { Metadata } from "next";
import { getContentBySlug } from "../../lib/content";
import Markdown from "react-markdown";

export const metadata: Metadata = {
    title: "Inspiration | rohanth marem",
    description: "People, ideas, and works that inspire me",
};

export default async function InspirationPage() {
    // Fetch the inspiration content from markdown file
    const content = await getContentBySlug("inspiration");

    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Inspiration
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <Markdown>{content}</Markdown>
            </div>
        </section>
    );
}
