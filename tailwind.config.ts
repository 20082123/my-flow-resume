import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f4ee",
        ink: "#171411",
        muted: "#6f6a62",
        line: "#ded7ca",
        moss: "#546a5b",
        cobalt: "#234f86",
        copper: "#a45d38",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 20, 17, 0.08)",
      },
      animation: {
        "fade-up": "fade-up 800ms cubic-bezier(.2,.8,.2,1) both",
        "line-in": "line-in 1100ms cubic-bezier(.2,.8,.2,1) both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-in": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
