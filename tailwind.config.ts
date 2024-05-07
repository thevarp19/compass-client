import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            white: "white",
            black: "black",
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            red: "var(--color-red)",
            green: "var(--color-green)",
            button_color: "var(--color-button)",
            gray: "var(--color-gray)",
            gray_text: "var(--color-gray-text)",
            grayDark_text: "var(--color-grayDark-text)",
            gray_border: "var(--color-gray-border)",
        },
        extend: {
            backgroundImage: {
                "gradient-to-r-gray":
                    "linear-gradient(90deg, rgba(217, 217, 217, 0.28) 0%, rgba(115, 115, 115, 0.28) 100%)",

                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
