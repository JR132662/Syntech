import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        syntech: {
          black: "#0a0a0a",
          white: "#ffffff",
          offwhite: "#fafaf8",
          green: "#2d5a27",
          "green-light": "#7cb342",
          turf: "#2d7d4a",
          "turf-light": "#e8f5e9",
          neutral: "#f8faf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "hero-fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "hero-in": "hero-fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
