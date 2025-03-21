import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "notes | rohanth marem",
    description: "Read my thoughts and notes on various topics",
};

export default function BlogPage(): JSX.Element {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                notes
            </h1>
            <BlogPosts />
        </section>
    );
}
