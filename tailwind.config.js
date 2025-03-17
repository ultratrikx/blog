module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // Keep class-based dark mode for toggling
    theme: {
        extend: {
            colors: {
                dark: {
                    900: "#111111",
                    800: "#1A1A1A",
                    700: "#2A2A2A",
                    600: "#3A3A3A",
                },
                // Remove cream colors as we're not using light mode styling
            },
            textDecoration: {
                none: "none",
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            textDecoration: "none",
                            color: "var(--link-color)",
                            "&:hover": {
                                textDecoration: "none",
                                color: "var(--link-hover)",
                            },
                        },
                        color: "var(--text-primary)",
                    },
                },
            },
        },
    },
    plugins: [],
};
