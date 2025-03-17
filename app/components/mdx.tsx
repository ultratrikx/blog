import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

interface TableProps {
    data: {
        headers: string[];
        rows: string[][];
    };
}

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

// Properly type the link component to match MDXRemote expectations
function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const { href, children, ...rest } = props;

    if (!href) {
        return <a {...rest}>{children}</a>;
    }

    if (href.startsWith("/")) {
        return (
            <Link href={href} {...rest}>
                {children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return (
            <a href={href} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </a>
    );
}

// Updated to match Next.js Image component props
function RoundedImage(props: React.ComponentProps<typeof Image>) {
    return <Image className="rounded-lg" {...props} />;
}

// Fix the code component to match MDXRemote expectations
function Code(props: React.HTMLAttributes<HTMLElement>) {
    const { children, ...rest } = props;

    // Safe handling of children content
    const content = children
        ? typeof children === "string"
            ? children
            : String(children)
        : "";
    const codeHTML = highlight(content);

    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...rest} />;
}

function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");
}

// Update heading components to properly handle element types
function createHeading(level: number) {
    return function Heading({
        children,
        ...rest
    }: {
        children: React.ReactNode;
        [key: string]: any;
    }) {
        const text = typeof children === "string" ? children : "";
        const slug = slugify(text);

        // Explicitly define the heading element type based on level
        if (level === 1)
            return (
                <h1 id={slug} {...rest}>
                    {children}
                    <a href={`#${slug}`} className="anchor">
                        <span className="anchor-icon">#</span>
                    </a>
                </h1>
            );
        if (level === 2)
            return (
                <h2 id={slug} {...rest}>
                    {children}
                    <a href={`#${slug}`} className="anchor">
                        <span className="anchor-icon">#</span>
                    </a>
                </h2>
            );
        if (level === 3)
            return (
                <h3 id={slug} {...rest}>
                    {children}
                    <a href={`#${slug}`} className="anchor">
                        <span className="anchor-icon">#</span>
                    </a>
                </h3>
            );
        if (level === 4)
            return (
                <h4 id={slug} {...rest}>
                    {children}
                    <a href={`#${slug}`} className="anchor">
                        <span className="anchor-icon">#</span>
                    </a>
                </h4>
            );
        if (level === 5)
            return (
                <h5 id={slug} {...rest}>
                    {children}
                    <a href={`#${slug}`} className="anchor">
                        <span className="anchor-icon">#</span>
                    </a>
                </h5>
            );
        return (
            <h6 id={slug} {...rest}>
                {children}
                <a href={`#${slug}`} className="anchor">
                    <span className="anchor-icon">#</span>
                </a>
            </h6>
        );
    };
}

// Define components properly for MDXRemote
const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    img: RoundedImage, // Changed from Image to img to match MDX expectations
    a: CustomLink,
    code: Code,
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
        <table {...props} />
    ),
    // Don't include custom components that MDXRemote doesn't expect
};

interface CustomMDXProps {
    source: string;
    components?: Record<string, React.ComponentType<any>>;
}

export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            source={props.source}
            components={components as any} // Use type assertion as temporary fix
        />
    );
}
