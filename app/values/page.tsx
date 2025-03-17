import type { Metadata } from "next";
import { getContentBySlug } from "../../lib/content";
import Markdown from "react-markdown";

export const metadata: Metadata = {
    title: "Values | rohanth marem",
    description: "My personal and professional values",
};

export default async function ValuesPage() {
    // Fetch the values content from markdown file
    const content = await getContentBySlug("values");

    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Values
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <Markdown>{content}</Markdown>
            </div>
        </section>
    );
}
