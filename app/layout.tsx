import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "rohanth marem",
        template: "%s",
    },
    description: "this is my public notebook",
    openGraph: {
        title: "rohanth marem",
        description: "this is my public notebook",
        url: baseUrl,
        siteName: "rohanth marem",
        locale: "en_CA",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "dark", // Default to dark mode
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="dark:bg-dark-900 min-h-screen">
                <main className="max-w-2xl mx-auto p-4 md:p-8">
                    <Navbar />
                    {children}
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>

                {/* Script to prevent theme flashing on load */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                // On page load, check localStorage for theme preference or default to dark
                                const savedTheme = localStorage.getItem('theme');
                                if (savedTheme) {
                                    document.documentElement.classList.remove('light', 'dark');
                                    document.documentElement.classList.add(savedTheme);
                                } else {
                                    document.documentElement.classList.add('dark');
                                    localStorage.setItem('theme', 'dark');
                                }
                            })();
                        `,
                    }}
                />
            </body>
        </html>
    );
}
