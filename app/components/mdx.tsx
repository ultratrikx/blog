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

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
}

function CustomLink({ href, children, ...rest }: CustomLinkProps) {
    if (!href) {
        return <span {...rest}>{children}</span>;
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

interface RoundedImageProps extends React.ComponentProps<typeof Image> {
    alt: string;
}

function RoundedImage({ alt, ...rest }: RoundedImageProps) {
    return <Image alt={alt} className="rounded-lg" {...rest} />;
}

interface CodeProps {
    children: React.ReactNode;
    [key: string]: any;
}

function Code({ children, ...props }: CodeProps) {
    const codeContent = typeof children === "string" ? children : "";
    const codeHTML = highlight(codeContent);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
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

interface HeadingProps {
    children: string;
}

function createHeading(level: number) {
    const Heading = ({ children }: HeadingProps) => {
        const slug = slugify(children);
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                }),
            ],
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
};

interface CustomMDXProps {
    source: string;
    components?: Record<string, React.ComponentType<any>>;
}

export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
